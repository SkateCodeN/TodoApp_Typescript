import React, { useState } from 'react';
import Tasks from './Task';
import FilterBar from "./FilterBar";
import AddTask from "./AddTask";

//Notice that the interface for task had to be implemented
// for so that the task state can work and the updateOnDelete
//task as well

interface Task {
    id: string,
    name: string,
    completed: boolean
}

// We have to set TodoList to be of type React.FC
const TodoList: React.FC = () => {

    const [tasks, setTasks] = useState<Task[]>([]);
    const [currentFilter, setCurrentFilter] = useState<string>('all');

    //When the delete button is clicked in the Task comp;onent
    // we pass our task id and then delete that using filter 
    //method. We then update state
    const updateOnTaskDelete = (id: string) => {
        console.log("Delete activated for id: ", id );
        setTasks(tasks.filter(task => task.id != id));
    }

    // Same for this function, in the task component
    // when the complete button is pressed this fires
    // we update state with the task id and set its 
    // completed key to true
    const updateOnTaskComplete = (id: string) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: true } : task
        ));
    }

    // The Add task component deals with adding a new task
    // we pass this function down and handle that click
    // to add that new task to state
    const updateAndAddNewTask = (task: Task) => {
        setTasks((tasks) => [...tasks, task]);
    }

    // We pass this to the filter component, this 
    // manages the state change depending on the click
    const handleFilterChange = (newFilter: string) => {
        setCurrentFilter(newFilter);
    }

    // Because we update state this function will 
    // run and upate our tasks according to the filter
    const filteredTasks = tasks.filter((task: Task) => {
        if (currentFilter === "all") return true;
        if (currentFilter === "active") return !task.completed;
        if (currentFilter === "completed") return task.completed;
        return true;
    });

    if (!tasks) return <p>Loading Tasks...</p>

    return (
        <>
            <h2>Task Manager</h2>
            <div>
                <FilterBar
                    currentFilter={currentFilter}
                    onFilterChange={handleFilterChange}
                />
            </div>
            <ul>
                {
                    filteredTasks.map((taskObj) => (
                        <li key={taskObj.id}>
                            <Tasks
                                task={taskObj}
                                handleDelete={updateOnTaskDelete}
                                handleComplete={updateOnTaskComplete} />
                        </li>
                    ))
                }
            </ul>

            <AddTask addNewTask={updateAndAddNewTask} />
        </>
    )
}

export default TodoList;
