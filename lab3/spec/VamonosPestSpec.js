// Open 'SpecRunner.html in your browser to see the test runner

describe("VamonosPest", function() {
  var subject;

  beforeEach(function() {
    subject = new VamonosPest();
  });

  describe('initialize', function() {
    it('should initialize coveredHouses to 0', function() {
      // note the custom matcher, see SpecHelper.js
      expect(subject).toHaveZeroCoveredHouses();
    });
  });

  // Part #1 - Finish these tests.
  //
  // Remove the x prefix from the describe when you're ready
  // for the test runner to execute the test
  xdescribe('coverHouse', function() {
    // Hint: You'll need to spy on SmuggleDepedency.canSmuggleSupplies in
    // and return a value
    it('should increase the count if supplies are available', function() {
    });

    it('should not increase the count if supplies are unavailable', function() {
    });
  });

  // Part #2 - Test the 'uncoverHouse' function.
  //
  // Remove the x prefix from the describe when you're ready
  // for the test runner to execute the test
  xdescribe('uncoverHouse', function() {
  });

  // Part #3 - Test the shipping methods
  //
  // Remove the x prefix from the describe when you're ready
  // for the test runner to execute the test
  xdescribe('the shipping tests', function() {
    // Also, don't use spyOn.
    //
    // spyOn will work, but there are at least 2 other, and arguably cleaner,
    // ways to deal with the dependency.
    //
    // Hint: note that the dependency methods are on a child object
    describe("shipToEurope", function() {
      it('should ship to Europe', function() {
      });
    });

    describe('ship to Prague', function() {
      it('should ship to Prague', function() {
      });
    });

    describe('shipEverywhere', function() {
      it('should ship everywhere', function() {
      });
    });
  });
});
