import datetime, os, yaml

class Config:
    def __init__(self):
        self.dataBasePath = '{}/app/Database'.format(os.getcwd())

    def productData(self):
        productYamlfile = '{}/products.yaml'.format(self.dataBasePath)
        productsData = yaml.load(open(productYamlfile), Loader=yaml.FullLoader)
        return productsData

    def productBenefits(self):
        benefitsYamlfile = '{}/benefits.yaml'.format(self.dataBasePath)
        benefitsData = yaml.load(open(benefitsYamlfile), Loader=yaml.FullLoader)
        return benefitsData

    def userTestimonials(self):
        testimonialFile = '{}/testimonial.yaml'.format(self.dataBasePath)
        testimonialData = yaml.load(open(testimonialFile), Loader=yaml.FullLoader)
        return testimonialData
