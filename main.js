const Interpreter = require("./src/interpreter.js");
const fs = require("fs").promises;

const flavour = process.argv[2];

fs.access(`./flavours/${flavour}`).then(() => {

	const path = `./flavours/${flavour}/`;
		
	fs.readFile(path + "config.json").then(conf => {
	
		const obj = JSON.parse(conf);

		const bindings = fs.readFile(path + obj.bindings);
		const actions = require(path + obj.actions);
		const debug_bindings = fs.readFile(path + obj.debug.bindings);
		const debug_actions = require(path + obj.debug.actions);
		const target = fs.readFile(process.argv[3]);

		Promise.all([bindings, actions, debug_bindings, debug_actions, target]).then(([bind, act, dbind, dact, targ]) => {
		
			const interpreter = new Interpreter(JSON.parse(bind), act, JSON.parse(dbind), dact);
			let curLength = 0;
		
			const prog = targ.toString().split("\n");
			const code = [];
		
			prog.forEach(l => { 
		
				if (l.length > curLength) {
					curLength = l.length;
				}; 
		
				code.push(l.split("")); 
				code.forEach(row => {
		
					while (row.length < curLength) row.push(""); 
		
				});		
			});
		
			interpreter.interpret(code);

		});
	});

}).catch(() => console.error(`Flavour: ${flavour} not available.`));