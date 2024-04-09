import postActivity from "./api/Activity/postActivity.js";
import Task from "./Task.js";
import checkInput from "./checkInput.js";

export default function handleAddNewTask() {
    const NewTask = document.querySelector("#NewTask");
    function removeModal() {
        NewTask.removeChild(NewTask.querySelector(".modal"));
    }

    NewTask.innerHTML = `
        <div class="modal">
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
                        <h3>Add new todo</h3>
                    </div>
                    <div class="body">
                        <input
                            id="InputCategory"
                            class="inputCategory"
                            type="text"
                            placeholder="Nhập category"
                        />

                        <input
                            id="InputTitle"
                            class="inputTitle"
                            type="text"
                            placeholder="Nhập title"
                        />
                        <textarea
                            id="InputDescription"
                            class="inputContent"
                            type="text"
                            placeholder="Nhập content"
                        ></textarea>
                    </div>
                    <div class="footer">
                        <button id="ButtonAddTask">SUBMIT</button>
                    </div>
                </div>
            </div>
        </div>
    `;

    NewTask.querySelector(".modal-overlay").onclick = function () {
        removeModal();
    };
    NewTask.querySelector(".modal-close").onclick = function () {
        removeModal();
    };

    NewTask.querySelector("#ButtonAddTask").addEventListener(
        "click",
        function (e) {
            e.preventDefault();
            const category = document.getElementById("InputCategory");
            const title = document.getElementById("InputTitle");
            const description = document.getElementById("InputDescription");

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
            const task = new Task(
                category.value,
                title.value,
                description.value,
                "todo"
            );
            removeModal();
            console.log(1);
            postActivity(task);
        }
    );
}
