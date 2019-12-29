var webDriver = require ('selenium-webdriver') ;

  //Pour lancer le test automatise il suffit de lancer la commande : 'node .\AjouterEnseignantTEST.js'  sur le terminal
  //Et ceci sur un Browser Google Chrome de version 79 Seulement 
  //pour le lancer sur une autre version vous devez d'abord telecharger le chrome driver en fonction de votre version du Chrome Actuel
  // Puis vous ecraser le chromedriver.exe qui se trouver dans le repertoire /
  // et finallement vous n'aurez qu'a lancer la meme commande 
  // Sil ne se lance toujours pas Veuillez nous contacter : hm_raiah@esi.dz  / hn_otsmane@esi.dz

function AddEnseignant () {
    var driver = new webDriver.Builder().forBrowser('chrome').build();
    var timeOuts = 1000;  //Represente le temps d'attente entre deux instructions
    driver.get('localhost:3000').then(function (){
        driver.findElement(webDriver.By.name('AddButton')).click().then(driver.sleep(timeOuts).then (()=> {
            driver.findElement(webDriver.By.name('familyNameProf')).sendKeys("Batata").then(driver.sleep(timeOuts).then(()=> {
                driver.findElement(webDriver.By.name('firstNameProf')).sendKeys("Sofiane").then(driver.sleep(timeOuts).then(()=> {
                   driver.findElement(webDriver.By.name('Validate')).click().then(driver.sleep(timeOuts).then(()=> {
                    driver.findElement(webDriver.By.name('ageProf')).sendKeys("0").then(driver.sleep(5*timeOuts).then(()=> {
                        driver.findElement(webDriver.By.name('ageProf')).sendKeys("35").then(driver.sleep(timeOuts).then(()=> {
                            driver.findElement(webDriver.By.name('NSSProf')).sendKeys("9547823106541").then(driver.sleep(timeOuts).then(()=> {
                                driver.findElement(webDriver.By.name('Module')).sendKeys("IGL").then(driver.sleep(timeOuts).then(()=> {
                                        driver.findElement(webDriver.By.name('Validate')).click().then(driver.sleep(timeOuts).then(()=>{
                                            setTimeout(() => {
                                                console.log("The Enseignant has been Added");
                                                driver.quit();
                                            }, 4000);
                                        })
                                  )})
                              )})
                             )})
                        )})
                    )})
                )})
            )})
        )}) 
    )})
}

AddEnseignant();