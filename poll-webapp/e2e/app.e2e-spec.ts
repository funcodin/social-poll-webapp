import { PollWebappPage } from './app.po';

describe('poll-webapp App', () => {
  let page: PollWebappPage;

  beforeEach(() => {
    page = new PollWebappPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
