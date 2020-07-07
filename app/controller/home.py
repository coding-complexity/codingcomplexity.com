import datetime, os
from app.config import Config

class Home:
    def __init__(self):
        # self.config = Config()
        print('Home page running....')

    def index(self):
        homePageData = {}
        homePageData['msg'] = 'Hello World'
        return homePageData
