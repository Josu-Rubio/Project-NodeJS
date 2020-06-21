# Project Nodepop API and Devops

Creating a project for the "full stack web development" from Keepcoding.

# **Actualization for the Devops project**

This page is now available throug the AWS services

To watch the page you should enter the website:

`ec2-34-202-158-37.compute-1.amazonaws.com`

In the other hand, you can also watch the react project on the IP adress:

`34.202.158.37`

# Base

For running this API is necesary:

Installing MongoDB

- For mor information, look on the website --> https://www.mongodb.com/

Download the API from the github repository:

- git clone https://github.com/Josu-Rubio/Project-NodeJS

# From the main folder on the CMD

Installing the modules:

- npm install

Run the database:

- node install_db.js

To run the API from the production enviroment:

- npm start

To run the API from the development enviroment:

- npm run dev

It runs on the port 3000

On this moment, the API is fully installed and the data from the database can be observed on localhost:3000

# API use

This API have the following features:

- Create a list on products/advertisements through:

  1. Filter by name
  2. Filter by "status" ("on sell", "Wanted")
  3. Filter on a price range (We are still working on it)
  4. Filter by tag

- Create and delete products.

## Product list

To filter with products it is necessary to follow these steps:

The filter is always made by adding to the URL "/product?" and the filter
Lets see some examples:

1. By name

URL/products?name=`begining_of_the_name`

We add the name we are looking for or the begining to find the products.

2. By status

URL/products?sell=`boolean`

We add the boolean true (On sell) or false (Wanted)

3. By price range

URL/products?price=`price or price-range`

On the price we have 3 diferent choices:

- Add the number (50) --> It will return just the products with that price
- Add the range (30-90) --> It will return the products on that product range
- Add the maximum price (-120) --> It will return the products until that maximun price
- Add the minimum price (50-) --> It will return the products from that minimun price

// As said before. We are still working on that feature

4. By tag

URL/products?tag=`tag`

We only have to add the selected tag.
There are only 4 available tags, as the API has been designed like that.

- lifestyle
- work
- motor
- mobile

Those are the tags we will be able to work with.

The filters can be combined by adding "&" between them.
That way, a valid request could be:

http://localhost:3000/products?name=phone&sell=true

## Create and delete a product

This API can work the creation and delete of the products on the database.
For this is necessary to use a software like "postman".
The request for each of them are:

- Creation
  Request POST to the URL http://localhost:3000/api/
- Delete
  Request Delete to the URL http://localhost:3000/api/:id

For the testing of those features, it is necessary to know the structure of each product: - name: String - sell: Boolean - price: Number - photo: String - tags: [String]

Any bug that could be found on the API, please do not hesitate to comunicate it through GitHub.
Thanks for showing interest on this API.
Regards
