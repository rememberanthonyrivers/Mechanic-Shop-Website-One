import React from 'react';

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="speedometer-loader">
        <div className="speed-marks"></div>
        <div className="needle"></div>
        <div className="center-point"></div>
      </div>
    </div>
  );
}