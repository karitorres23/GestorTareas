//Lista de tareas

let task = JSON.parse(localStorage.getItem('tasks'))|| [];

//  Función para agregar tareas
export const addTask = (task) => {
    const newTask = {
        id: Date.now(),
        text: task,
        completed: false,
    };
    task.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(task));
};

//Función para poder traer la lista de tareas
export const getTasks = () => task;