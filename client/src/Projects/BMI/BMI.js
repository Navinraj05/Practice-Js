import React, { useState } from 'react';
//import './App.css';

function  BMI() {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('');

  const calculateBMI = () => {
    const heightInMeters = height / 100;
    const bmiValue = (weight / (heightInMeters * heightInMeters)).toFixed(2);
    setBmi(bmiValue);

    let bmiMessage = '';
    if (bmiValue < 18.5) {
      bmiMessage = 'Underweight';
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      bmiMessage = 'Normal weight';
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      bmiMessage = 'Overweight';
    } else {
      bmiMessage = 'Obesity';
    }
    setMessage(bmiMessage);
  };
  const resetFields = () => {
    setWeight('');
    setHeight('');
    setBmi(null);
    setMessage('');
  };

  return (
    <div className=" bg-amber-200 min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-amber-400 p-6 rounded-lg shadow-lg w-full max-w-xs">
        <h1 className="text-2xl font-bold mb-4 text-center">BMI Calculator</h1>
        <div className="mb-4">
          <label className="block text-black-700">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-black-700">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(e.target.value)}
            className="w-full px-3 py-2 border rounded"
          />
        </div>
        <button
          onClick={calculateBMI}
          className="w-full bg-blue-600 text-white  mb-4 py-2 rounded hover:bg-blue-800 transition duration-200"
        >
          Calculate
        </button>
        <button
            onClick={resetFields}
           className="w-full bg-blue-600 text-white  mb-4 py-2 rounded hover:bg-blue-800 transition duration-200"
          >
            Reset
          </button>
        {bmi && (
          <div className="mt-4 text-center">
            <p className="text-xl">Your BMI: {bmi}</p>
            <p className="text-xl">{message}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default BMI