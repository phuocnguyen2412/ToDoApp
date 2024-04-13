import showTask from "../../ShowTask.js";
import toast from "../../toast.js";
const audioElements = [];
function playMusic(Activity) {
    let audio;
    audioElements.forEach(function (audio) {
        audio.pause();
        audio.currentTime = 0; // Đặt thời gian của âm thanh về đầu
    });
    if (Activity.type === "todo") {
        audio = new Audio("./source/audio/MeoBun.mp3");
        audio.play();
        audioElements.push(audio);
        return;
    }
    if (Activity.type === "doing") {
        audio = new Audio("./source/audio/doing.mp3");
        audio.play();
        audioElements.push(audio);
        return;
    }
    if (Activity.type === "done") {
        audio = new Audio("./source/audio/audio.mp3");
        audio.play();
        audioElements.push(audio);
        setTimeout(() => audio.pause(), 28000);
        return;
    }
    if (Activity.type === "block") {
        audio = new Audio("./source/audio/block.mp3");
        audio.play();
        audioElements.push(audio);
        return;
    }
}
export default async function editActivity(id, Activity) {
    try {
        const response = await fetch(
            `https://66142e9f2fc47b4cf27bd108.mockapi.io/api/Activities/${id}`,
            {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(Activity),
            }
        );

        if (!response.ok) {
            throw new Error("Network response was not ok");
        }

        const data = await response.json();

        toast({
            title: "Sửa thành công!",
            message: `Sửa thành công ${Activity.title}`,
            type: "success",
            duration: 5000,
        });
        showTask();
        playMusic(Activity);
    } catch (error) {
        console.error("There was an error!", error);
        toast({
            title: "Thất bại!",
            message: `Sửa thất bại ${Activity.title}`,
            type: "error",
            duration: 5000,
        });
    }
}
