import {test,expect} from '@playwright/test'

export class Getcruisedetails{
    constructor(page){
        this.page=page;
    }

    async Getcruisedetail(){

        const details= await this.page.locator('//div[@class="szsLm"]').textContent();
        let cleaned = details.replace(/\s*\|\s*/g, "\n").replace(/(\d)([A-Z])/g, "$1\n$2");
        let lines = cleaned.split("\n");

        let result={}
        lines.forEach(line =>{
            let [key, value]= line.split(":")
            if(key && value){
                result[key.trim()] = value.trim().replace(/,/g,"")
            }
        })
        for (let key in result){
            console.log(`${key}:${result[key]}`)
        }

        const languageloc = await this.page.locator('//ul[@class="LojWi w S4"]').nth(2);
        const count = await languageloc.count();
        if(count>0){
            const language = await languageloc.textContent()
            let langs = language.match(/\b[A-Za-z\s]+(?=\(\d+\))/g)
            console.log("Languages : --->")
            for(let i of langs){
                console.log(i)
            }
        }
        else{
            console.log("No language found")
        }
    }

}