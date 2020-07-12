import datetime, os
from app.config import Config

class Product:
    def __init__(self):
        self.conf = Config()

    def index(self, productId):
        productDetails = {}
        products = self.conf.productData()
        for product in products:
            if product['product_id'] == productId:
                productDetails = product
        return productDetails
