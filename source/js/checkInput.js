import toast from "./toast.js";
export default function checkInput(element, name) {
    if (!element.value.length) {
        element.style.border = "1px solid red";
        toast({
            title: "Thất bại!",
            message: `Chưa nhập dữ liệu của ${name}`,
            type: "error",
            duration: 5000,
        });
    } else {
        element.style.border = "1px solid green";
    }
}
