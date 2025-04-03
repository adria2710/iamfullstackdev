import { useState } from "react";

const InputCreate = ({ onTaskAdded }) => {
    const [task, setTask] = useState("");

    const handleAddTask = async (event) => {
        event.preventDefault();  // Prevenimos el comportamiento predeterminado (evita nuevas pestañas o recarga)

        if (!task.trim()) return; // Evita enviar tareas vacías

        console.log("Intentando agregar tarea:", task);

        const urlApi = "http://localhost:5000/create"; // Asegúrate de que esta URL es la correcta
        const payload = { title: task };

        try {
            const response = await fetch(urlApi, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (response.ok) {
                console.log("Tarea agregada correctamente ✅");
                setTask(""); // Limpia el input después de agregar la tarea
                onTaskAdded(); // Llama a onTaskAdded() para refrescar la lista de tareas
            } else {
                console.error("Error al agregar la tarea ❌");
            }
        } catch (error) {
            console.error("Error en la solicitud:", error);
        }
    };

    return (
        <div>
            <input
                type="text"
                value={task}
                onChange={(e) => setTask(e.target.value)}
                placeholder="Nueva tarea"
            />
            <button onClick={handleAddTask}>Agregar</button>
        </div>
    );
};

export default InputCreate;
