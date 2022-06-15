// use Chrome
const { chromium } = require('playwright');

//use Firefox
const { firefox } = require('playwright');

//use Apple Safari 
const { webkit } = require('playwright');

(async() => { // anonymous arrow function
    // function code
  
  	// launching Chrome browser
    const browserChrome = await chromium.launch({ headless:false , slowMo:100 });
  	// creating a page inside browser
  	const pageChrome = await browserChrome.newPage();
   	// navigating to site
    await pageChrome.goto('http://google.com');
  	// closing browser
    await browserChrome.close();

    // launching Firefox browser
    const broswerFirefox = await firefox.launch({ headless:false , slowMo:100 });
  	// creating a page inside browser
  	const pageFirefox = await broswerFirefox.newPage();
   	// navigating to site
    await pageFirefox.goto('http://google.com');
  	// closing browser
    await broswerFirefox.close();

    // launching  Apple Safari browser
    const browserWebkit = await webkit.launch({ headless:false , slowMo:100 });
  	// creating a page inside browser
  	const pageWebkit = await browserWebkit.newPage();
   	// navigating to site
    await pageWebkit.goto('http://google.com');
  	// closing browser
    await browserWebkit.close();
  
})(); // function calls itself