/* eslint-env jest */
const rewardgateway = require('../rewardgateway')
jest.mock('../request')

describe('#getEmployees() using Promises', () => {
  it('should load list of employees', () => {
    return rewardgateway.getEmployees()
    .then(data => {
      expect(data).toBeDefined()
      expect(Array.isArray([data])).toBe(true);
      // expect object that contains: uuid, company, bio, name, title, avatar
    })
  })
})