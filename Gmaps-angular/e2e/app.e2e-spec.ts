import { Tagore } from './app.po';

describe('Tagore', () => {
  let page: Tagore;

  beforeEach(() => {
    page = new Tagore();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
