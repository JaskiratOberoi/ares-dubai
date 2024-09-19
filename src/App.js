import React from "react";

function App() {
  const Size = window.innerWidth / 10;
  const Stroke = Size * 0.05;
  return (
    <div className="app">
      <div className="title new-amsterdam-regular">
        ARES DUBAI
        <div className="cs">COMING SOON</div>
        <div className="heartbeat">
          <l-cardio
            size={Size}
            stroke={Stroke}
            speed="2"
            color="#d1b464"
          ></l-cardio>
        </div>
      </div>
    </div>
  );
}

export default App;
