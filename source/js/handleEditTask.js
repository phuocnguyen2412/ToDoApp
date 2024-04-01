import getActivityById from "./api/getActivityById.js";
import editActivity from "./api/editActivity.js";
import Task from "./Task.js";
import checkInput from "./checkInput.js";

export default async function handleDeleteTask(id) {
    const task = await getActivityById(id);
    const EditTask = document.getElementById("EditTask");

    if (EditTask) {
        const modal = document.createElement("div");

        modal.innerHTML = `
            <div class="modal edit-task-modal" style="display: flex;">
                <div class="modal-overlay"></div>
                <div class="modal-content">
                    <span class="modal-close">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            stroke-width="2"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </span>
                    <div class="modal-main">
                        <div class="header">
                            <h3>Edit task</h3>
                        </div>
                        <div class="body">
                            <input
                                id="InputCategory"
                                class="inputCategory"
                                type="text"
                                placeholder="Nhập category"
                                value=${task.category}
                            />

                            <input
                                id="InputTitle"
                                class="inputTitle"
                                type="text"
                                placeholder="Nhập title"
                                value=${task.title}
                            />
                            <textarea
                                id="InputDescription"
                                class="inputContent"
                                type="text"
                                placeholder="Nhập content"

                            >${task.description}</textarea>
                            <div class="row" style="justify-content: space-around;">
                                <div class="form-group">
                                    <label for="TODO">TODO</label>
                                    <input type="radio" id="TODO" name="status" value="todo" ${
                                        task.type === "todo" ? "checked" : ""
                                    }>
                                </div>
                                <div class="form-group">
                                    <label for="DOING">DOING</label>
                                    <input type="radio" id="DOING" name="status" value="doing" ${
                                        task.type === "doing" ? "checked" : ""
                                    }>
                                </div>
                                <div class="form-group">
                                    <label for="DONE">DONE</label>
                                    <input type="radio" id="DONE" name="status" value="done" ${
                                        task.type === "done" ? "checked" : ""
                                    }>
                                </div>
                            </div>
                        </div>
                        <div class="footer">
                            <button id="ButtonAddTask">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        EditTask.appendChild(modal);

        const backdrop = modal.querySelector(".modal-overlay");
        const close = modal.querySelector(".modal-close");
        const button = modal.querySelector("#ButtonAddTask");

        backdrop.onclick = function (e) {
            EditTask.removeChild(modal);
        };
        close.onclick = function () {
            EditTask.removeChild(modal);
        };
        button.onclick = function () {
            let type = modal.querySelector(
                'input[name="status"]:checked'
            ).value;
            const category = EditTask.querySelector("#InputCategory");
            const title = EditTask.querySelector("#InputTitle");
            const description = EditTask.querySelector("#InputDescription");

            if (
                !category.value.length ||
                !title.value.length ||
                !description.value.length
            ) {
                checkInput(category, "category");
                checkInput(title, "title");
                checkInput(description, "description");
                return;
            }
            const editedTask = new Task(
                category.value,
                title.value,
                description.value,
                type
            );
            editActivity(id, editedTask);
        };
    }
}
