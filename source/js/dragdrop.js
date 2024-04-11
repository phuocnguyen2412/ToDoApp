import getActivityById from "./api/Activity/getActivityById.js";
import editActivity from "./api/Activity/editActivity.js";

export default async function handleDragAndDrop() {
    const lists = document.querySelectorAll(".list");
    const items = document.querySelectorAll(".item");
    let target;
    let task;
    // Định nghĩa hàm xử lý sự kiện dragstart
    async function handleDragStart(e) {
        target = e.target;
        e.target.style.border = "1px solid #000";
        e.target.style.backgroundColor = "#ccc";
        task = await getActivityById(target.id);
    }

    // Định nghĩa hàm xử lý sự kiện dragover
    function handleDragOver(e) {
        e.preventDefault();
    }

    // Định nghĩa hàm xử lý sự kiện drop
    function handleDrop(e) {
        e.preventDefault();
        this.appendChild(target);
        if (this.classList.contains("todo-list")) {
            editActivity(target.id, { ...task, type: "todo" });
        } else if (this.classList.contains("doing-list")) {
            editActivity(target.id, { ...task, type: "doing" });
        } else if (this.classList.contains("done-list")) {
            editActivity(target.id, { ...task, type: "done" });
            const audio = new Audio("./source/audio/audio.mp3");
            audio.play();
            setTimeout(() => audio.pause(), 8000);
        } else editActivity(target.id, { ...task, type: "block" });
        target.style.border = "1px solid #ccc";
        target.style.backgroundColor = "#fff";
        allElements.forEach((element) => {
            element.removeEventListener("dragstart", handleDragStart);
            element.removeEventListener("dragover", handleDragOver);
            element.removeEventListener("drop", handleDrop);
        });
    }
    const allElements = document.querySelectorAll("*");

    items.forEach(function (item) {
        item.removeEventListener("dragstart", handleDragStart);
        item.addEventListener("dragstart", handleDragStart);
    });

    lists.forEach(function (list) {
        list.removeEventListener("dragover", handleDragOver);
        list.removeEventListener("drop", handleDrop);
        list.addEventListener("dragover", handleDragOver);
        list.addEventListener("drop", handleDrop);
    });
}
