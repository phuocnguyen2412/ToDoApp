import toast from "../../toast.js";
export default async function register(account) {
    try {
        const response = await fetch("http://localhost:3000/Account", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        });

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        toast({
            title: "Đăng kí thành công!",
            message: `Thêm thành công ${account.gmail}`,
            type: "success",
            duration: 5000,
        });
    } catch (error) {
        toast({
            title: "Thất bại!",
            message: `Thêm thất bại ${account.title}`,
            type: "error",
            duration: 5000,
        });
        console.error("There was an error!", error);
    }
}
