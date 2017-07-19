import { PragmaticPage } from './app.po';

describe('pragmatic App', () => {
  let page: PragmaticPage;

  beforeEach(() => {
    page = new PragmaticPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
