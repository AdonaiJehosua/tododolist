import { Observer } from 'mobx-react-lite';
import './App.scss';
import { TodododoSetter } from './components/TodododoSetter';
import { ToDododosList } from './components/ToDododosList';



function App() {


  return (
    <Observer>
      {() => {
        return (
          <div className="App">
            <div className="App_header">ToDoDoList!</div>
            <TodododoSetter />
            <ToDododosList />
          </div>
        )
      }}
    </Observer>
  );
}

export default App;