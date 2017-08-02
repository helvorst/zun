import { ZunPage } from './app.po';
import { element, by } from "protractor/built";

describe('zun App', () => {
  let page: ZunPage;
   page = new ZunPage();

  // beforeEach(() => {
  //   page = new ZunPage();
  // });

debugger
  it('should display title', (done) => {
    page.navigateTo();
    const title = element(by.css('.header-title'));
    expect(title.isPresent()).toBeTruthy();
    done();
    //expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
   it('should display a list of videos', (done) => {
    page.navigateTo();
    debugger
    expect(element(by.css('.video')).length > 250).toBe(true);
    done();
  });
  
});
