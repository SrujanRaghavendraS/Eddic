import React, { useEffect, useRef, useState } from 'react';
import cornerstone from 'cornerstone-core';
import cornerstoneWADOImageLoader from 'cornerstone-wado-image-loader';
import dicomParser from 'dicom-parser';
import html2canvas from 'html2canvas';
import { Sun, Moon, ZoomIn, ZoomOut, Pencil, Circle, Text, Info, Save } from 'lucide-react';
import './modal.css';

const Modal = ({ isOpen, onClose, filePath }) => {
  const elementRef = useRef(null);
  const canvasRef = useRef(null); // Ref for the canvas element
  const [isDrawing, setIsDrawing] = useState(false);
  const [startCoords, setStartCoords] = useState(null);
  const [rectangle, setRectangle] = useState(null); // Store only one rectangle
  const [circle, setCircle] = useState(null); // Store only one circle
  const [isAnnotationMode, setAnnotationMode] = useState(false); // Annotation mode state
  const [isCircleMode, setIsCircleMode] = useState(false); // Toggle for circle mode
  const [isTextMode, setIsTextMode] = useState(false); // Toggle for text mode
  const [texts, setTexts] = useState([]); // Store multiple texts
  const [dicomMetadata, setDicomMetadata] = useState(null); // DICOM metadata state

  useEffect(() => {
    if (isOpen) {
      cornerstoneWADOImageLoader.external.cornerstone = cornerstone;
      cornerstoneWADOImageLoader.external.dicomParser = dicomParser;
      cornerstone.enable(elementRef.current);

      const imageId = 'wadouri:' + filePath;
      cornerstone.loadImage(imageId).then((image) => {
        cornerstone.displayImage(elementRef.current, image);
        // Set canvas size to match Cornerstone element size
        const canvas = canvasRef.current;
        canvas.width = elementRef.current.clientWidth;
        canvas.height = elementRef.current.clientHeight;

        // Fetch and set the DICOM metadata using the correct method
        const metadata = cornerstone.metaData.get('native', imageId);
        setDicomMetadata(metadata);
      });
    }

    return () => {
      cornerstone.disable(elementRef.current);
    };
  }, [isOpen, filePath]);

  const updateViewport = (updateFn) => {
    const viewport = cornerstone.getViewport(elementRef.current);
    updateFn(viewport);
    cornerstone.setViewport(elementRef.current, viewport);
  };

  const drawShape = (event) => {
    if (!isDrawing || !startCoords) return;

    const rect = elementRef.current.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;

    if (isCircleMode) {
      // Draw a circle
      const radius = Math.sqrt(Math.pow(x - startCoords.x, 2) + Math.pow(y - startCoords.y, 2));
      setCircle({ x: startCoords.x, y: startCoords.y, radius });
    } else {
      // Draw a rectangle (existing functionality)
      const width = x - startCoords.x;
      const height = y - startCoords.y;
      setRectangle({ x: startCoords.x, y: startCoords.y, width, height });
    }
  };

  // Unified function for handling both touch and mouse start events
  const handleStart = (event) => {
    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    const rect = elementRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    if (isTextMode) {
      // Add text on touch or mouse start
      const newText = prompt("Enter your text: ");
      if (newText) {
        setTexts((prevTexts) => [
          ...prevTexts,
          { text: newText, x, y, color: 'red' }, // You can change the color or other properties
        ]);
      }
      setIsTextMode(false); // Disable text mode after placing the text
    } else {
      setIsDrawing(true);
      setStartCoords({ x, y });
    }
  };

  const handleMove = (event) => {
    if (!isDrawing || !startCoords) return;

    const clientX = event.touches ? event.touches[0].clientX : event.clientX;
    const clientY = event.touches ? event.touches[0].clientY : event.clientY;

    drawShape({ clientX, clientY });
  };

  const handleEnd = () => {
    setIsDrawing(false); // Reset drawing state
  };

  const adjustBrightness = (value) => {
    updateViewport((viewport) => {
      viewport.voi.windowCenter += value;
    });
  };

  const adjustContrast = (value) => {
    updateViewport((viewport) => {
      viewport.voi.windowWidth += value;
    });
  };

  const zoomIn = () => updateViewport((viewport) => (viewport.scale += 0.1));
  const zoomOut = () => updateViewport((viewport) => (viewport.scale -= 0.1));

  // Toggle annotation mode
  const toggleAnnotationMode = () => {
    setAnnotationMode((prev) => !prev);
    if (isAnnotationMode) {
      setIsDrawing(false); // Reset drawing state when stopping drawing
    }
  };

  // Toggle circle mode
  const toggleCircleMode = () => {
    setIsCircleMode((prev) => !prev);
    // Do not reset rectangle when switching to circle mode
  };

  // Toggle text mode
  const toggleTextMode = () => {
    setIsTextMode((prev) => !prev);
  };

  // Display DICOM metadata in an alert
  const showDicomMetadata = () => {
    if (dicomMetadata) {
      const fileName = filePath.split('/').pop(); // Extract file name from path
      const creationDate = dicomMetadata['0008,0012']; // Replace with the correct DICOM tag for creation date

      alert(`File Name: ${fileName}\nCreation Date: ${creationDate || 'Not available'}`);
    } else {
      alert('No DICOM metadata available.');
    }
  };

  const saveSnapshot = () => {
    const container = elementRef.current; // Element to capture
    html2canvas(container, { useCORS: true }).then((canvas) => {
      const link = document.createElement('a');
      link.href = canvas.toDataURL('image/png');
      link.download = 'snapshot.png';
      link.click();
    });
  };

  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      
      <div className="modal-content">
      <button onClick={onClose} className="close-btn">X</button>
        <div className="main-content">
          <div className="file-content">
            <div
              ref={elementRef}
              style={{ width: '100%', height: '400px', position: 'relative' }}
              onMouseDown={handleStart}
              onMouseMove={handleMove}
              onMouseUp={handleEnd}
              onTouchStart={handleStart}
              onTouchMove={handleMove}
              onTouchEnd={handleEnd}
            >
              {/* Canvas overlay for annotations */}
              <canvas
                ref={canvasRef}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  pointerEvents: isAnnotationMode ? 'auto' : 'none', // Disable pointer events when not in annotation mode
                }}
              />
              {/* Render the rectangle */}
              {rectangle && (
                <div
                  style={{
                    position: 'absolute',
                    top: rectangle.y,
                    left: rectangle.x,
                    width: rectangle.width,
                    height: rectangle.height,
                    border: '2px solid red',
                  }}
                />
              )}
              {/* Render the circle */}
              {circle && (
                <div
                  style={{
                    position: 'absolute',
                    top: circle.y - circle.radius,
                    left: circle.x - circle.radius,
                    width: circle.radius * 2,
                    height: circle.radius * 2,
                    borderRadius: '50%',
                    border: '2px solid blue',
                  }}
                />
              )}
              {/* Render the texts */}
              {texts.map((text, index) => (
                <div
                  key={index}
                  style={{
                    position: 'absolute',
                    top: text.y,
                    left: text.x,
                    color: text.color,
                    fontSize: '20px',
                  }}
                >
                  {text.text}
                </div>
              ))}
            </div>
          </div>
          <div className="controls">
            <button onClick={toggleAnnotationMode} className="control-btn">
              <Pencil size={20} /> {isAnnotationMode ? 'Stop Drawing' : 'Start Drawing'}
            </button>
            <button onClick={toggleCircleMode} className="control-btn">
              <Circle size={20} /> {isCircleMode ? 'Stop Circle' : 'Start Circle'}
            </button>
            <button onClick={toggleTextMode} className="control-btn">
              <Text size={20} /> {isTextMode ? 'Stop Text' : 'Add Text'}
            </button>
            <button onClick={() => adjustBrightness(-70)} className="control-btn">
              <Sun size={20} /> Brightness +
            </button>
            <button onClick={() => adjustBrightness(+70)} className="control-btn">
              <Moon size={20} /> Brightness -
            </button>
            <button onClick={() => adjustContrast(70)} className="control-btn">
              Increase Contrast
            </button>
            <button onClick={() => adjustContrast(-70)} className="control-btn">
              Decrease Contrast
            </button>
            <button onClick={zoomIn} className="control-btn">
              <ZoomIn size={20} /> Zoom In
            </button>
            <button onClick={zoomOut} className="control-btn">
              <ZoomOut size={20} /> Zoom Out
            </button>

            {/* Button to show DICOM metadata */}
            <button onClick={showDicomMetadata} className="control-btn">
              <Info size={20} /> Show Metadata
            </button>

            {/* Button to save a snapshot */}
            <button onClick={saveSnapshot} className="control-btn">
              <Save size={20} /> Save Snapshot
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
