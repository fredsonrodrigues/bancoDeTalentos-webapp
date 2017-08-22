import { BancoDeTalentosPage } from './app.po';

describe('banco-de-talentos App', () => {
  let page: BancoDeTalentosPage;

  beforeEach(() => {
    page = new BancoDeTalentosPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
