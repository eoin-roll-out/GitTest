var {By , Builder , keys} = require('selenium-webdriver');
var webdriver = require('selenium-webdriver');
var driver = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();
var properties = require('./test_Properties')

driver.get(properties.authUrls.signIn);
driver.findElement(By.xpath('//*[@id="form-signin"]/div[2]/button')).click().then(function() {
    driver.findElement(By.xpath('//*[@id="content"]/div[1]')).isDisplayed().then(function() {
        driver.findElement(By.linkText('Forgotten your password?')).click().then(function () {
            driver.findElement(By.className('link-back')).click().then(function () {
                driver.findElement(By.linkText('terms and conditions')).click().then(function () {
                    driver.findElement(By.className('link-back')).click().then(function () {
                        driver.findElement(By.linkText('Create Account')).click().then(function () {
                            driver.findElement(By.className('link-back')).click().then(function () {
                                driver.findElement(By.id('username')).sendKeys(properties.creds.username);
                                driver.findElement(By.id('password')).sendKeys(properties.creds.password).then(function() {
                                    driver.findElement(By.className('button')).click().then(function() {
                                        driver.sleep(7000).then(function () {
                                            driver.findElement(By.linkText('Sign out')).click().then(function () {
                                                driver.sleep(7000).then(function() {
                                                    driver.findElement(By.className('button button-start')).isDisplayed().then(function () {
                                                        driver.quit();
                                                    })
                                                })
                                            })
                                        })
                                    })
                                })    
                            })
                        })
                    })
                })
            })
        })
    })
})