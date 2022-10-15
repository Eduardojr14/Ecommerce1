document.getElementById('form').addEventListener('submit', function(e) {

    e.preventDefault();

    let formulario = new FormData(document.getElementById('form'));

    fetch('conexionbd.php', {
            method: 'POST',
            body: formulario
        })
        .then(res => res.json())
        .then(data => {
            if (data == 'true') {
                document.getElementById('myname').value = '';
                document.getElementById('lastname').value = '';
                document.getElementById('email').value = '';
                document.getElementById('mobile').value = '';
                document.getElementById('mensaje').value = '';
                alert('Formulario enviado correctamente.');
            } else {
                console.log(data);
            }
        });

});