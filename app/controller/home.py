import datetime, os
from app.config import Config

class Home:
    def __init__(self):
        self.config = Config()


    def index(self):
        homePageData = {}
        homePageData['productData'] = self.config.productData()
        # print(homePageData)
        return homePageData
