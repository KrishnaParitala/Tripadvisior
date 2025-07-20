import { test, expect, chromium} from '@playwright/test';
import { Gotowebsite } from '../pages/Tripadvisor';
import { Getcruisedetails } from '../pages/cruisedetails';
 
// 1.this is my test case one
test('cruise', async ()=>{
 
    const browser = await chromium.launch({headless:false})
    const context=await browser.newContext();
    const page = await context.newPage()

    const trippage = new Gotowebsite(page,context)
    await trippage.gotopage()
    await trippage.entertext('Nairobi')
    
    const [newpage]=await trippage.performactions()

    const detail= new Getcruisedetails(newpage)
    await detail.Getcruisedetail()

    


});