-- Drops the bamazon if it exists currently --
DROP DATABASE IF EXISTS bamazon;
-- Creates the "bamazon" database --
CREATE DATABASE bamazon;

USE bamazon;

-- Creates the table "products" within bamazon db --
CREATE TABLE products (
  -- Makes an int column called "itme_id" which cannot contain null --
  item_id INTEGER(30) AUTO_INCREMENT NOT NULL,
  -- Makes a column called "product_name" which cannot contain null --
  product_name VARCHAR(30) NOT NULL,
  -- Makes a string column called "department_name"--
  department_name VARCHAR(30),
  -- Makes an numeric column called "price" --
  price INTEGER(10),
  -- Makes an numeric column called "stock_quantity" --
  stock_quantity INTEGER(30),
  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Bananas", "Produce", 1, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Apples", "Produce", 1, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Oranges", "Produce", 1, 35);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Pineapples", "Produce", 2, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Grapes", "Produce", 3, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Figurine", "Toys", 4, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Doll", "Toys", 4, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ball", "Toys", 2, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Board Game", "Toys", 8, 5);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Truck", "Toys", 5, 10);