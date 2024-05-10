import React from 'react'
import './Task.css';
import {MdOutlineDeleteForever,MdEditNote} from 'react-icons/md';

const Task = ({task, index, deleteTask, getSingleTask}) => {
  return (
    <div className='task'>
    <p> {index+1} <b>{task.name}</b></p>
    <div className='task-icons'>
        
        <MdEditNote onClick={()=>getSingleTask(task)}/>
        <MdOutlineDeleteForever onClick={()=>deleteTask(task._id)}/>
    </div>
   
</div>
  )
}

export default Task