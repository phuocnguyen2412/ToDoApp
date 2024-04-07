export default async function getActivities(id) {
    try {
        const response = await fetch(
            "https://my-json-server.typicode.com/phuocnguyen2412/ToDoApp/Activities/" +
                id
        );
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}