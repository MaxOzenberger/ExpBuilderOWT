import { BaseVersionManager } from 'jimu-core';
import { IMConfig } from './config'

class VersionManager extends BaseVersionManager{
  versions = [{
    version: '1.5.0',
    description: '1.5.0',
    upgrader: (oldConfig: IMConfig) => {
      let newConfig = oldConfig;

      oldConfig.queryItems?.forEach((queryItem, index) => {
        if (queryItem.useAttributeFilter == null) {
          newConfig = newConfig.setIn(['queryItems', index, 'useAttributeFilter'], true)
        }
        if (queryItem.useSpatialFilter == null) {
          newConfig = newConfig.setIn(['queryItems', index, 'useSpatialFilter'], true)
        }
      })

      return newConfig;
    }
  }]
}

export const versionManager = new VersionManager();