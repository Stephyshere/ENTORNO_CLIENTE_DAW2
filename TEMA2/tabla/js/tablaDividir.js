const mostrarDivision = (event) => {
    event.preventDefault();
   
    const numero = Number(document.getElementById('numeroDividir').value);

    if (numero >= 0 && numero <= 10) {
        // MODIFICADO: Usa el ID único 'tablaDividir'
        let tabla = document.getElementById('tablaDividir');
        let tablaDividir = `<h2>Tabla de dividir del número ${numero}</h2>`;
        
        tablaDividir += '<ul>';

        // Comienza en 1 para evitar la división por cero si i fuera 0
        for (let i = 1; i <= 10; i++) { 
            // toFixed(2) se usa para limitar los decimales a dos
            tablaDividir += `<li>${numero} / ${i} = ${(numero / i).toFixed(2)}</li>`;
        }
        
        tablaDividir += '</ul>';
        tabla.innerHTML = tablaDividir;
        
    } else {
        alert('El número introducido debe estar entre 0 y 10 (ambos inclusive)');
        // MODIFICADO: Limpia el campo 'numeroDividir'
        document.getElementById("numeroDividir").value = '';
    }
}