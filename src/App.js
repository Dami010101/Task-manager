import './App.css';
import Task from './component/Task';
import TaskList from './component/TaskList';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const frontEndUrl = process.env.CONNECTOR

function App() {
  return (
    <div className="app">
      <ToastContainer />
      <div className='task-container'>
      <TaskList/>
      </div>
    </div>
  );
}

export default App;
