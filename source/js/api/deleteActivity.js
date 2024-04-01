import toast from "../toast.js";
import showTask from "../ShowTask.js";
export default async function deleteActivity(id) {
    try {
        const response = await fetch("http://localhost:3000/Activities/" + id, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json",
            },
        });
        const data = await response.json();

        toast({
            title: "Xóa thành công!",
            message: `Xóa thành công `,
            type: "success",
            duration: 5000,
        });
        showTask();
    } catch (e) {
        toast({
            title: "Thất bại!",
            message: `Xóa thất bại`,
            type: "error",
            duration: 5000,
        });
        console.log(e);
    }
}
