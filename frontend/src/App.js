import { useSelector, useDispatch } from 'react-redux'; 



export default function App() {
  const count = useSelector((state) => state.count); 
  const dispatch = useDispatch();  

  const handleIncrement =() => {
    dispatch({type: "INCREMENT", payload: 1 }) 
  }; 

  const handleDecrement = () => {
    dispatch({type: "DECREMENT", payload: 1 })
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