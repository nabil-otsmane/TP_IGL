var webDriver = require ('selenium-webdriver') ;



function AddEnseignant () {
    var driver = new webDriver.Builder().forBrowser('chrome').build();
    var timeOuts = 1000;  //Represente le temps d'attendte entre deuc instructions
    driver.get('localhost:3000').then(function (){
        driver.findElement(webDriver.By.name('AddButton')).click().then(driver.sleep(timeOuts).then (()=> {
            driver.findElement(webDriver.By.name('familyNameProf')).sendKeys("Batata").then(driver.sleep(timeOuts).then(()=> {
                driver.findElement(webDriver.By.name('firstNameProf')).sendKeys("Sofiane").then(driver.sleep(timeOuts).then(()=> {
                    driver.findElement(webDriver.By.name('ageProf')).sendKeys("35").then(driver.sleep(timeOuts).then(()=> {
                        driver.findElement(webDriver.By.name('NSSProf')).sendKeys("9547823106541").then(driver.sleep(timeOuts).then(()=> {
                            driver.findElement(webDriver.By.name('Module')).sendKeys("IGL").then(driver.sleep(timeOuts).then(()=> {
                                    driver.findElement(webDriver.By.name('Validate')).click().then(driver.sleep(timeOuts).then(()=>{
                                        setTimeout(() => {
                                            console.log("The Enseignant has been Added");
                                            driver.quit();
                                        }, 5000);
                                    })
                            )})
                        )})
                    )})
                )})
            )})
        )}) 
    )})
}

AddEnseignant();