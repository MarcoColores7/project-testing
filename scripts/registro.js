const form = document.getElementById('registrationForm');
// listen the form event
form.addEventListener('submit', function(event) {
    event.preventDefault(); // blocking the normal behavior
    // get the values from the inputs
    const name = document.getElementById('name').value;
    const age = parseInt(document.getElementById('age').value, 10);
    const email = document.getElementById('email').value;
    // create an obj from the form
    const data = {
        name: name,
        age: age,
        email: email
    };
    console.log(data);
    // send to the php using fetch
    fetch('insert.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data) // convert into JSON
    })
    .then(response => {
        if (!response.ok) {
            throw new Error('Error on the server response');
        }
        return response.json();
    })
    .then(result => {
        // Mostrar el resultado del servidor en la consola
        console.log('Server response:', result);
        alert(result.mensaje || 'Successful');
    })
    .catch(error => {
        console.error('Error:', error);
        alert('There was an error on the response.');
    });

    // clear the form
    form.reset();
});
