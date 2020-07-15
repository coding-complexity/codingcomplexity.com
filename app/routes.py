from flask import Flask
from flask import render_template, request
from app import app
from app.controller.home import Home
from app.controller.product import Product

@app.route('/')
def index():
    home = Home()
    homeData = home.index()
    return render_template('home/index.html', title='Coding Complexity LLC - Home Page', homeData=homeData)

@app.route('/product/<productSlug>')
def product(productSlug):
    product = Product()
    productDetails = product.index(productSlug)
    return render_template('product/product.html', title=productDetails['pageTitle'], productDetails=productDetails)
