import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

function App() {
  const [listOfPost, setListOfPost] = useState([]);

  useEffect(() => {
    // Fetch data from the server
    axios.get("http://localhost:3001/post")
      .then((response) => {
        // Update the state with the retrieved data
        setListOfPost(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array to run the effect only once on mount

  return (
    <>
      <div className='App'>
        {listOfPost.map((value, key) => (
          <div key={key}>
            <div className="post card">
            <div className="title">{value.title}</div>
            <div className="body">{value.postText}</div>
            <div className="footer">{value.userName}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
