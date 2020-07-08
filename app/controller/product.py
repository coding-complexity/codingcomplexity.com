import datetime, os
from app.config import Config

class Product:
    def __init__(self):
        # self.config = Config()
        print('Home page running....')

    def index(self):
        productDetails = {}
        productDetails['msg'] = 'Hello World'
        return productDetails
