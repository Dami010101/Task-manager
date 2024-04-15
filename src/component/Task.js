import React from 'react'
import './Task.css';
import {MdOutlineDeleteForever,MdEditNote} from 'react-icons/md';

const Task = () => {
  return (
    <div className='task'>
    <p> 1. <b>Playin ball</b></p>
    <div className='task-icons'>
        
        <MdEditNote />
        <MdOutlineDeleteForever/>
    </div>
   
</div>
  )
}

export default Task