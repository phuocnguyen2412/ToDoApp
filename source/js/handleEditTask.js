import getActivityById from "./api/Activity/getActivityById.js";
import editActivity from "./api/Activity/editActivity.js";
import Task from "./Task.js";
import checkInput from "./checkInput.js";
import showTask from "./ShowTask.js";
export default async function handleEditTask(id) {
    const EditTask = document.getElementById("EditTask");
    const task = await getActivityById(id);
    if (EditTask) {
        EditTask.innerHTML = `
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
                                    <div class="row"> 
                                        <label for="TODO">TODO</label>
                                        <input type="radio" id="TODO" name="status" value="todo" ${
                                            task.type === "todo"
                                                ? "checked"
                                                : ""
                                        }>
                                    </div>
                                </div>
                                <div class="form-group">
                                <div class="row"> 
                                    <label for="DOING">DOING</label>
                                    <input type="radio" id="DOING" name="status" value="doing" ${
                                        task.type === "doing" ? "checked" : ""
                                    }>
                                    </div>
                                </div>
                                <div class="form-group">
                                <div class="row"> 
                                    <label for="DONE">DONE</label>
                                    <input type="radio" id="DONE" name="status" value="done" ${
                                        task.type === "done" ? "checked" : ""
                                    }>
                                    </div>
                                </div>
                                <div class="form-group">
                                <div class="row"> 
                                    <label for="BLOCK">BLOCK</label>
                                    <input type="radio" id="BLOCK" name="status" value="block" ${
                                        task.type === "block" ? "checked" : ""
                                    }>
                                    </div>
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

        const backdrop = EditTask.querySelector(".modal-overlay");
        const close = EditTask.querySelector(".modal-close");
        const button = EditTask.querySelector("#ButtonAddTask");
        function removeModal() {
            EditTask.removeChild(EditTask.querySelector(".modal"));
        }
        backdrop.onclick = function (e) {
            removeModal();
        };
        close.onclick = function () {
            removeModal();
        };
        button.onclick = async function () {
            let type = EditTask.querySelector(
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
            removeModal();
            await editActivity(id, editedTask);

            showTask();
        };
    }
}
