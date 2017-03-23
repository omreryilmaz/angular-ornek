import { AngularOrnekPage } from './app.po';

describe('angular-ornek App', function() {
  let page: AngularOrnekPage;

  beforeEach(() => {
    page = new AngularOrnekPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
