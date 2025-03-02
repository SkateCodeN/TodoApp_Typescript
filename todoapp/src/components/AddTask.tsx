import React, { useState } from "react";
import {uuidv7} from 'uuidv7';

interface Task{ 
    id: string,
    name: string,
    completed: boolean
}

interface PropType{
    addNewTask: (task:Task) => void
}

const AddTask: React.FC<PropType> = ({addNewTask}) =>{
    const [newTask, setNewTask] = useState<string>("");

    // Handle when the user clicks the add button
    const handleTaskAdd = () => {
        if (!newTask) return;

        const task = {
            id: uuidv7(),
            name: newTask,
            completed: false
        }

        addNewTask(task)
        
        setNewTask("")
    }

    //keeps track of the user input on the textbox
    const handleNewTaskInput = (e:React.ChangeEvent<HTMLInputElement>) => {
        setNewTask(e.target.value)
    }

    return(
        <div style={styles.addContainer}>
            <input
                type="text"
                onChange={handleNewTaskInput}
                placeholder="Add new Task"
                value={newTask}
            />

            <button
                onClick={handleTaskAdd}
                type="button"
                style={styles.addButton}
            >
                Add
            </button>
        </div>
    )
}

const styles = {
    addButton:{
        backgroundColor:"blue",

    },
    addContainer:{
        display:"flex",
        padding:"20px 0",
        justifyContent:"space-between"
    }
}


export default AddTask;