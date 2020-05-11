const app = require('express')()

app.get('/', (req, res) => {
	let service = [];
	
	service.push(
		{
			customerName : "Srihari",
			nextServiceDue : "15 May 2020",
			carPhoto : "https://img.etimg.com/thumb/msid-66905598,width-1200,height-900/industry/auto/cars-uvs/autocar-show-2018-maruti-suzuki-ertiga-test-drive-review.jpg",
			detailedStatus :
				[
					{
						"item" : "Brake Pad",
						"status" : "GOOD",
						"img" : "https://images-na.ssl-images-amazon.com/images/I/71phrCAWcML._AC_SY355_.jpg"
					}, 
					{
					   "item" : "Oil",
					  "status" : "MEDIUM",
					   "img" : "https://static.thenounproject.com/png/17696-200.png"
					},
					{
						"item": "Battery",
						"status" : "GOOD",
						"img" :"https://img.icons8.com/pastel-glyph/2x/car-battery--v2.png"
					}
				]
		}
	);

	let sdata = JSON.stringify(service, null, 2);
	//console.log(sdata);
	res.send(sdata);
});
 
module.exports.app = app;
