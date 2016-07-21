## ELM Motif Scraper for  elm.eu.org

A supersimple web page scraping tool for the elm motif prediction result pages
This node script will get all the names of motifs on the result page and write them to a text file

### Installation


#### Get Node JS

If you haven't node installed yet, please do so via https://nodejs.org/en/ according to the instructions specific to your OS

#### Get the Code From Github

Clone this repo into your favorite directory folder

`git clone https://github.com/jessica-jordan/elm-motif-scraper.git`

#### Install All Dependencies

Move into the newly created folder from your `git clone` earlier 

`cd elm-motif-scraper`

and install all the dependencies

`npm install`

This may take a couple of secs to mins. Now you're all set!

#### Usage

This script takes a url to a prediction result page as a parameter and logs all the required motif names. If you'd like to 
have your results presented in a text file, just pipe the output into a new file named to your choice. 

Example Usage:

`node scrape.js http://elm.eu.org/cgimodel.py?fun=smartResult\&userId=QiKUWpKjPk\&EXPECT_CUTOFF=100\&r=1\&bg=on > myresults.txt`

This executes the script `scrape.js` with the url `http://elm.eu.org/cgimodel.py?fun=smartResult\&userId=QiKUWpKjPk\&EXPECT_CUTOFF=100\&r=1\&bg=on` as a parameter
to execute scraping on this results page on elm.eu.org. The output is then saved in the file `myresults.txt` in the same folder that the script is executed in. Please
escape Ampersand characters `\&` when using an url as a parameter for the script.