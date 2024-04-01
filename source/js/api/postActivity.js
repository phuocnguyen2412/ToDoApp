import toast from "../toast.js";

export default async function postActivity(Activity) {
    try {
        const response = await fetch("http://localhost:3000/Activities", {
            method: "POST",
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
