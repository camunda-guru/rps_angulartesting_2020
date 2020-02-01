import { LoginPage } from './login.po';
import { browser, logging } from 'protractor';
import * as data from '../userdata.json'

describe('workspace-project App', () => {
  let page: LoginPage;

  beforeEach(() => {
    page = new LoginPage();
  });

//data driven test
  it('it should navigate after successful login', () => {
    
     console.log(data.users.length);
     data.users.forEach(item => {
      page.navigateTo();
      expect(page.getMenuPageInfo(item)).toEqual('Products');
     });
      
   
    
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
