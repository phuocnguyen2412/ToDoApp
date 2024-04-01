import closeModal from "./CloseModal.js";
import handleOpenNewTask from "./handleOpenNewTask.js";
import toast from "./toast.js";
import Task from "./Task.js";
import showTask from "./ShowTask.js";
import getActivities from "./api/getActivities.js";
import postActivity from "./api/postActivity.js";
const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
const Account = JSON.parse(localStorage.getItem("account"));

showTask();
if (Account)
    setTimeout(() => {
        toast({
            title: "Đăng nhập thành công!",
            message: `Chào mừng ${Account.login}`,
            type: "success",
            duration: 5000,
        });
    }, 1000);
else {
    setTimeout(
        () => {
            toast({
                title: "Đăng nhập thành công!",
                message: `Chúc bạn một ngày mới tốt lành <3`,
                type: "success",
                duration: 5000,
            });
        },

        1000
    );
}

$("#ButtonAddTask").addEventListener("click", function (e) {
    e.preventDefault();
    const task = new Task(
        document.getElementById("InputCategory").value,
        document.getElementById("InputTitle").value,
        document.getElementById("InputDescription").value,
        "todo"
    );
    postActivity(task);
});

$("#ButtonNewTask").addEventListener("click", handleOpenNewTask);

$("#ButtonLogout").addEventListener("click", function (e) {
    localStorage.removeItem("account");
    window.location.href = "./Login.html";
});

$$(".modal-close").forEach(function (item) {
    item.addEventListener("click", closeModal);
});

$$(".modal-overlay").forEach((item) => {
    item.addEventListener("click", closeModal);
});
