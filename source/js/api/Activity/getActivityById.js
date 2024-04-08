export default async function getActivities(id) {
    try {
        const response = await fetch(
            "/https://api.mockfly.dev/mocks/ToDoApp/Activities/" + id
        );
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}
