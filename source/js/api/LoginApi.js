import toast from "../toast.js";
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
        console.log(data);
        if (data.status == "error") throw "Failed to login";

        if (document.querySelector("#remember").checked) {
            localStorage.setItem("account", JSON.stringify(account));
        }
        localStorage.setItem("isLoggedIn", "true");
        window.location.href = "./index.html";
    } catch (error) {
        console.log(error);
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
