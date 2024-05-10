import React from 'react'
import './Task.css'

const Form = ({handleInputChange, name, createTask}) => {
  return (
    <form onSubmit={createTask} className='task-form'>
        <input onChange={handleInputChange}
        type='text'
        placeholder="Add a Task"
        name="name"
        value={name}

        />
        <button className='--btn --btn-primary' type='submit'>Submit</button>

    </form>
  )
}

export default Form