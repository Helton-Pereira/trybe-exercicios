# importação do webdriver, que é o que possibilita a implementação para todos
# os principais navegadores da web
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.chrome.options import Options
from webdriver_manager.chrome import ChromeDriverManager

opts = Options()
opts.add_experimental_option("detach", True)

# criação de uma instância de navegador utilizando o Firefox
firefox = webdriver.Chrome(
    service=Service(ChromeDriverManager().install()), options=opts)

# requisições para essa instância criada utilizando o método `get`
firefox.get("https://www.google.com")
