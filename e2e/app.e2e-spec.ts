import { ZunPage } from './app.po';

describe('zun App', () => {
  let page: ZunPage;

  beforeEach(() => {
    page = new ZunPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
