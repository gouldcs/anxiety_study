var SerpWow = require('google-search-results-serpwow')
let serpwow = new SerpWow('YOUR SERPWOW API KEY')

let i = 1;
for(let page = 1; page <= 4; page++) {
  var params = {
    q: '"should be concerned" OR "should be worried"  OR "are worried"',
    search_type: 'news',
    news_type: 'all',
    time_period: 'last_day',
    sort_by: 'relevance',
    num: '100',
    gl: 'us',
    page: page.toString
  }
  
  query = serpwow.json(params)
    .then (queryOut => {
      result = JSON.parse(JSON.stringify(queryOut, 0, 2))
  
      for (res of result.news_results) {
        console.log(i + ". " + res.source + ": " + res.snippet)
        i++
      }
    })
    .catch(error => {
      console.log(error);
    }); 
}
