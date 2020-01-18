var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "",
    database: "bamazon"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("Connected as ID " + connection.threadId);
    displayItems();
});

function displayItems() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;

        for (i = 0; i < res.length; i++) {
            console.log("Product ID: " + res[i].item_id + " |  Product Name: " + res[i].product_name + " |  Price: $" + res[i].price);
        }


        shop();
        // connection.end();
    });
}

function shop(){
    inquirer.prompt({
        name: "choice",
        type: "input",
        message: "Please enter the ID number of the product you want to purchase."
    }).then(function(answer){
        var userProductChoice = answer.choice;

        connection.query("SELECT * FROM products WHERE item_id =?", userProductChoice, function(err, res){
            if(err) throw err;
            if(res.length === 0){

                console.log("That product does not exist. Please choose a valid product ID number.");
                displayItems();
                shop();

            }else{
                inquirer.prompt({
                    name: "quantity",
                    type: "input",
                    message: "Enter the quantity of the item you'd like to purchase."
                }).then(function(answer){
                    var userQuantity = parseInt(answer.quantity);
                    console.log("User quantity: " + userQuantity);
                    if(userQuantity > res[0].stock_quantity){
                        
                        console.log("We currently do not have enough in stock. Please choose an amount smaller than " + res[0].stock_quantity);
                        shop();

                    }else{
                        console.log("You have purchased " + userQuantity + " " + res[0].product_name + ".");
                        console.log("Your total is $" + (res[0].price * userQuantity));

                        var updatedQuantity = res[0].stock_quantity - userQuantity;
                        console.log("Updated quantity variable: " +updatedQuantity);
                        connection.query("UPDATE products SET stock_quantity = " + updatedQuantity + " WHERE item_id = " + userProductChoice, function(err, res){
                            if (err) throw err;
                            console.log("Thanks for shopping at BAMAZON");
                            connection.end();
                        })
                    }
                })
            }
        })
    })
}

