import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState(Array(5).fill("")); 
  const [result, setResult] = useState(null);

  const handleInputChange = (index, value) => {
    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);
  };

  const calculateSum = () => {
    const sum = values.reduce((total, value) => total + Number(value || 0), 0);
    if (sum <= 60) {
      setResult("FICA EM CASA LISO");
    } else {
      setResult("UP UP TAIGA");
    }
  };

  return (
    <div className="container">
      <h1>CALCULADORA DE LULACOINS PRA TAIGA DE CRIA</h1>
      <p>IINSIRA OS LULACOINS QUE TODES TEM:</p>
      <div className="input-container">
        {values.map((value, index) => (
          <input
            key={index}
            type="number"
            value={value}
            onChange={(e) => handleInputChange(index, e.target.value)}
            placeholder={`Valor ${index + 1}`}
            className="input"
          />
        ))}
      </div>
      <button onClick={calculateSum} className="button">
        Calcular Soma
      </button>
      {result && (
        <div className="result">
          <h2>Resultado: {result}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
