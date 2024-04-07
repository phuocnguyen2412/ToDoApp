import postActivity from "./api/Activity/postActivity.js";
import deleteActivity from "./api/Activity/deleteActivity.js";

export default function Task(category, title, description, type) {
    const id = localStorage.getItem("id") || "1";
    if (!id) {
        localStorage.setItem("id", "1");
    }
    const date = new Date();

    this.category = category;
    this.title = title;
    this.description = description;
    this.type = type;
    this.time = ` ${date.getHours()}:${date.getMinutes()} ${date.getDate()}/${
        date.getMonth() + 1
    }/${date.getFullYear()}`;

    localStorage.setItem("id", `${+this.id + 1}`);

    this.delete = function () {
        deleteActivity(this.id);
    }.bind(this);

    this.add = function () {
        postActivity(this);
    };
}
