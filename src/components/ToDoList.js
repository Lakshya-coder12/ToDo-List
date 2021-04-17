import React, {useState} from 'react';
import CreateTask from '../modals/CreateTask';

const ToDoList = () => {
    const [modal, setModal] = useState(false);
    const [tasklist, setTaskList] = useState([]);

    const toggle = () => {
        setModal(!modal);
    }

    const saveTask = (taskObj) => {
       let tempList = tasklist;
       tempList.push(taskObj);
       setTaskList(tempList);
       setModal(false);
    }

    return (
        <>
            <div className = "header text-center">
                <h1>Todo List</h1>
                <button className = "btn btn-primary mt-2" onClick = {() => setModal(true)}>Create Task</button>
            </div>
            <div className = "task-container">

            </div>
            <CreateTask toggle = {toggle} modal ={modal} save = {saveTask}/>
        </>
    );
};

export default ToDoList;