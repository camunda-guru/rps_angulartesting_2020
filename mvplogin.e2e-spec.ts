import { browser, element, by, ExpectedConditions, protractor} from 'protractor'
import { Alert, WebElement } from 'selenium-webdriver';
import {Workbook, Row, Cell,Worksheet} from 'exceljs';
describe('Protractor Typescript Demo', function() {
	browser.ignoreSynchronization = true; // for non-angular websites
	it('Read users from Excel for Login ', function() {
		// set implicit time to 30 seconds
        browser.waitForAngular();      
		// create object for workbook
		var wb:Workbook = new Workbook();
		// read xlsx file type
		wb.xlsx.readFile("F:\\aspireangular2020\\mvpapp\\e2e\\src\\mvpusers.xlsx").then(function(){
			//sheet object
			let sheet:Worksheet = wb.getWorksheet("Sheet1");
			//row objct
			let rowObject:Row;
			// cell object
			let cellObject:Cell;
            //print
            for(let i=1;i<5;i++)
            {
                 for (let j=1;j<3;j++) 
                 {
                     rowObject=sheet.getRow(i);
                     cellObject=rowObject.getCell(j);
                     console.log(cellObject.value);
                     //use the cell value as url for navigation
                     //browser.get(cellObject.toString())
                 }                    
            }

		
		});
	});
});