import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


// Mocha
describe('Our first tests', () => {
  it('should pass', () => {
    expect(true).to.equal(true);
  });
});

//JS DOM

describe('index.html', () => {
  it('should say hello', (done) => {
    const index = fs.readFileSync('./src/index.html', "utf-8")
    jsdom.env(index, function(err, window) {
      //window represents the window in the browser

      const h1 = window.document.getElementsByTagName('h1')[0];
      expect(h1.innerHTML).to.equal("Users");
      done();
      window.close();
    });
  })
})
