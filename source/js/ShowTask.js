import getActivities from "./api/Activity/getActivities.js";
import deleteActivity from "./api/Activity/deleteActivity.js";
import handleEditTask from "./handleEditTask.js";
import handleDragAndDrop from "./dragdrop.js";

const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
function createHtml(parent, arr) {
    parent.innerHTML = arr
        .map(
            (item) => `
            <div id=${item.id} class="todo-item item" draggable="true">
                <span class="category">${item.category}</span>
                <h4 class="title">${item.title}</h4>
                <div class="line-item"></div>
                <p class="content">
                    ${item.description}
                </p>
                <span class="time"
                    ><i class="fa-regular fa-clock"></i
                    >${item.time}</span
                >
                <div class="icon">
                    <i
                        class="fa-regular fa-pen-to-square" value=${item.id}
                    ></i>
                    <i class="fa-solid fa-trash" value=${item.id}  "></i>
                </div>
            </div>
        `
        )
        .join("\n");
}
export default async function showTask() {
    const activities = (await getActivities()) || [];

    const todo = activities.filter((activity) => activity.type === "todo");
    const doing = activities.filter((activity) => activity.type === "doing");
    const done = activities.filter((activity) => activity.type === "done");
    const block = activities.filter((activity) => activity.type === "block");

    $("#todo-number").innerText = todo.length;
    $("#doing-number").innerText = doing.length;
    $("#done-number").innerText = done.length;
    $("#block-number").innerText = block.length;

    createHtml($(".todo-list"), todo);
    createHtml($(".doing-list"), doing);
    createHtml($(".done-list"), done);
    createHtml($(".block-list"), block);

    $$(".fa-trash").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            deleteActivity(item.getAttribute("value"));
        });
    });
    $$(".fa-regular").forEach((item) => {
        item.addEventListener("click", (e) => {
            e.preventDefault();
            handleEditTask(item.getAttribute("value"));
        });
    });
    handleDragAndDrop();
}
