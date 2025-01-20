import os
import re
import requests
import urllib.request
from bs4 import BeautifulSoup, element
import json
from PIL import Image
import sys

headers={'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36'}

#helper
def save_image(response, name, path=""):
    with open(path + name, "wb") as f:
        f.write(response.content)

def is_valid_image(file_path):
    try:
        # Attempt to open the image file
        with Image.open(file_path) as img:
            # If successful, it's a valid image
            return True
    except Exception as e:
        return False

def scrape_bing(save_index, search_term):
  try_index = 0
  while try_index < 6:
    try:
        url = f'https://www.bing.com/images/search?q={search_term.replace("&", "and")}&FORM=HDRSC2'

        page = requests.get(url)
        soup = BeautifulSoup(page.content, 'html.parser')

        a = soup.find_all("a", {"class": "iusc"})[try_index]
        m = json.loads(a["m"])
        murl = m["murl"]
        turl = m["turl"]
        print(murl)
        img_page = requests.get(murl,timeout=10)

        save_image(img_page, str(save_index) + ".jpg", path="public/generated_images/")
        if is_valid_image("public/generated_images/" + str(save_index) + ".jpg"):
            pass
        
        else:
            print("Not a valid image")
            raise Exception("aaa")
        try_index = 0
        return
    except:
        try_index += 1
        print("Fail on: ", search_term)
        continue

def scrape_official_charts(save_index, artist):
  print("Getting: ", artist)
  url = f"https://www.officialcharts.com/search/{artist}/?articles=0&songs=0&albums=0&films=0"
  page = requests.get(url, headers=headers)
  soup = BeautifulSoup(page.content, 'html.parser')

  a = soup.find_all("li", {"class": "card"})[0].find('a')

  artist_url = "https://www.officialcharts.com" + a["href"]
  page = requests.get(artist_url, headers=headers)
  soup = BeautifulSoup(page.content, 'html.parser')

  peak_index = 1000
  get_index = 0
  found_songs = soup.find("section", {"class": "chart-list"}).findAll("div", {"class": "stats"})
  result_songs = [div for div in found_songs if "no-audio" not in div["class"]]
  for index, song in enumerate(result_songs):
    
    current_peak = int(song.findAll("li", {"class": "peak"})[0].find("span").text) 
    if current_peak <= peak_index:
      peak_index = current_peak
      get_index = index

  audio_url = soup.find("section", {"class": "chart-list"}).findAll("button", {"class": "audio-control"})[get_index].find("audio")["src"]

  output_file_path = f"public/generated_music/{save_index}.mp3"  # Replace with the desired output file path

  response = requests.get(audio_url, headers = headers)

  if response.status_code == 200:
      with open(output_file_path, 'wb') as f:
          f.write(response.content)
      print(f"File downloaded successfully and saved at {output_file_path}")
  else:
      print(f"Failed to download the file. Status code: {response.status_code}")

data = []
with open('public/video_data.txt', encoding='utf-8') as data_file:
  data = [line.strip().split('|') for line in data_file]

for save_index, item in enumerate(data):
  if item[0] == "guess_emoji_img":
    scrape_bing(save_index, item[1])

  elif item[0] == "guess_emoji":
    pass

  elif item[0] == "odd_emoji":
    pass

  elif item[0] == "would_rather":
    scrape_bing(str(save_index) + "_0", item[1])
    scrape_bing(str(save_index) + "_1", item[2])

  elif item[0] == "would_music":
    scrape_bing(str(save_index) + "_0", item[1])
    scrape_bing(str(save_index) + "_1", item[2])
    
    picked_artist = item[1] if int(item[3].replace("%", "")) >= int(item[4].replace("%", "")) else item[2]
    scrape_official_charts(save_index, picked_artist)

  elif item[0] == "trivia":
    scrape_bing(str(save_index), item[1])



