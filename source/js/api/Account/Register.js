import toast from "../../toast.js";
export default async function register(account) {
    try {
        const response = await fetch(
            "https://66142e9f2fc47b4cf27bd108.mockapi.io/api/Account",
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(account),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        toast({
            title: "Đăng kí thành công!",
            message: `Thêm thành công ${account.email}`,
            type: "success",
            duration: 5000,
        });
    } catch (error) {
        toast({
            title: "Thất bại!",
            message: `Thêm thất bại ${account.email}`,
            type: "error",
            duration: 5000,
        });
        console.error("There was an error!", error);
    }
}
