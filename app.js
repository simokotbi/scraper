const { Builder, By, Key, util, promise, until } = require("selenium-webdriver");
//var assert = require("assert");
//const { ableToSwitchToFrame } = require("selenium-webdriver/lib/until");
let fs = require('fs');
const { serialize } = require("v8");
const chrome = require('selenium-webdriver/chrome');
let opts = new chrome.Options();
async function extractData() {
  try{
    let driver = new Builder()
    .forBrowser('chrome')
    .setChromeOptions(opts.headless())
    .build();
  
   
  
    await  driver.get("https://www.houzz.co.uk/professionals/query/best-15-interior-designers-near-you?tid=1201&p=1");
    (await (await driver).findElement(By.xpath('/html/body/div[2]/div[5]/div/div/div/button'))).click();
    for(let page=1;page<5;page++){
        await  driver.get("https://www.houzz.co.uk/professionals/query/best-15-interior-designers-near-you?tid=1201&p="+`${page}`);
    const namestag= await driver.findElements(By.className('mlm'));
    const phone=await driver.findElements(By.className('hz-pro-search-result__contact-info')).click();
 for(let i=0;i<namestag.length;i++){
     //let data=await namestag[i].getText();
     let phoneNumbers= await phone[i].getText();
     let usersnames=await namestag[i].getText();
    await console.log( phoneNumbers,usersnames);
}
}
  }catch(err){console.log(err)}
}
extractData();