const $$ = document.querySelectorAll.bind(document);
const $ = document.querySelector.bind(document);
export default function closeModal() {
    $$(".modal").forEach((modal) => {
        modal.style.display = "none";
    });
}
