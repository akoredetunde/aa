export function getUserData() {
    const option ={
        method: "GET",
        header: {
            origin: "auth"
        }
    }

    fetch("http://localhost:3000/projects/amos", option)
    .then((response) => {
        response.json()
    })
    .then((data) => {
        return data;
    });
};
