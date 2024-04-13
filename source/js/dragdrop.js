import getActivityById from "./api/Activity/getActivityById.js";
import editActivity from "./api/Activity/editActivity.js";

export default async function handleDragAndDrop() {
    const lists = document.querySelectorAll(".list");
    const items = document.querySelectorAll(".item");
    let target;
    let task;

    async function handleDragStart(e) {
        target = e.target;
        e.target.style.border = "1px solid #000";
        e.target.style.backgroundColor = "#ccc";
        task = await getActivityById(target.id);
    }

    function handleDragOver(e) {
        e.preventDefault();
    }

    function handleDrop(e) {
        e.preventDefault();
        this.appendChild(target);
        if (this.classList.contains("todo-list")) {
            editActivity(target.id, { ...task, type: "todo" });
        } else if (this.classList.contains("doing-list")) {
            editActivity(target.id, { ...task, type: "doing" });
        } else if (this.classList.contains("done-list")) {
            editActivity(target.id, { ...task, type: "done" });
        } else {
            editActivity(target.id, { ...task, type: "block" });
        }

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
