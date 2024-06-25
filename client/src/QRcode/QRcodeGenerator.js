import React, { useState } from 'react';
import QRCode from 'qrcode.react';

function QRCodeGenerator() {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value);
  };

  const handleClear = () => {
    setText('');
  };

  return (
    <div className="bg-slate-400 flex flex-col items-center justify-center min-h-screen bg-hero-pattern bg-cover bg-center text-textPrimary">

      <header className="flex flex-col items-center bg-black bg-opacity-50 p-8 rounded-lg">
        <h1 className="text-4xl font-bold mb-6 animate-bounce">SIMPLE QR Code Generator</h1>
        <input 
          type="text" 
          placeholder="Enter text" 
          value={text} 
          onChange={handleChange} 
          className="p-2 mb-4 w-full max-w-md text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-primary transition duration-300 ease-in-out transform hover:scale-105"
        />
        <div className="flex space-x-4">
          <button 
            onClick={handleClear}
            className="bg-secondary text-textPrimary px-4 py-2 rounded-lg hover:bg-purple-700 transition duration-300 ease-in-out transform hover:scale-105"
          >
            Clear
          </button>
          {text && (
            <button
              onClick={() => setText('')}
              className="bg-primary text-textPrimary px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 ease-in-out transform hover:scale-105"
            >
              Generate
            </button>
          )}
        </div>
        {text && (
          <div className="mt-6 p-4 bg-white rounded-lg shadow-lg animate-fadeIn">
            <QRCode value={text} size={256} className="shadow-lg" />
          </div>
        )}
      </header>
    </div>
  );
}

export default QRCodeGenerator;
