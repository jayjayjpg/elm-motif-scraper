/* let cheerio = require("cheerio");
let http = require("http");
let url = {
  host: 'elm.eu.org',
  path: '/cgimodel.py?fun=smartResult&userId=QiKUWpKjPk&EXPECT_CUTOFF=100&r=1&bg=on'
};

let response = '';
http.get(url, function(res){
  res.on('data', function(content){
     // console.log("response body: " + content);
    response += content;
    //console.log(response);
  }).on('end', function(){
      parseHTMLData(response);
  });
}).on('error', function(e){
  console.log("Error: " + e.message);
});

function parseHTMLData(html){
  //console.log("full html: " + html);
  html = html.trim();
  console.log(html);
  let $ = cheerio.load(html);
  //let elmNames = [];
  let elmNames = $('.sortable .tab[target=_blank]').map(function(i, el){
    console.log($(this).text());
    return $(this).text();
  });
  console.log("array length: " + elmNames.length);
  /* let resultlist = elmNames.join(",");
  console.log("results: " + resultlist); */

// }
var scraperjs = require('scraperjs');
// example usage: node scrape.js http://elm.eu.org/cgimodel.py?fun=smartResult&userId=QiKUWpKjPk&EXPECT_CUTOFF=100&r=1&bg=on > myresults.txt
// example url: http://elm.eu.org/cgimodel.py?fun=smartResult&userId=QiKUWpKjPk&EXPECT_CUTOFF=100&r=1&bg=on
var url = process.argv[2];
scraperjs.DynamicScraper.create(url)
    .scrape(function($) {
        return $('table[bgcolor="#FFFFDD"] .tab[target=_blank]').map(function() {
            return $(this).text().trim();
        }).get();
    })
    .then(function(news) {
        var items = news.join("\n");
        console.log(items);
        console.log("These are "  + news.length + " elements");
    })