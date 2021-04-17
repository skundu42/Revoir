const Revoir = artifacts.require('./Revoir.sol')

require('chai')
  .use(require('chai-as-promised'))
  .should()

contract('Revoir', ([deployer, author, tipper]) => {
  let revoir

  before(async () => {
    revoir = await Revoir.deployed()
  })

  describe('deployment', async () => {
    it('deploys successfully', async () => {
      const address = await revoir.address
      assert.notEqual(address, 0x0)
      assert.notEqual(address, '')
      assert.notEqual(address, null)
      assert.notEqual(address, undefined)
    })

    it('has a name', async () => {
      const name = await revoir.name()
      assert.equal(name, 'Revoir')
    })
  })
})