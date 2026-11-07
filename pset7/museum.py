
import requests

search = input("What would you like to search? ")
min_year = int(input("What's the minimum year you'd like to search? "))
max_year = int(input("What's the maximum year you'd like to search? "))

url = "https://api.artic.edu/api/v1/artworks/search"

params = {
    "q": search,
    "fields": "title,artist_display,date_display,date_start,date_end",
    "limit": 100
}

headers = {
    "AIC-User-Agent": "museum-crawler (yyu8@berklee.edu)",
    "User-Agent": "museum-crawler (yyu8@berklee.edu)"
}

response = requests.get(url, params=params, headers=headers)

def format_and_print(data, min_year, max_year):
    art_data = data["data"]

    for artwork in art_data:
        title = artwork["title"]
        artist = artwork["artist_display"]
        year = artwork["date_display"]
        start = artwork["date_start"]
        end = artwork["date_end"]

        if start is not None and end is not None:
            if start >= min_year and end <= max_year:
                print(f"{title} is by {artist} which was displayed on {year}")
                print()

if response.status_code == 200:
    data = response.json()
    format_and_print(data, min_year, max_year)
else:
    print("Error getting data from API")