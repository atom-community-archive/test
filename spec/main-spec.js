'use babel'
/* eslint-env jasmine */

describe('test', () => {
  let mainModule = null

  beforeEach(() => {
    waitsForPromise(() => {
      return atom.packages.activatePackage('test').then((pack) => {
        mainModule = pack.mainModule
      })
    })
  })

  describe('when the test package is activated', () => {
    it('activates successfully', () => {
      expect(mainModule).toBeDefined()
      expect(mainModule).toBeTruthy()
      expect(mainModule.subscriptions).toBeDefined()
      expect(mainModule.subscriptions).toBeTruthy()
    })
  })
})
