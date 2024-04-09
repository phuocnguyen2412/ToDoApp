import editActivity from "./api/Activity/editActivity.js";
import getActivityById from "./api/Activity/getActivityById.js";

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
        } else editActivity(target.id, { ...task, type: "block" });
        target.style.border = "1px solid #ccc";
        target.style.backgroundColor = "#fff";
    }

    items.forEach(function (item) {
        // Loại bỏ trình nghe sự kiện dragstart cụ thể
        item.removeEventListener("dragstart", handleDragStart);

        // Thêm trình nghe sự kiện dragstart mới
        item.addEventListener("dragstart", handleDragStart);
    });

    lists.forEach(function (list) {
        // Loại bỏ trình nghe sự kiện dragover và drop cụ thể
        list.removeEventListener("dragover", handleDragOver);
        list.removeEventListener("drop", handleDrop);

        // Thêm trình nghe sự kiện dragover mới
        list.addEventListener("dragover", handleDragOver);

        // Thêm trình nghe sự kiện drop mới
        list.addEventListener("drop", handleDrop);
    });
}
