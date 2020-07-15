import datetime, os
from app.config import Config

class Product:
    def __init__(self):
        self.conf = Config()

    def index(self, productSlug):
        productDetails = {}
        products = self.conf.productData()
        for product in products:
            if product['pageSlug'] == productSlug:
                productDetails = product
        return productDetails
