import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import TodoWrapper from './components/todoWrapper';
import LoginSignUp from './components/loginSignup/loginsgn';
import PostHttp from './components/httppostList'
import Navbar from './components/navbar/Navbar';
import Task from './components/pages/task'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<TodoWrapper/>}></Route>
        <Route path='task' element={<Task/>}></Route>
        <Route path='login' element={<LoginSignUp/>} />
      </Routes>
    {/* <TodoWrapper /> */}
    <LoginSignUp />
    <PostHttp />
    </BrowserRouter>
    </div>
  );
}

export default App;
