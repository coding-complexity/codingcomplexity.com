from flask import Flask
from flask import render_template, request
from app import app
from app.controller.home import Home

@app.route('/')
@app.route('/index')
def index():
    home = Home()
    homeData = home.index()
    return render_template('home/index.html', title='Coding Complexity', homeData=homeData)
