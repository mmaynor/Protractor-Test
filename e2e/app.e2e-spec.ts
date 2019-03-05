import { AppPage } from './app.po';
import { browser, by, element } from 'protractor';

describe('ng5-create-routes App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display Home Page', () => {
    page.navigateTo();
  //  browser.sleep(10000);
    expect(page.getParagraphText()).toEqual('Home Page');
  });

  it('should display About Button', () => {
    page.navigateTo();
    expect(page.getAboutButton().getText()).toEqual('About');
  });

  it('should route to About Page', () => {
    page.navigateTo();
    page.getAboutButton().click();
    //browser.sleep(10000);
    expect(page.getAboutText()).toEqual('About Page');
  });

  it('should route to User List and display John', () => {
    page.navigateTo();
    page.getUserButton().click();
    expect(page.getUserJohn()).toEqual('john');
  });
});
