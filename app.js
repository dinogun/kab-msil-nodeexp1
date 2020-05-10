const app = require('express')()

app.get('/', (req, res) => {
	let service = [];
	service.push( 
		{ 
      customerInfo: { "name" : "MSIL", "vehicleNumber" : "KA04AA1234" },
      // nextServiceDue: { date: "15 May 2020", KM: "38400" }, 
		  vehicleHealth: { brakePad: "GOOD", oilLevel: "MEDIUM" }
		});
 
	let sdata = JSON.stringify(service, null, 2);
	//console.log(sdata);
	res.send(sdata);
});
 
module.exports.app = app;
