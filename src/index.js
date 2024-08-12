import { addTask } from "./task";
import { renderTask } from "./ui";

document.addEventListener("DOMContentLoaded", () =>{
 // Hacemos visible la lista de tareas
 renderTask();

 //Agregar el evento para la función para agregar tareas
 document.getElementById("task-form").addEventListener("submit", (e) => {
     e.preventDefault();
     const taskInput = document.getElementById("task-input");
     if(taskInput.value !== "") {
      //Agregamos la tarea
        addTask(taskInput.value);

        //Volvemos a cargar la lista de tareas
        renderTask();

        //Limpiar el input
        document.getElementById("taskinput").value =  "";
     }
 });

});