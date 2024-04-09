export default async function getActivities() {
    try {
        const response = await fetch(
            "https://66142e9f2fc47b4cf27bd108.mockapi.io/api/Activities"
        );

        if (!response.ok) throw "lỗi";
        const data = await response.json();

        return data;
    } catch (error) {
        console.log(error);
    }
}
