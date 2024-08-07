import React, { useState, useEffect } from 'react'

function App() {
  const [data, setData] = useState([])

  

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}posts/`);
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
      
    }
    fetchData();
  }, [])

  return (
    <>
    {data.map((post, index) => (
      <div className='div-block' key={index}>
        <h3>{post.title}</h3>
        <p>{post.body}</p>
      </div>
    ))}
      
    </>
  )
}

export default App
