import React, { useEffect, useState } from 'react'
import Form from './Form'
import Task from './Task'
import axios from 'axios'
import { toast } from 'react-toastify'





const TaskList = () => {
    const [formData, setFormData] = useState({name: ''})
    const [task, setTasks] = useState([])
    const [taskId, setTaskId] = useState('')
    const {name} = formData
    const handleInputChange = (e) => {
        const {name, value} = e.target
        setFormData({...Form, [name]: value})
    }

    //create task
    const createTask = async(e)=>{
      e.preventDefault()
      try {
        // await axios.post('http://localhost:8001/create_user', formData) 
        await axios.post('https://task-manager-o5d5.onrender.com/', formData) 
        console.log(formData)
        toast.success('Task Added')
        getAllTask()
        setFormData({name: ''})      
      } catch (error) {
        console.log(error)
      }
    }

    //to get all tasks
    const getAllTask = async()=>{
      try {
        // const {data} = await axios.get('http://localhost:8001/create_user') 
        const {data} = await axios.get('https://task-manager-o5d5.onrender.com/') 
        console.log(data)
        setTasks(data)
      } catch (error) {
        console.log(error)
      }
    }
    useEffect(() => {
      getAllTask()
    }, [])  


    //delete task
    const deleteTask = async(id)=>{
      try {
        // await axios.delete(`http://localhost:8001/create_user/${id}`) 
        await axios.delete(`https://task-manager-o5d5.onrender.com/${id}`) 
        const deleteFilter = task.filter((task)=>task._id !== id)
        setTasks(deleteFilter)
        toast.success('Task Deleted')
      } catch (error) {
        console.log(error)
        toast.error('Task Not Deleted')
      }
    }
    useEffect(() => {
      getAllTask()
    }, []) 
    
    
    //getting a single task
    const getSingleTask = async(task)=>{
      setFormData({name: task.name})
      setTaskId(task._id)
    }
    
    //update task
    const updateTask = async()=>{
      try {
        // await axios.put(`http://localhost:8001/create_user/${taskId}`, formData) 
        await axios.put(`https://task-manager-o5d5.onrender.com/${taskId}`, formData) 
        setFormData({...formData, name: ''})
        toast.success('Task Updated')
        getAllTask()
      } catch (error) {
        console.log(error)
        toast.error('Task Not Updated')
      }
    }

    
  return (
    <div>
       <h1 className='--center-all --text-purple'>MANAGER</h1> 
       <div className="--flex-between --pb">
          <h3>
            <b>Total Tasks:</b> {task.length}
          </h3>
          <h3>
            <b>Completed Tasks:</b> 0
          </h3>
        </div>
       {/* {
          task.map((data, index)=>(
            <Task
            key={data._id}
            task= {data}
            index = {index}
            deleteTask = {deleteTask}
            updateTask = {updateTask}
            getSingleTask = {getSingleTask}
            />

          ))
       } */}

            {Array.isArray(task) && task.map((data, index) => (
              <Task
                key={data._id}
                task={data}
                index={index}
                deleteTask={deleteTask}
                updateTask={updateTask}
                getSingleTask={getSingleTask}
              />
            ))}
      
       <Form 
       handleInputChange = {handleInputChange}
       name = {name}
       createTask = {createTask}
       />
       
    </div>  )
}

export default TaskList