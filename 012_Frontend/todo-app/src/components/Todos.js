import React, {useState} from 'react';
import Todo from '../components/Todo';

function Todos (){

    const [task, setTask] = useState([
        {
            text: 'Tarea 1',
            isCompleted: false,
        },
        {
            text: 'Tarea 2',
            isCompleted: false,
        },
        {
            text: 'Tarea 3',
            isCompleted: true,
        },
    ])

const setCompleted = () => {
    console.log("Hola desde el Padre");
    //this.setTask(
    //    {isCompleted: true}
    //)
}

return(
     <>
        <h1>To Do App</h1>
        <h2>Crear To Do</h2>
        {/* Componente para insertar Tareas */}
        <h3>Lista To Do</h3>
        {
            task.map( (todo,index) => {
                return <Todo 
                    key={index}
                    index={index}
                    text={todo.text} 
                    isCompleted={todo.isCompleted}
                    setCompleted={setCompleted}
                />
            })
        }
     </>
 )   
}

export default Todos;