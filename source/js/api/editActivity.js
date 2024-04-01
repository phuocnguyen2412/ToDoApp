import showTask from "../ShowTask.js";
import toast from "../toast.js";

export default async function editActivity(id, Activity) {
    try {
        const response = await fetch(`http://localhost:3000/Activities/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(Activity),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        toast({
            title: "Sửa thành công!",
            message: `Sửa thành công ${Activity.title}`,
            type: "success",
            duration: 5000,
        });

        showTask();
    } catch (error) {
        console.error("There was an error!", error);
        toast({
            title: "Thất bại!",
            message: `Sửa thất bại ${Activity.title}`,
            type: "error",
            duration: 5000,
        });
    }
}
