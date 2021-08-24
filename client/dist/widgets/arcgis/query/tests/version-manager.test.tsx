import { Immutable } from 'jimu-core'
import { versionManager } from '../src/version-manager'

describe('test 1.5.0', () => {
  it('should add default value for new props', async () => {
    const oldConfig = Immutable({
      queryItems: [{
        useAttributeFilter: false
      }, {
        useSpatialFilter: true
      }, {
        useDataSource: '1'
      }]
    })
    await versionManager.upgrade(oldConfig, '1.4.0', '1.5.0', 'widget0').then((newConfig) => {
      const queryItems = newConfig.queryItems

      expect(queryItems[0].useAttributeFilter).toBe(false)
      expect(queryItems[0].useSpatialFilter).toBe(true)
      expect(queryItems[1].useAttributeFilter).toBe(true)
      expect(queryItems[1].useSpatialFilter).toBe(true)
      expect(queryItems[2].useAttributeFilter).toBe(true)
      expect(queryItems[2].useSpatialFilter).toBe(true)
    })
  })
})