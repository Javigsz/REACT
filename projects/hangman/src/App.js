import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Router1 from './routers/Router1';
import Provider from './context/Provider';

function App() {
  return (
    <>
    <Provider>
    <BrowserRouter>
        <Router1></Router1>
    </BrowserRouter>
    </Provider>
    </>
  );
}

export default App;
