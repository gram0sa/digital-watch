const relogio = setInterval(function horas() {
    const data = Date.now();
    const today = new Date(data);
    let hr = today.getHours();
    let min = today.getMinutes();
    let sec = today.getSeconds();

    const hora = document.getElementById('horas');
    const minuto = document.getElementById('minutos');
    const segundo = document.getElementById('segundos');

    hora.innerHTML = hr;
    minuto.innerHTML = min;
    segundo.innerHTML = sec;
})