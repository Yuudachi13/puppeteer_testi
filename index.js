const puppeteer = require('puppeteer')
const fs = require('fs/promises')

async function start() {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto("https://www.dotabuff.com/players/92185668/matches")
    //  await page.screenshot({path:"testi.png", fullPage: true})

    const game = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".won, .lost")).map(x => x.textContent)

    })
    const hero = await page.evaluate(() => {
        return Array.from(document.querySelectorAll(".cell-large a")).map(x => x.textContent)

    })

    //await fs.writeFile("games.txt", game.join("\r\n"))
   // await fs.writeFile("heroes.txt", hero.join("\r\n"))
    var heroJaResult = []
    for (var i = 0; i < hero.length; i++) {
        heroJaResult.push([hero[i], game[i]]);
    }
    console.log(heroJaResult)
    await fs.writeFile("kummatkin.txt", heroJaResult.join("\r\n"))
    await browser.close()
}

start()
