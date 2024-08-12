import {getTasks } from './task';
import { addTask } from './task';

export const renderTask = () => {
    const tasklist = document.getElementById("task-list");
    tasklist.innerHTML = "";

    const task = getTasks();
    task.forEach((task) => {
        const li = document.createElement("li");
        li.setAttribute("data-id", task.id);
        
        //Añadir clase solo si la tarea està completada
        if(task.completed == true) {
            li.classList.add("completed");

        }
        li.innerHTML = `
            ${task.tex}
            <button class="delate"> Eliminar </button>
            <button class="toggle"> ${ task.completed == false ? "completar" : "Deshacer" } </button>
         `;

         tasklist.oppendChild(li);
    });

};