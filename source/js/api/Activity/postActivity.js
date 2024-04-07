import toast from "../../toast.js";
import showTask from "../../ShowTask.js";
export default async function postActivity(Activity) {
    console.log(Activity);
    try {
        const response = await fetch(
            "https://my-json-server.typicode.com/phuocnguyen2412/ToDoApp/Activities",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Activity),
            }
        );
        console.log(response);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        toast({
            title: "Thêm thành công!",
            message: `Thêm thành công ${Activity.title}`,
            type: "success",
            duration: 5000,
        });

        showTask();
    } catch (error) {
        toast({
            title: "Thất bại!",
            message: `Thêm thất bại ${Activity.title}`,
            type: "error",
            duration: 5000,
        });
        console.error("There was an error!", error);
    }
}
