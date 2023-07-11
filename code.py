import requests
from bs4 import BeautifulSoup

def scrape_news(url):
  response = requests.get(url)
  soup = BeautifulSoup(response.content, 'lxml')
  headlines = soup.find_all('h2', class_='headline')
  for headline in headlines:
    print(headline.text)

if __name__ == '__main__':
  scrape_news('https://www.bbc.com/news')


import requests
from bs4 import BeautifulSoup

def scrape_top_headlines(url):
  response = requests.get(url)
  soup = BeautifulSoup(response.content, 'lxml')
  headlines = soup.find_all('h2', class_='headline')
  return headlines

if __name__ == '__main__':
  headlines = scrape_top_headlines('https://www.bbc.com/news')
  for headline in headlines:
    print(headline.text)
