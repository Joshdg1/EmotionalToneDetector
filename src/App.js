import React, { useState } from 'react';
import { analyzeTone } from './services/api';
import AnalysisResult from './components/AnalysisResult';
import Swal from 'sweetalert2'
import './styles/App.css';

function App() {
  const [text, setText] = useState('');
  const [result, setResult] = useState(null);
  const [error] = useState(null);

  const handleSubmit = async () => {
    try {
      const analysisResult = await analyzeTone(text);
      setResult(analysisResult[0]);
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text: "Failed to analyze text.",
        icon: "error",
        timer: 2000,
        showCloseButton: true,
        confirmButtonText: 'Okay',
    });
    }
  };

  return (
    <div className="app-container">
      <h1>Emotional Tone Detector</h1>
      <textarea
        className="textarea"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter your text here..."
        rows="5"
      />
      <br />
      <button onClick={handleSubmit}>Check</button>
      {error && <p className="error-message">{error}</p>}
      {result && <AnalysisResult result={result} />}
    </div>
  );
}

export default App;
