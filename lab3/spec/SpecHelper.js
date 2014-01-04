beforeEach(function() {
  this.addMatchers({
    toHaveZeroCoveredHouses: function(expected) {
      return this.actual.coveredHouses === 0;
    }
  });
});
