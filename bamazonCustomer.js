var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "P@$$w0rd",
  database: "Bamazon"
});

connection.connect(function(err) {
  if (err) throw err;
 // console.log("connected as id " + connection.threadId);
 displayItems();
});

var askItem = function() {
	inquirer.prompt([{
		name: "id",
		type: "input",
		message: "Enter the ID of the item you want to buy?"
	},
	{
		name: "quantity",
		type: "input",
		message: "How many do you want to buy?"
	}]).then(function(answer) {
		var query =
		console.log(answer);
  })
}

var displayItems = function() {
	var query = "SELECT item_id,product_name,department_name,price,stock_quantity from products;";
    connection.query(query, function(err, res) {
    	if (err) {
    		console.log(err);
    		return
    	}
    	console.log(res);
    	askItem();
    })
}