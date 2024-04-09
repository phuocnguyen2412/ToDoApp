import toast from "../../toast.js";
function handleLoginSuccess(account) {
    if (document.querySelector("#remember").checked) {
        localStorage.setItem("account", JSON.stringify(account));
    }
    localStorage.setItem("isLoggedIn", "true");
    window.location.href = "./main.html";
}
export default async function LoginApi(account, url) {
    const button = document.querySelector("#ButtonLogin");
    button.innerHTML = `<div class="line-loading"></div>`;
    const loading = $(".line-loading");
    loading.classList.add("loading");
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(account),
        });

        const data = await response.json();
        if (data.status === "error") throw "lỗi";
        handleLoginSuccess(account);
    } catch (error) {
        console.log(error);

        const response = await fetch(
            "https://66142e9f2fc47b4cf27bd108.mockapi.io/api/Account"
        );
        const accounts = await response.json();
        if (
            accounts.some(
                (a) =>
                    a.login == account.login && a.password === account.password
            )
        )
            handleLoginSuccess(account);
        else
            toast({
                title: "Thất bại",
                message: "Sai tài khoản hoặc mật khẩu! T_T",
                type: "error",
            });
    } finally {
        button.removeChild(loading);
        button.innerHTML = "Login";
    }
}
