from flask import Flask
from flask import render_template, request
from app import app
from app.controller.home import Home
from app.controller.product import Product

@app.route('/')
@app.route('/index')
def index():
    home = Home()
    homeData = home.index()
    return render_template('home/index.html', title='Coding Complexity - Home Page', homeData=homeData)

@app.route('/product/<int:productId>')
def product(productId):
    product = Product()
    productDetails = product.index(productId)
    return render_template('product/product.html', title='Coding Complexity - Product Details', productDetails=productDetails)
