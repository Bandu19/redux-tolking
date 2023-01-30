import {useDispatch, useSelector} from 'react-redux'
import { increment,decrement, incrementBy } from './store/counter';
import './App.css';

function App() {

  // LLamando nuestra Store
  const {counter} = useSelector((state)=> state.counteres)
  const dispatch = useDispatch()


  return (
    <div className="App">
      <header className="App-header">
        <img src="" className="App-logo" alt="logo" />
        <p>
            count is: {counter}
        </p>
          <button type="button" onClick={()=>dispatch(increment())}>
              Increment
          </button>
          <br />

          <button type="button" onClick={()=>dispatch(decrement(counter))}>
              Decrement
          </button>
          <br />

          <button type="button" onClick={()=>dispatch(incrementBy(2))}>
              Increment by 2
          </button>

      </header>
    </div>
  );
}

export default App;
