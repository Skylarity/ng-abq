import { NgAbqPage } from './app.po';

describe('ng-abq App', function() {
  let page: NgAbqPage;

  beforeEach(() => {
    page = new NgAbqPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
