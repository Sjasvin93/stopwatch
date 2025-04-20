import { useEffect, useState } from "react";

function App() {

  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime(prev => prev + 10);
      }, 10);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const ms = `0${(time % 1000) / 10}`.slice(0, 2);
    const sec = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const min = `0${Math.floor((time / 60000) % 60)}`.slice(-2);
    return `${min}:${sec}:${ms}`;
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-700">
      <div className="bg-white/10 backdrop-blur-md rounded-3xl p-16 shadow-2xl flex flex-col items-center justify-center">
        <div className="absolute top-4 right-4 cursor-pointer" onClick={() => { setIsRunning(false); setTime(0) }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            id="Outline"
            viewBox="0 0 24 24"
            width="20"
            height="20"
            className="text-white"
          >
            <path
              fill="currentColor"
              d="M21.962,12.875A10.03,10.03,0,1,1,19.122,5H16a1,1,0,0,0-1,1h0a1,1,0,0,0,1,1h4.143A1.858,1.858,0,0,0,22,5.143V1a1,1,0,0,0-1-1h0a1,1,0,0,0-1,1V3.078A11.985,11.985,0,1,0,23.95,13.1a1.007,1.007,0,0,0-1-1.1h0A.982.982,0,0,0,21.962,12.875Z"
            />
          </svg>
        </div>
        <div className="flex justify-center items-center h-60 w-60 shadow-xl rounded-full bg-gradient-to-tr from-yellow-300 via-yellow-400 to-yellow-500">
          <h1 className="text-3xl font-mono text-white">{formatTime(time)}</h1>
        </div>
        <div className="mt-8 flex gap-4">
          {
            !isRunning ?
              (
                <button className="px-6 py-2 bg-green-500 hover:bg-green-600 rounded-full text-white shadow" onClick={() => setIsRunning(true)}>
                  Start
                </button>
              ) :
              (
                <button className="px-6 py-2 bg-red-500 hover:bg-red-600 rounded-full text-white shadow" onClick={() => setIsRunning(false)}>
                  Stop
                </button>
              )
          }
        </div>
      </div>
    </div >
  );
}

export default App;
