import { ZunPage } from './app.po';
import { browser, by, element } from 'protractor/built';
import { protractor } from "protractor/built/ptor";

describe('zun App', () => {
  let page: ZunPage;

  beforeEach(() => {
    page = new ZunPage();
    page.navigateTo();
    browser.sleep(5000);
  });

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
    const btnNext = element(by.id('btnNext'));
    const song = element(by.css('.track-name')).getText();
    console.log(song)
    btnNext.click();
    console.log('click')
    browser.sleep(5000)
    const song2 = element(by.css('.track-name')).getText();  
    console.log(song2)
    expect(song).not.toEqual(song2);
    done();
  })

});
