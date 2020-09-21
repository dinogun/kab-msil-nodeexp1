const app = require('express')()

app.get('/', (req, res) => {
	let service = [];
	
	service.push(
		{
			"username": "Rohan",
		}
	);

	let sdata = JSON.stringify(service, null, 2);
	//console.log(sdata);
	res.send(sdata);
});
 
module.exports.app = app;
