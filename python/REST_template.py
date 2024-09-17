import requests
import json

class Client(object):
  def __init__(self, url: str):
    self.url = url

  def get(self) -> dict:
    body = requests.get(self.url).content
    return json.loads(body)
  

if __name__ == "__main__":
  client = Client('https://api.met.no/weatherapi/airqualityforecast/0.1/stations')

  try:
    stations = client.get()
    # print(stations)
    
    for station in stations:
      print(station['name'])
  except Exception as e:
    print("error", e)