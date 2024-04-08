export default async function getActivities() {
    try {
        const response = await fetch(
            "https://api.mockfly.dev/mocks/38855d34-6fa0-4bd4-b1af-7f9446364f4a/ToDoApp/Activities"
        );

        if (!response.ok) throw "lỗi";
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}
