
// Clase habitacion.
// Su temperatura cambia aleatoriamente. (Simula el invierno o el verano)
class Habitacion {
	
	constructor() {
		const readline = require('readline');
		const rl = readline.createInterface({
			input: process.stdin,
			output:process.stdout,
			prompt: '\n escribe algo'
		});
		rl.prompt();
		rl.on('line',(line) => {
			console.log(` es = '${line}'`);
		}.on('close',() => {
			console.log(`que tengas un buen dia`)
		});
		
		

		// Temperatura actual de la habitacion:
		this.temperatura = 20.0;

		// Cada 10 segundos sube o baja aleatoriamente la temperatura 
		// hasta +/- un grado:
		setInterval(() => {
			this.temperatura += Math.random() * 2 - 1,
			console.log(`Cambio aleatorio a ${this.temperatura.toFixed(1)}ºC`);
		}, 10000);
	}
}

exports = module.exports = Habitacion;

