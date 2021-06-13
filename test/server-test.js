// Requiring Chai and the Chai expect interface.
const chai = require("chai");
const expect = chai.expect;
// Requiring fetch from Node Fetch.
const fetch = require("node-fetch");

/**
 * Utilizing Mocha's describe function to structure the test grouping the it() function and added a name to functionality under test (two
 * parameters: one is the name and the other the function that contains the test).
 * Utilizing Mocha's it() function to embody the test itself and added the test's name (two parameters: one is the test name and the other the
 * function that holds the body to the test).
 * Utilizing Chai's expect assertion interface. Set the URL of the Landing page, as well as the search page. Set a name and type for testing
 * purposes.
 * Expecting the network status code's response to equal 200 (OK).
 */

describe("Status Code", function (done) {
  it("Server communicates with client.", function () {
    fetch("http://localhost:3000", function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});

describe("Status Code", function (done) {
  it("Server gets search requests.", function () {
    fetch("http://localhost:8080/search?name=korn&type=song", function (res) {
      expect(res.statusCode).to.equal(200);
      done();
    });
  });
});
