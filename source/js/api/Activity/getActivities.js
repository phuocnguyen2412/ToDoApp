export default async function getActivities() {
    try {
        const response = await fetch(
            "https://my-json-server.typicode.com/phuocnguyen2412/ToDoApp/Activities"
        );
        
        if (!response.ok) throw "lỗi";
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}
