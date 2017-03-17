import { TheutzPage } from './app.po';

describe('theutz App', function() {
  let page: TheutzPage;

  beforeEach(() => {
    page = new TheutzPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
