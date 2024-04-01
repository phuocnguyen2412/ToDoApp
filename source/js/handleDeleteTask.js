import { Activities } from "./index.js";
import toast from "./toast.js";
export default function deleteTask(id) {
    const taskToDelete = Activities.find((item) => item.id === id);
    if (taskToDelete) {
        taskToDelete.delete();
    } else {
        console.error(`Task with id ${id} not found.`);
    }
}
