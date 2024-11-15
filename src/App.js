import React from 'react';
import CodeInputForm from './CodeInputForm/CodeInputForm';
import './App.css';

function App() {
  const handleFormSubmit = (codeSnippet) => {
    console.log('Submitted code:', codeSnippet);
    // AI agent call
  };

  return (
    <div>
      <h1 className="text-center mt-4">Intelligent Code</h1>
      <CodeInputForm onSubmit={handleFormSubmit} />
    </div>
  );
}

export default App;
