document.getElementById('getApi').addEventListener('click', function () {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => {
            document.getElementById('output').innerHTML = `<p>ID: ${data.id}</p><p>Title: ${data.title}</p><p>Completed: ${data.completed}</p>`;
        })
        .catch(error => {
            console.error('Error:', error);
            document.getElementById('output').innerHTML = 'Error fetching data. Please try again.';
        });
});