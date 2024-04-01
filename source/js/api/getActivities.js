export default async function getActivities() {
    try {
        const response = await fetch("http://localhost:3000/Activities");
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}
