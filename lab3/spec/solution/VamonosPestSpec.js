describe("VamonosPest", function() {
  var subject;

  beforeEach(function() {
    subject = new VamonosPest();

    // Create spy object using Jasmine
    SmuggleDependency.CzechRepublic = jasmine.createSpyObj(
      'CzechRepublic', // arbitrary name
      ['toPrague', 'toAll'] // array of methods to spy on
    );

    // Create spy object by hand
    SmuggleDependency.NorthAmerica = { toMexico: jasmine.createSpy() };
  });

  describe('initialize', function() {
    it('should initialize coveredHouses to 0', function() {
      expect(subject).toHaveZeroCoveredHouses();
    });
  });

  describe('coverHouse', function() {
    it('should increase the count if supplies are available', function() {
      spyOn(SmuggleDependency, 'canSmuggleSuppliesIn').andReturn(true);
      subject.coverHouse();
      expect(subject.coveredHouses).toEqual(1);
    });

    it('should not increase the count if supplies are unavailable', function() {
      spyOn(SmuggleDependency, 'canSmuggleSuppliesIn').andReturn(false);
      subject.coverHouse();
      expect(subject).toHaveZeroCoveredHouses();
    });
  });

  describe('uncoverHouse', function() {
    beforeEach(function() {
      spyOn(SmuggleDependency, 'canSmuggleSuppliesIn').andReturn(true);
      subject.coverHouse();
      subject.coverHouse();
    });

    it('should descrease the covered house count', function() {
      subject.uncoverHouse();
      expect(subject.coveredHouses).toEqual(1);
    });

    it('should not ever be a negative number', function() {
      subject.uncoverHouse();
      subject.uncoverHouse();
      subject.uncoverHouse();
      expect(subject).toHaveZeroCoveredHouses();
    });
  });

  describe('the shipping tests', function() {
    describe("shipToEurope", function() {
      it('should ship to Europe', function() {
        subject.shipToEurope();
        expect(SmuggleDependency.CzechRepublic.toAll).toHaveBeenCalled();
      });
    });

    describe('ship to Prague', function() {
      it('should ship to Prague', function() {
        subject.shipToPrague();
        expect(SmuggleDependency.CzechRepublic.toPrague).toHaveBeenCalled();
      });
    });

    describe('shipEverywhere', function() {
      it('should ship everywhere', function() {
        subject.shipEverywhere();
        expect(SmuggleDependency.CzechRepublic.toAll).toHaveBeenCalled();
        expect(SmuggleDependency.NorthAmerica.toMexico).toHaveBeenCalled();
      });
    });
  });
});
