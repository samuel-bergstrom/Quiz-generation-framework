from elevenlabs import set_api_key, generate, save, VoiceSettings
from elevenlabs.api import User
from dotenv import load_dotenv
import os

load_dotenv()
set_api_key(os.getenv('ELEVENLABS_API_KEY'))

user = User.from_api()  
charecters_used = int(str(user).split(',')[1].split("=")[1])
print("characters_used: ", charecters_used)

model = "eleven_turbo_v2"
voice = "yl2ZDV1MzN4HbQJbMihG"

def generate_trivia(save_index, item):
  question = item[1]
  alts = f'{item[2]}, {item[3]} or {item[4]}'
  correct_index =  item.index('true', 5) - 3
  correct = item[correct_index]

  print("Generating: ",question, save_index)
  audio = generate(question, voice=voice,model=model)
  save(audio,f'public/generated_lines/questions/{save_index}.wav')

  print("Generating: ",alts)
  audio = generate(alts, voice=voice,model=model)
  save(audio,f'public/generated_lines/alternatives/{save_index}.wav')
      
  print("Generating: ",correct)
  audio = generate(correct, voice=voice,model=model)
  save(audio,f'public/generated_lines/correct/{save_index}.wav')

def generate_input(save_index, input):
  print("Generating: ",input, save_index)
  audio = generate(input, voice=voice,model=model)
  save(audio,f'public/generated_lines/{save_index}.wav')

def clean_would_you_rather(line):
  tmp_line2 = line[2]
  tmp = ""
  my_index = 0
  for i, c in enumerate(line[1]):
    if line[2][i] == c:
      if c == " ":
        my_index = i
    else:
      break
  line[2] = line[2][my_index:len(line[2])]
  return line[1].strip() + " or " + line[2].strip()


with open('public/video_data.txt', encoding='utf-8') as data_file:
  data = [line.strip().split('|') for line in data_file]

for save_index, item in enumerate(data):
    if item[0] == "guess_emoji_img":
        generate_input(save_index, "It's " + item[1])

    elif item[0] == "guess_emoji":
        generate_input(save_index, "It's " + item[1])

    elif item[0] == "odd_emoji":
        pass

    elif item[0] == "would_rather":
        generate_input(save_index, clean_would_you_rather(item))

    elif item[0] == "would_music":
        generate_input(save_index, item[1] + " or " + item[2])

    elif item[0] == "trivia":
        generate_trivia(save_index, item)
