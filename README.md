CoinTrack React Application

Built with: ReactJs, AutoSuggest React Module, AlphaVantage API, and deployed via Heroku

Goal: Allow users to search for a digital coin's daily, weekly, and monthly prices, volumes, and market caps. 

Process: The search bar is built from a react module called AutoSuggest that auto populates based on the user's key press entry. From there, a drop down menu lists out all the coins starting with that letter. The user then selects the coin they'd like to view and a loading icon will appear as each api call is being processed. The data will then display and the user can exit out of that coin's view page and select another coin.

In the future: I'd like to replicate this app through react native. I feel that viewing experience would be more optimal on mobile due to the amount of white space. I'd also like to loop through all the prices within 24 hours to give a percentage change in the price.