async function getApiData() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error('Error:', error);
    }
}

async function displayApiData() {
    const data = await getApiData();
    if (data) {
        document.getElementById('output').innerHTML = `<p>ID: ${data.id}</p><p>Title: ${data.title}</p><p>Completed: ${data.completed}</p>`;
    }
}

document.getElementById('getApi').addEventListener('click', displayApiData);