import './App.css';
import Task from './component/Task';
import TaskList from './component/TaskList';

function App() {
  return (
    <div className="app">
      
      <div className='task-container'>
      <TaskList/>
      </div>
    </div>
  );
}

export default App;
