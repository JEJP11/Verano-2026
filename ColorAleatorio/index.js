const boxColor = document.getElementById('color');
const textoHex = document.getElementById('texto');
const boton = document.querySelector('button');

function aleatorio() {
    const hexa = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
    let color = '#';
    for (let i = 0; i < 6; i++) {
        let alazar = Math.floor(Math.random() * hexa.length);
        color += hexa[alazar];
    }
    return color;
}
boton.addEventListener("click", () => {
  const colorNuevo = aleatorio();
  boxColor.style.backgroundColor = colorNuevo;
  textoHex.textContent = colorNuevo;

});
