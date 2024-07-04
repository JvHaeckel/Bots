/* CRIE SEU PRIMEIRO BOT QUE ENVIA MENSAGENS AUTOMATICAMENTE NO WHATS APP!

https://www.youtube.com/watch?v=CrH3AqWF6g0&t=1s&ab_channel=DankiCode*/


const puppeteer = require("puppeteer"); // Constante para importar o pupeteer

(async function main() {  // Função do bot
    try {

        /* Configuração do puppeteer - modelo necessário para executar o Puppeteer:*/
        const bronwser = await puppeteer.launch ( {headless: false});
       
        const page = await bronwser.mewPage();

        await page.setUserAgent("Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.108 Safari/537.36") 
        // Deixar o bot indetectável para o Whats usando uma função do puppeteer

        /* Fazer o bot entrar no whatsapp web*/
        await page.goto("https://web.whatsapp.com/")

        /* Fazer o bot procurar nossos contatos*/
        await page.waitForSelector("._2_1wd") // Essa classe muda com o tempo
        await delay(5000); // Para o bot esperar 5000 milisegundos

        const contactName = ""; // Nome do contato em vazio
        await page.click(`span[title = ${contactName}]`)

        // Parei aqui aos 11:59 
        await page.waitForSelector("OTBsx");


    } catch (e) {
        console.error("Lascou deu erro", e);
    }
})();

function delay(time){
    return new Promise(function (resolve){
        setTimeout(resolve,time);
    });
}