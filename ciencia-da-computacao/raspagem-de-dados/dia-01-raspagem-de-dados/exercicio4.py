from parsel import Selector
import requests

base_url = 'http://books.toscrape.com/catalogue/'

response = requests.get(
    base_url + 'the-grand-design_405/index.html')

selector = Selector(text=response.text)

title = selector.css('h1::text').get()

price = selector.css(
    '.product_main > .price_color::text').re_first(r"\d+\.\d{2}")

description = selector.css('#product_description ~ p::text').get()

image_url = base_url + selector.css('#product_gallery img::attr(src)').get()

availability = selector.css(
    '.product_main > .availability::text').re_first(r"\d")

suffix = "...more"
if description.endswith(suffix):
    description = description[:-len(suffix)]

print(f"{title}, {price}, {description} {image_url}, {availability}")
