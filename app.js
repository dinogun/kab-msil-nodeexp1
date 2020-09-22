const app = require('express')()

app.get('/', (req, res) => {
	let service = [];
	
	service.push(
		{
			"type": "corporate",
		}
	);

	let sdata = JSON.stringify(service, null, 2);
	res.send(sdata);
});
 
module.exports.app = app;
