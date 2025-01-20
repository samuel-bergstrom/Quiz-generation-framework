from elevenlabs import set_api_key, generate, save, VoiceSettings
from elevenlabs.api import User  
from dotenv import load_dotenv
import os

load_dotenv()
set_api_key(os.getenv('ELEVENLABS_API_KEY'))

user = User.from_api()  
charecters_used = int(str(user).split(',')[1].split("=")[1])
print("characters_used: ", charecters_used)

text = [

]

for item in text:
  if charecters_used < 10000 :
      model = "eleven_turbo_v2"
      voice = "yl2ZDV1MzN4HbQJbMihG"
      audio = generate(item, voice=voice,model=model)
      save(audio,f'public/generated_initial_lines/odd_emoji/{item.replace("?","")}.wav')
  else:
    print("Out of characters")