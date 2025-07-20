import {test,expect} from '@playwright/test'
import { execArgv } from 'process'

export class Gotowebsite{
    constructor(page,context){
        this.context=context
        this.page=page
        this.holidayhomes = this.page.locator('//a[contains(@href,"Rentals")]')
        this.textbox = this.page.getByPlaceholder('Destination')
        this.cruises = this.page.locator('//a[contains(@href,"/Cruises")]')
        this.cruiselineclick = this.page.locator('//span[normalize-space()="Cruise line"]')
        this.cruiseshipclick = this.page.locator('//span[normalize-space()="Disney Adventure"]')
        this.cruiseline = this.page.locator('//div[@id="menu-item-17391422"]')
        this.cruiseship = this.page.locator('//div[@id="menu-item-15691437"]')
        this.search = this.page.locator('//button[normalize-space()="Search"]').nth(1);
    }

    async gotopage(){
        
        await this.page.goto("https://www.tripadvisor.in");

        await this.page.waitForLoadState()

        await this.holidayhomes.click()
    }
    async entertext(value){

        await this.textbox.fill(value)      // fill the value in the searchbox

        //expect(await this.textvalue.inputValue()).toBe(value);   //// Verify that the current input field's value matches the expected value

        //await this.page.waitForLoadState()
        await this.page.keyboard.press('Enter')

        await this.page.waitForTimeout(5000)

        await this.page.locator('//a[normalize-space()="Holiday Homes"]').click()

        await this.page.waitForTimeout(5000)

        
    }
     async performactions(){ 

        await this.cruises.click()

        await this.page.waitForTimeout(5000)

        await this.cruiselineclick.click()

        await this.cruiseline.click()

        await this.cruiseshipclick.click()

        await this.cruiseship.click()

        const newpage=await Promise.all([
            this.context.waitForEvent('page'),
            this.search.click()
        ])
        return newpage;
        
    }

   
}