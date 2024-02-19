import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import { Route, Routes } from 'react-router-dom';
import NewForm from './components/NewForm';
import Welcome from './components/Welcome';


function App() {
  return (
    <div className="App">

    <Routes>

    <Route path='/' element={<Form/>}/>
    <Route path='/new' element={<NewForm/>}/>
    <Route path='/welcome' element={<Welcome/>}/>


    </Routes>

    </div>
  );
}

export default App;
