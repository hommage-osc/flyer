import React from 'react';

function App() {
  const report = `


nothing

  `;

  return (
    <div style={{ padding: '2rem', maxWidth: '800px', margin: 'auto', fontFamily: 'sans-serif', lineHeight: '1.8' }}>
      <h1>📋 今日の日報</h1>
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: '1.1rem' }}>{report}</pre>
    </div>
  );
}

export default App;
