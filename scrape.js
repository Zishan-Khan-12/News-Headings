const req = require('request');
const cheerio = require('cheerio');
const request = require('request');

request('https://www.ndtv.com',(error,response,html) => {
    if(!error && response.statusCode == 200){
        const $ = cheerio.load(html);
        console.log(html);
    }
})