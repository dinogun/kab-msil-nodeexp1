const app = require('express')()

app.get('/', (req, res) => {
	let service = [];
	
	service.push(
		{
			"username": "Rohan",
			"primaryPlan": "prepaid",
			"msg_limit": "56",
			"call_limit": "1245 mins",
			"data_limit": "55.6 GB",
			"plans":
				[
					{
						"type": "Due by 16th Aug 2020",
						"amount": "450.50",
						"name": "August 2020"
				  	},
					{
						"type": "Paid on 18th Jul 2020",
						"amount": "345",
						"name": "July 2020"
					},
					//{
					//	"type": "Paid on 7th Aug 2020",
					//	"amount": "INR 250",
					//	"name": "June 2020"
					//},
					{
						"type": "prepaid",
						"amount": "INR 250",
						"name": "June 2020"
				  	}
				]
		}
	);

	let sdata = JSON.stringify(service, null, 2);
	//console.log(sdata);
	res.send(sdata);
});
 
module.exports.app = app;
