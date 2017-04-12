import { SurabhiPage } from './app.po';

describe('surabhi App', () => {
  let page: SurabhiPage;

  beforeEach(() => {
    page = new SurabhiPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
