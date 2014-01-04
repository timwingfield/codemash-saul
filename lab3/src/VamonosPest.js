var VamonosPest = Backbone.Model.extend({
  coveredHouses: 0,

  initialize: function() {
    coveredHouses = 0;
  },

  coverHouse: function() {
    if (SmuggleDependency.canSmuggleSuppliesIn()) {
      this.coveredHouses++;
    }
  },

  uncoverHouse: function() {
    if (this.coveredHouses === 0) {
      this.coveredHouses = 0;
    } else {
      this.coveredHouses--;
    }
  },

  shipToEurope: function() {
    SmuggleDependency.CzechRepublic.toAll();
  },

  shipToPrague: function() {
    SmuggleDependency.CzechRepublic.toPrague();
  },

  shipEverywhere: function() {
    SmuggleDependency.CzechRepublic.toAll();
    SmuggleDependency.NorthAmerica.toMexico();
  }
});

/* Think it's poorly designed? Too bad. It's a 3rd party API. */
var SmuggleDependency = {
  canSmuggleSuppliesIn: function() {
    throw 'spy on this function';
  },

  CzechRepublic: {
    toPrague: function() {
      throw 'spy on this function';
    },

    toPlzen: function() {
      throw 'spy on this function';
    },

    toAll: function() {
      throw 'spy on this function';
    }
  },

  NorthAmerica: {
    toMexico: function() {
      throw "You should not be here";
    }
  }
};
