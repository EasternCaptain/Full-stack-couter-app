import { useSelector, useDispatch } from 'react-redux'; 
import { useEffect } from 'react'; 

export default function App() {
  const count = useSelector((state) => state.count); 
  const dispatch = useDispatch();  

 useEffect(() => {
  async function fetchData() {
    try {
      const response = await fetch('http://localhost:5000/api/count', {
        headers: { Accept: 'application/json' },
      });

      if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`);
      }

      const data = await response.json(); // { value: 5 }
      dispatch({ type: 'LOAD', payload: data.value });
    } catch (err) {
      console.error('Failed to load count:', err);
    }
  }

  fetchData();
}, [dispatch]);

  const handleIncrement = async () => { 
    try {
      const response = await fetch("http://localhost:5000/api/increment", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
      }) 
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`); 
      } 
      dispatch({type: "INCREMENT", payload: 1 }) 
    } catch(error) {
      console.error(error); 
    }
  }

  const handleDecrement = async () => {
    
    try {
      const response = await fetch("http://localhost:5000/api/decrement", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
      }) 
      if (!response.ok) {
        throw new Error(`Request failed: ${response.status} ${response.statusText}`); 
      } 
      dispatch({type: "DECREMENT", payload: 1 }) 
    } catch(error) {
      console.error(error); 
    }
  }; 

  return (
    <div>
      <h1>Counter</h1>
      <h2>{count}</h2> 
      <input type="button" value="-" onClick={handleDecrement} />
      <input type="button" value="+" onClick={handleIncrement} />
    </div>
  )
}