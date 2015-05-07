import DS from "ember-data";

var NumberAdapter = DS.FixtureAdapter.extend({
  queryFixtures: function(records, query /*, type */ ) {
    return records.filter(function(record) {
      for (var key in query) {
        if (!query.hasOwnProperty(key)) {
          continue;
        }
        if (record[key] !== query[key]) {
          return false;
        }
      }
      return true;
    });
  }
});