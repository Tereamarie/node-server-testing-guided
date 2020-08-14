/**
  testing the insert manually...
  - make sure the data is not on the table
  - insert the data
  - check that the data is in the table
*/


const Hobbits = require('./hobbitsModel.js');

describe('environment', function() {
  it('should be using testing database', function() {
      expect(process.env.DB_ENV).toBe('testing');
  })
})
