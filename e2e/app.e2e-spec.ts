import { PruebaAngularPage } from './app.po';

describe('prueba-angular App', () => {
  let page: PruebaAngularPage;

  beforeEach(() => {
    page = new PruebaAngularPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
