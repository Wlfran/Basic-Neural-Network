//Inicializar la red nueronal
// var magic = new brain.NeuralNetwork();
const network = new brain.NeuralNetwork();

//Entrenar la red
network.train([
    { input: { rojo: 0, verde: 0, azul: 0 }, output: { color: 1 } },
    { input: { rojo: 1, verde: 1, azul: 1 }, output: { color: 0 } }
])

//Mostrar color input en div
function update(color) {
    var rgb = [color.channels.r, color.channels.g, color.channels.b];

    var div = document.getElementById("sitio");
    div.style.background = color;

    var entrada = {
        rojo: rgb[0] / 255,
        verde: rgb[1] / 255,
        azul: rgb[2] / 255
    }
    var resultado = network.run(entrada);

    console.log(resultado);

    if (resultado.color > .5) {
        div.style.color = "white";
    }
    else {
        div.style.color = "black";
    }
}