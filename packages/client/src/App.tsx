import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css'


function App() {
  const [data, setData] = useState('');
  const [doc, setDoc] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/${data}`).then(res => res.data).then(d => {
      setDoc(d)
    }).catch(() => console.log('notfound'))
  }, [data])

  return (
    <>
      <h1>Vite + React</h1>
      <div className="card">
        <input type="text" value={data} onChange={(e) => {
          setData(e.target.value)
        }} />
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <iframe srcDoc={doc}></iframe>
    </>
  )
}

export default App;