import React, {useState} from 'react';
import './CodeInputForm.css';

function CodeInputForm({ onSubmit}) {
  const [codeSnippet, setCodeSnippet] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(codeSnippet);
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="codeSnippet">Enter Code Snippet</label>
          <textarea
            id="codeSnippet"
            className="form-control input-textarea"
            rows="3"
            value={codeSnippet}
            onChange={(e) => setCodeSnippet(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary mt-2">
          Analyze & Improve
        </button>
      </form>
    </div>
  );
}

export default CodeInputForm;
