import datetime, os, yaml

class Config:
    def __init__(self):
        self.dataBasePath = '{}/app/Database'.format(os.getcwd())

    def productData(self):
        productYamlfile = '{}/products.yaml'.format(self.dataBasePath)
        productsData = yaml.load(open(productYamlfile), Loader=yaml.FullLoader)
        return productsData
