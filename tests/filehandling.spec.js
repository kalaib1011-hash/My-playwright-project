import {test} from '@playwright/test'

test('upload file',async({page})=>{

await page.goto('https://demoqa.com/upload-download');
    /**upload file**/
await page.setInputFiles('#uploadFile','./meesho.png'); 
await page.setInputFiles('#uploadFile',[]);
//await page.waitForTimeout(4000);

//upload from local
await page.setInputFiles('#uploadFile','C:/Users/Public/Pictures/wild_animal_picture_relaxing_tiger_6934816.jpg')

/**upload multiple files */

await page.goto('https://www.file.io/');
await page.setInputFiles('.css-zpjtsm',['./meesho.png'],
    ['C:/Users/Public/Pictures/wild_animal_picture_relaxing_tiger_6934816.jpg']);

/****Download file */

await page.goto('https://demoqa.com/upload-download');
const [downloads]= await Promise.all([
    page.waitForEvent('download'),
    page.click('#downloadButton')
]);
await downloads.saveAs('C:/Users/gobim/Downloads/test.png');
})


