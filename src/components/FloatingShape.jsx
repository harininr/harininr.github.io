import React from 'react';

const FloatingShape = ({ type, color, size, top, left, right, bottom, delay }) => {
  const getShapeStyle = () => {
    const baseStyle = {
      position: 'fixed',
      background: color,
      opacity: 0.1,
      animation: `float 15s infinite ease-in-out ${delay}`,
      zIndex: 0
    };

    switch (type) {
      case 'circle':
        return {
          ...baseStyle,
          width: size,
          height: size,
          borderRadius: '50%',
          top,
          left,
          right,
          bottom
        };
      case 'square':
        return {
          ...baseStyle,
          width: size,
          height: size,
          borderRadius: '8px',
          top,
          left,
          right,
          bottom
        };
      case 'triangle':
        return {
          ...baseStyle,
          width: 0,
          height: 0,
          background: 'transparent',
          borderLeft: `${parseInt(size)/2}px solid transparent`,
          borderRight: `${parseInt(size)/2}px solid transparent`,
          borderBottom: `${size} solid ${color}`,
          top,
          left,
          right,
          bottom
        };
      default:
        return baseStyle;
    }
  };

  return <div style={getShapeStyle()} />;
};

export default FloatingShape;