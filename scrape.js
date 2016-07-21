var scraperjs = require('scraperjs');
// example usage: node scrape.js http://elm.eu.org/cgimodel.py?fun=smartResult\&userId=QiKUWpKjPk\&EXPECT_CUTOFF=100\&r=1\&bg=on > myresults.txt
// example url: http://elm.eu.org/cgimodel.py?fun=smartResult&userId=QiKUWpKjPk&EXPECT_CUTOFF=100&r=1&bg=on
var url = process.argv[2];
scraperjs.DynamicScraper.create(url)
    .scrape(function($) {
        return $('table[bgcolor="#FFFFDD"] .tab[target=_blank]').map(function() {
            return $(this).text().trim();
        }).get();
    })
    .then(function(motifCollection) {
        var items = motifCollection.join("\n");
        console.log(items);
        console.log("Found "  + motifCollection.length + " elements");
    })