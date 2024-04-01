export default async function getActivities(id) {
    try {
        const response = await fetch("http://localhost:3000/Activities/" + id);
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}
