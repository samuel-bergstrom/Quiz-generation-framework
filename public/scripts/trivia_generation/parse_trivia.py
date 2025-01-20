import json
from urllib.request import urlopen
from random import randint
import sys
import html
from unidecode import unidecode

#Use this to generate trivia
# https://opentdb.com/

f = open('public/scripts/trivia_generation/data.json')

y = json.load(f)

def clean(text):
  return (unidecode(text)).replace('“', "").replace('”', "").replace('’',"").replace('‘',"").replace('…','').replace('&#039;',"'").replace('&quot;','"')

key = []
answers = []
questions = []
for i in y['results']: 
  random_num = randint(0,len(i['incorrect_answers'])-1)
  
  answers_tmp = list(map(clean, i['incorrect_answers']))
  answers_tmp[random_num] = clean(i['correct_answer'])
  
  key_tmp = ["false" for _ in range(len(i['incorrect_answers']))]
  key_tmp[random_num] = "true"
  
  questions.append(clean(i['question']))
  answers.append(answers_tmp)
  key.append(key_tmp)

for i,question in enumerate(questions):
  print(["trivia", question, *answers[i], *key[i]])
