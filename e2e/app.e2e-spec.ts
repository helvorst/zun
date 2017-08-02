import { ZunPage } from './app.po';
import { browser, by, element } from 'protractor/built';

describe('zun App', () => {
  let page: ZunPage;
  page = new ZunPage();
  page.navigateTo();
  
  // beforeEach(() => {
  //   page = new ZunPage();
  //   page.navigateTo();
  // });

  // it('should display title', () => {
  //   //browser.pause()
  //   const title = element(by.css('.header-title'));
  //   expect(title.isPresent()).toBeTruthy();
  // });
  //  it('should display a list of videos', () => {
  //   expect(element.all(by.css('.video')).count()).toBeTruthy();
  // });
  // it('should select video', () => {
  //   var player = element(by.id('ytplayer'));
  //   var video = element.all(by.css('.video')).get(0);
  //   video.click();
  //   var player2 = element(by.id('ytplayer'));
  //   expect(player).not.toEqual(player2);
  // });c
  it('should navigate videos with buttons', (done) => {
    // const btnNext = element(by.id('btnNext'));
    // const btnPrevious = element(by.id('btnPrevious'));
    const song = element(by.css('.player-title')).getText();
    //btnNext.click(); 
    var video = element.all(by.css('.video')).get(0);
    video.click();
    const song2 = element(by.css('.player-title')).getText();      
    expect(song).not.toEqual(song2);
  
  })

});
