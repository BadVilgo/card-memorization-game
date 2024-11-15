import React from "react";

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <div className="loading-screen__progress-bar-container">
        <div className="loading-screen__progress-bar-bg"></div>
        <div className="loading-screen__progress-bar"></div>
      </div>
    </div>
  );
}
