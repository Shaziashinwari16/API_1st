document.addEventListener('DOMContentLoaded', () => {
    const fetchDataButton = document.getElementById('fetchData');
    const responseDiv = document.getElementById('response');
  
    fetchDataButton.addEventListener('click', () => {
      fetch('/api/hello')
        .then(response => response.json())
        .then(data => {
          responseDiv.innerHTML = `Response: ${data.message}`;
        })
        .catch(error => {
          responseDiv.innerHTML = 'Error fetching data';
        });
    });
  });