import { React, IntlShape } from 'jimu-core'
import { render } from 'jimu-for-test'
import { SpatialFilterType } from '../src/config'
import {
  createGetI18nMessage,
  toggleItemInArray,
  createGetItemValueForObject,
  executeScenario,
  getItemValueForQueryItem,
  ViewBlockComponent,
  renderViewBlockComponentChildren,
  isMapRequiredForSpatialFilterType,
  addTolerance,
  getDataSourceWithAdditionalStatusById,
  convertGeometriesForQuery
} from '../src/common/utils'
import { EntityStatusType } from '../src/common/common-components'

describe('toggleItemInArray Fn', () => {
  describe('not given parameter item', () => {
    const item = 'item2'
    const result = toggleItemInArray(item)
    it('An array that includes the value of parameter item is returned', () => {
      expect(result.includes(item)).toBeTruthy()
    })
  })
  describe('given parameter item can be found in parameter items', () => {
    const item = 'item2'
    const result = toggleItemInArray(item, ['item1', 'item2', 'item3'])
    it('An array that excludes the value of parameter item is returned', () => {
      expect(result.includes(item)).toBeFalsy()
    })
  })
  describe('given parameter item cannot be found in parameter items', () => {
    const item = 'item4'
    const result = toggleItemInArray(item, ['item1', 'item2', 'item3'])
    it('An array that includes the value of parameter item is returned', () => {
      expect(result.includes(item)).toBeTruthy()
    })
  })
})

describe('executeScenario Fn', () => {
  const featureScenarios = [
    {
      testScenario: jest.fn(() => false),
      test: jest.fn(() => false),
      action: jest.fn(() => 'dummyAction1'),
      actionScenario: jest.fn(() => 'dummyActionDefault1')
    },
    {
      testScenario: jest.fn(() => true),
      test: jest.fn(() => true),
      action: jest.fn(() => 'dummyAction2'),
      actionScenario: jest.fn(() => 'dummyActionDefault2')
    },
    {
      testScenario: jest.fn(() => true),
      test: jest.fn(() => true),
      action: jest.fn(() => 'dummyAction3'),
      actionScenario: jest.fn(() => 'dummyActionDefault3')
    },
    {
      testScenario: jest.fn(() => false),
      test: jest.fn(() => false),
      action: jest.fn(() => 'dummyAction4'),
      actionScenario: jest.fn(() => 'dummyActionDefault4')
    }
  ]
  it('default scenario properties are called if not given parameter options', () => {
    const result = executeScenario(featureScenarios)
    const foundScenario = featureScenarios.find(i => i.testScenario())
    expect(foundScenario.testScenario).toHaveBeenCalled()
    expect(foundScenario.actionScenario).toHaveBeenCalled()
    expect(result).toBe('dummyActionDefault2')
  })
  it('does not crash if any scenario property is not provided', () => {
    const func = () => executeScenario([{}, null])
    expect(func).not.toThrow()
  })
  it('customized scenario properties are called if given in parameter options', () => {
    const result = executeScenario(featureScenarios, {
      test: 'test',
      action: 'action'
    })
    const foundScenario = featureScenarios.find(i => i.test())
    expect(foundScenario.test).toHaveBeenCalled()
    expect(foundScenario.action).toHaveBeenCalled()
    expect(result).toBe('dummyAction2')
  })
  it('should not throw error if no satisfied scenario is found', () => {
    const getResult = () =>
      executeScenario(
        featureScenarios.filter(i => !i.testScenario()),
        {}
      )
    expect(getResult).not.toThrowError()
  })
})

describe('ViewBlockComponent Component', () => {
  it('does not crash if any optional property is not provided', () => {
    const func = () => render(<ViewBlockComponent currentViewBlock={null} />)
    expect(func).not.toThrow()
  })
  describe('called with function property getViewBlockScenarios provided', () => {
    let featureScenarios = null
    beforeEach(() => {
      featureScenarios = [
        {
          testScenario: () => false,
          renderScenario: jest.fn(() => <div>dummyContent1</div>)
        },
        {
          testScenario: () => true,
          renderScenario: jest.fn(() => <div>dummyContent2</div>)
        },
        {
          testScenario: () => true,
          renderScenario: jest.fn(() => <div>dummyContent3</div>)
        },
        {
          testScenario: () => false,
          renderScenario: jest.fn(() => <div>dummyContent4</div>)
        }
      ]
    })
    it('default property value of currentViewBlock is used if not provided', () => {
      const { queryByTitle } = render(
        <ViewBlockComponent
          currentViewBlock={null}
          getViewBlockScenarios={(normalizedProps) => [
            {
              testScenario: () => true,
              renderScenario: jest.fn(() => <div title='defaultData'>
                <div title='blockData'>{JSON.stringify(normalizedProps.currentViewBlock.getViewBlockData(normalizedProps))}</div>
                <div title='blockTitle'>{normalizedProps.currentViewBlock.getViewBlockTitle(normalizedProps)}</div>
                <div title='viewBlock'>{normalizedProps.currentViewBlock.renderViewBlock(normalizedProps)}</div>
              </div>)
            }
          ]}
          associatedData={null}
        />
      )
      expect(queryByTitle('blockData').innerHTML).toBe('{}')
      expect(queryByTitle('blockTitle').innerHTML).toBe('')
      expect(queryByTitle('viewBlock').innerHTML).toBe('')
    })
    it('renders the first matching scenario content if it is renderable', () => {
      const { queryByText } = render(
        <ViewBlockComponent
          currentViewBlock={null}
          getViewBlockScenarios={() => featureScenarios}
          associatedData={null}
        />
      )
      expect(featureScenarios[1].renderScenario).toHaveBeenCalled()
      expect(queryByText('dummyContent2')).toBeTruthy()
    })
    it('renders nothing if the first matching scenario content is not renderable', () => {
      const { container } = render(
        <ViewBlockComponent
          currentViewBlock={{ viewBlockKey: 'dummyKey1', viewBlockType: 'dummyType1', isViewBlockRenderable: () => false }}
          getViewBlockScenarios={() => featureScenarios}
          associatedData={null}
        />
      )
      expect(featureScenarios[1].renderScenario).not.toHaveBeenCalled()
      expect(container.innerHTML).toBe('')
    })
    it('renders and hides the element if the first matching scenario content is hidden', () => {
      const { queryByText } = render(
        <ViewBlockComponent
          currentViewBlock={{ viewBlockKey: 'dummyKey1', viewBlockType: 'dummyType1', isViewBlockHidden: () => true }}
          getViewBlockScenarios={() => featureScenarios}
          associatedData={null}
        />
      )
      expect(queryByText('dummyContent2').style.visibility).toBe('hidden')
    })
    it('renders and collapses the element if the first matching scenario content is collapsed', () => {
      const { queryByText } = render(
        <ViewBlockComponent
          currentViewBlock={{ viewBlockKey: 'dummyKey1', viewBlockType: 'dummyType1', isViewBlockCollapsed: () => true }}
          getViewBlockScenarios={() => featureScenarios}
          associatedData={null}
        />
      )
      expect(queryByText('dummyContent2').style.display).toBe('none')
    })
    it('renders nothing if no matching scenario is found', () => {
      const { container } = render(
        <ViewBlockComponent
          currentViewBlock={null}
          getViewBlockScenarios={() => featureScenarios.filter(i => !i.testScenario())}
          associatedData={null}
        />
      )
      expect(container.innerHTML).toBe('')
    })
  })
})

describe('renderViewBlockComponentChildren Fn', () => {
  it('renders nothing if no property is provided', () => {
    const { container } = render(
      renderViewBlockComponentChildren(null)
    )
    expect(container.innerHTML).toBe('')
  })
  it('default value is used if not provided', () => {
    const { container } = render(
      renderViewBlockComponentChildren({
        currentViewBlock: {
          viewBlockKey: 'dummyKey1',
          viewBlockType: 'dummyType1',
          subViewBlocks: [{
            viewBlockKey: 'dummyKey1.1',
            viewBlockType: 'dummyType1.1'
          }, {
            viewBlockKey: 'dummyKey1.2',
            viewBlockType: 'dummyType1.2'
          }]
        },
        getViewBlockScenarios: ({ currentViewBlock }) => [{
          testScenario: () => currentViewBlock.viewBlockType === 'dummyType1.1',
          renderScenario: jest.fn(() => <div title='content1.1'>dummyContent1.1</div>)
        }, {
          testScenario: () => currentViewBlock.viewBlockType === 'dummyType1.2',
          renderScenario: jest.fn(() => <div title='content1.2'>dummyContent1.2</div>)
        }]
      })
    )
    expect(container.innerHTML).toBe('<div title=\"content1.1\">dummyContent1.1</div><div title=\"content1.2\">dummyContent1.2</div>')
  })
})

describe('createGetI18nMessage Fn', () => {
  it('returns a function', () => {
    const result = createGetI18nMessage.call(this)
    expect(typeof result).toBe('function')
  })
  describe('called with parameter intl.formatMessage incorrectly provided', () => {
    const options = [
      {},
      { intl: {} },
      { intl: { formatMessage: 'dummyString' } }
    ]
    it('returned function should throws error', () => {
      const results = options.map(option => createGetI18nMessage(option as { intl: IntlShape, defaultMessages?: any }))
      results.forEach(result => {
        const getResult = () => result('dummyId', {})
        expect(getResult).toThrowError()
      })
    })
  })
  describe('called with parameter intl.formatMessage correctly provided', () => {
    it('returned function should have called intl.formatMessage', () => {
      const formatMessage = jest.fn(({ id }) => messages[id])
      const id = 'dummyId'
      const messages = { [id]: 'dummyContent' }
      const result = createGetI18nMessage({ intl: { formatMessage } as any, defaultMessages: {} })
      expect(result(id)).toBe('dummyContent')
    })
  })
})

describe('createGetItemValueForObject Fn', () => {
  const dummyData1 = [
    { attr1: 'dummyValueAttr1', attr2: 'dummyValueAttr2' },
    'attr2'
  ]
  it('returns a function', () => {
    const result = createGetItemValueForObject.call(this)
    expect(typeof result).toBe('function')
  })
  describe('called with function property getFeatureScenarios not provided', () => {
    it('returned function renders default value', () => {
      const result = createGetItemValueForObject({})
      const res = result(dummyData1)
      expect(res).toBe('dummyValueAttr2')
    })
  })
  describe('called with function property getFeatureScenarios provided', () => {
    const featureScenarios = [
      {
        testScenario: () => false,
        actionScenario: jest.fn(() => 'dummyContent1')
      },
      {
        testScenario: () => true,
        actionScenario: jest.fn(() => 'dummyContent2')
      },
      {
        testScenario: () => true,
        actionScenario: jest.fn(() => 'dummyContent3')
      },
      {
        testScenario: () => false,
        actionScenario: jest.fn(() => 'dummyContent4')
      }
    ]
    it('returned function returns the first matching scenario action result', () => {
      const result = createGetItemValueForObject({
        getFeatureScenarios: () => featureScenarios
      })
      const res = result(dummyData1)
      expect(
        featureScenarios.find(i => i.testScenario()).actionScenario
      ).toHaveBeenCalled()
      expect(res).toBe('dummyContent2')
    })
    it('returned function returns default value if no matching scenario is found', () => {
      const result = createGetItemValueForObject({
        getFeatureScenarios: () =>
          featureScenarios.filter(i => !i.testScenario())
      })
      const res = result(dummyData1)
      expect(res).toBe('dummyValueAttr2')
    })
    it('returned function returns default value if corrected value is set to false', () => {
      const result = createGetItemValueForObject({
        getFeatureScenarios: () => featureScenarios
      })
      const res = result(dummyData1, false)
      expect(res).toBe('dummyValueAttr2')
    })
  })
})

describe('isMapRequiredForSpatialFilterType Fn', () => {
  it('returns correct value', () => {
    const result1 = isMapRequiredForSpatialFilterType(SpatialFilterType.InteractiveDrawMode)
    const result2 = isMapRequiredForSpatialFilterType('dummyType' as SpatialFilterType)
    expect(result1).toBe(true)
    expect(result2).toBe(false)
  })
})
describe('getItemValueForQueryItem Fn', () => {
  it('returns correct value for spatialFilterTypes', () => {
    const result0 = getItemValueForQueryItem([undefined, 'spatialFilterTypes'])
    expect(result0).toEqual([])
    const queryItem1 = {
      spatialMapWidgetIds: [],
      spatialFilterTypes: [
        SpatialFilterType.CurrentMapExtent,
        SpatialFilterType.InteractiveDrawMode
      ]
    }
    const result1 = getItemValueForQueryItem([queryItem1, 'spatialFilterTypes'])
    expect(result1).toEqual([])
    const queryItem2 = {
      spatialMapWidgetIds: ['dummyId1'],
      spatialFilterTypes: [
        SpatialFilterType.CurrentMapExtent,
        SpatialFilterType.InteractiveDrawMode
      ]
    }
    const result2 = getItemValueForQueryItem([queryItem2, 'spatialFilterTypes'])
    expect(result2).toEqual([
      SpatialFilterType.CurrentMapExtent,
      SpatialFilterType.InteractiveDrawMode
    ])
  })
  it('returns correct value for spatialRelationEnableSelectTool', () => {
    const result0 = getItemValueForQueryItem([undefined, 'spatialRelationEnableSelectTool'])
    expect(result0).toEqual(false)
    const queryItem1 = {
      spatialMapWidgetIds: [],
      spatialRelationEnableSelectTool: true
    }
    const result1 = getItemValueForQueryItem([queryItem1, 'spatialRelationEnableSelectTool'])
    expect(result1).toEqual(false)
    const queryItem2 = {
      spatialMapWidgetIds: ['dummyId1'],
      spatialRelationEnableSelectTool: true
    }
    const result2 = getItemValueForQueryItem([queryItem2, 'spatialRelationEnableSelectTool'])
    expect(result2).toEqual(true)
  })
  it('returns correct values for buffer fields', () => {
    const queryItemA1 = {
      spatialInteractiveEnableBuffer: false,
      spatialInteractiveBufferUnit: 'dummyUnit1'
    }
    const queryItemA2 = {
      spatialRelationEnableBuffer: false,
      spatialRelationBufferUnit: 'dummyUnit1'
    }
    const resultA1 = getItemValueForQueryItem([
      queryItemA1,
      'spatialInteractiveBufferUnit'
    ])
    const resultA2 = getItemValueForQueryItem([
      queryItemA2,
      'spatialRelationBufferUnit'
    ])
    expect(resultA1).toBe(undefined)
    expect(resultA2).toBe(undefined)
    const queryItemB1 = {
      spatialInteractiveEnableBuffer: true,
      spatialInteractiveBufferUnit: 'dummyUnit1'
    }
    const queryItemB2 = {
      spatialRelationEnableBuffer: true,
      spatialRelationBufferUnit: 'dummyUnit1'
    }
    const resultB1 = getItemValueForQueryItem([
      queryItemB1,
      'spatialInteractiveBufferUnit'
    ])
    const resultB2 = getItemValueForQueryItem([
      queryItemB2,
      'spatialRelationBufferUnit'
    ])
    expect(resultB1).toBe('dummyUnit1')
    expect(resultB2).toBe('dummyUnit1')
  })
})

describe('convertGeometriesForQuery Fn', () => {
  let dummyEsriModuleMap = null
  beforeEach(() => {
    dummyEsriModuleMap = {
      Multipoint: jest.fn(function (mpJson) {
        this.toJSON = jest.fn(() => JSON.stringify({ jsonMultipoint: mpJson }))
      }),
      Polyline: jest.fn(function (polylineJson) {
        this.toJSON = jest.fn(() => JSON.stringify({ jsonPolyline: polylineJson }))
      }),
      Polygon: Object.assign(jest.fn(function (polygonJson) {
        this.toJSON = jest.fn(() => JSON.stringify({ jsonPolygon: polygonJson }))
      }), {
        fromExtent: jest.fn((geo) => ({ rings: geo }))
      }),
      geometryEngine: {
        union: jest.fn((arg1) => ({ toJSON: () => JSON.stringify({ union: arg1 }) }))
      }
    }
  })
  it('returns undefined for no geometry', () => {
    const result1 = convertGeometriesForQuery(null, dummyEsriModuleMap)
    const result2 = convertGeometriesForQuery([], dummyEsriModuleMap)
    expect(result1).toBeUndefined()
    expect(result2).toBeUndefined()
  })
  it('returns undefined for incorrect type of geometry', () => {
    const dummyGeometries1 = [{
      type: 'dummyType',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true }
    }]
    const dummyGeometries2 = [{
      type: 'dummyType',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true }
    }, {
      type: 'dummyType',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true }
    }]
    const dummyGeometries3 = [{
      type: '',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true }
    }, {
      type: 'dummyType',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true }
    }]
    const dummyGeometries4 = [{
      type: 'polyline',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      paths: [[
        [-13201648.146499999, 4041169.1981000006], [-13201642.639899999, 4041173.5380000025], [-13201648.2614, 4041181.9585000053], [-13201656.351, 4041189.5582000017]
      ]]
    }, {
      type: 'dummyType',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true }
    }]
    const dummyGeometries5 = [{
      type: 'polyline',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      paths: [[
        [-13201648.146499999, 4041169.1981000006], [-13201642.639899999, 4041173.5380000025], [-13201648.2614, 4041181.9585000053], [-13201656.351, 4041189.5582000017]
      ]]
    }, {
      type: 'polygon',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      rings: [[
        [-13207199.799800001, 4046422.3526999983],
        [-13207177.6719, 4046390.077799998],
        [-13207211.1404, 4046390.1653999984],
        [-13207230.0625, 4046389.962699998],
        [-13207248.2468, 4046390.219299998]
      ]]
    }]
    const result1 = convertGeometriesForQuery(dummyGeometries1, dummyEsriModuleMap)
    const result2 = convertGeometriesForQuery(dummyGeometries2, dummyEsriModuleMap)
    const result3 = convertGeometriesForQuery(dummyGeometries3, dummyEsriModuleMap)
    const result4 = convertGeometriesForQuery(dummyGeometries4, dummyEsriModuleMap)
    const result5 = convertGeometriesForQuery(dummyGeometries5, dummyEsriModuleMap)
    expect(result1).toBeUndefined()
    expect(result2).toBeUndefined()
    expect(result3).toBeUndefined()
    expect(result4).toBeUndefined()
    expect(result5).toBeUndefined()
  })
  it('returns correct value for polygon geometry', () => {
    const dummyGeometries1 = [{
      type: 'polygon',
      spatialReference: { latestWkid: 3857, wkid: 102100 },
      rings: [[
        [-13207199.799800001, 4046422.3526999983],
        [-13207177.6719, 4046390.077799998],
        [-13207211.1404, 4046390.1653999984],
        [-13207230.0625, 4046389.962699998],
        [-13207248.2468, 4046390.219299998]
      ]]
    }, {
      type: 'polygon',
      spatialReference: { latestWkid: 3857, wkid: 102100 },
      rings: [[
        [-13187024.5001, 4027629.717199998],
        [-13187024.694600001, 4027629.7125999983],
        [-13187024.8856, 4027629.7153999982],
        [-13187025.0766, 4027629.7218999984],
        [-13187025.2677, 4027629.7431999985]
      ]]
    }, {
      type: 'polygon',
      spatialReference: { latestWkid: 3857, wkid: 102100 },
      rings: [[
        [-13180072.5545, 4038487.119199998],
        [-13180107.2861, 4038486.9847999983],
        [-13180103.9465, 4038489.8068999983],
        [-13180113.742700001, 4038501.767599998],
        [-13180113.965300001, 4038502.0363999982]
      ]]
    }, {
      type: 'polygon',
      spatialReference: { latestWkid: 3857, wkid: 102100 },
      rings: [[
        [-13191765.060600001, 4041863.7514999984],
        [-13191768.7248, 4041863.3855999983],
        [-13191769.9054, 4041878.1851999983],
        [-13191766.2408, 4041878.4806999983],
        [-13191765.060600001, 4041863.7514999984]
      ]]
    }, {
      type: 'polygon',
      spatialReference: { latestWkid: 3857, wkid: 102100 },
      rings: [[
        [-13185347.6325, 4047367.321299998],
        [-13185386.3105, 4047363.7892999984],
        [-13185423.7673, 4047411.8742999984],
        [-13185415.684600001, 4047435.944099998],
        [-13185404.156200001, 4047470.259399998]
      ]]
    }]
    const result1 = convertGeometriesForQuery(dummyGeometries1, dummyEsriModuleMap)
    expect(dummyEsriModuleMap.geometryEngine.union).toHaveBeenCalledWith(dummyGeometries1)
    expect(result1).toBe(JSON.stringify({ union: dummyGeometries1 }))
  })
  it('returns correct value for polyline geometry', () => {
    const dummyGeometries1 = ((raws) => (
      raws.map(i => ({ ...i, spatialReference: { ...i.spatialReference, toJSON: () => JSON.stringify({ jsonPolyline: i }) } }))
    ))([{
      type: 'polyline',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      paths: [[
        [-13201648.146499999, 4041169.1981000006], [-13201642.639899999, 4041173.5380000025], [-13201648.2614, 4041181.9585000053], [-13201656.351, 4041189.5582000017]
      ]]
    }, {
      type: 'polyline',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      paths: [[
        [-13201440.7659, 4040676.549900003], [-13201428.745299999, 4040684.2221000046], [-13201426.4106, 4040687.3398], [-13201422.1198, 4040693.3874000013]
      ]]
    }, {
      type: 'polyline',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      paths: [[
        [-13215657.662099998, 4041566.657499999], [-13215669.6141, 4041562.090800002], [-13215678.3599, 4041557.3320000023], [-13215684.300299998, 4041553.2743000016]
      ]]
    }])
    const result = convertGeometriesForQuery(dummyGeometries1, dummyEsriModuleMap)
    expect(dummyEsriModuleMap.Polyline).toHaveBeenCalled()
    expect(result).toMatchSnapshot()
  })
  it('returns correct value for multipoint geometry', () => {
    const dummyGeometries1 = ((raws) => (
      raws.map(i => ({ ...i, spatialReference: { ...i.spatialReference, toJSON: () => JSON.stringify({ jsonMultipoint: i }) } }))
    ))([{
      type: 'multipoint',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      points: [{
        x: -13219359.4787,
        y: 4043992.9645000026
      }, {
        x: -13204333.4213,
        y: 4036819.355800003
      }, {
        x: -13219950.875799999,
        y: 4044572.0182000026
      }]
    }, {
      type: 'multipoint',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      points: [{
        x: -13193555.2846,
        y: 4039461.1719999984
      }, {
        x: -13219808.808699999,
        y: 4039422.7951000035
      }, {
        x: -13239571.5004,
        y: 4035136.566399999
      }]
    }])
    const result = convertGeometriesForQuery(dummyGeometries1, dummyEsriModuleMap)
    expect(dummyEsriModuleMap.Multipoint).toHaveBeenCalled()
    expect(result).toMatchSnapshot()
  })
  it('returns correct value for point geometry', () => {
    const dummyGeometries1 = ((raws) => (
      raws.map(i => ({ ...i, spatialReference: { ...i.spatialReference, toJSON: () => JSON.stringify({ jsonPoint: i }) } }))
    ))([{
      type: 'point',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      x: -13219359.4787,
      y: 4043992.9645000026
    }, {
      type: 'point',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      x: -13204333.4213,
      y: 4036819.355800003
    }, {
      type: 'point',
      spatialReference: { latestWkid: 3857, wkid: 102100, equals: () => true },
      x: -13219950.875799999,
      y: 4044572.0182000026
    }])
    const result = convertGeometriesForQuery(dummyGeometries1, dummyEsriModuleMap)
    expect(dummyEsriModuleMap.Multipoint).toHaveBeenCalled()
    expect(result).toMatchSnapshot()
  })
  it('returns correct value for extent geometry', () => {
    const dummyGeometries1 = ((raws) => (
      raws.map(i => ({ ...i, spatialReference: { ...i.spatialReference, toJSON: () => JSON.stringify({ jsonExtent: i }) } }))
    ))([{
      type: 'extent',
      spatialReference: { wkid: 102100, equals: () => true },
      xmin: -13266192.72877223,
      ymin: 3983561.9425024707,
      xmax: -13143587.73540286,
      ymax: 4105861.1877586935
    }, {
      type: 'extent',
      spatialReference: { wkid: 102100, equals: () => true },
      xmin: -13190856.388562515,
      ymin: 4003863.6060181735,
      xmax: -13068251.395193145,
      ymax: 4126162.8512743963
    }])
    const result = convertGeometriesForQuery(dummyGeometries1, dummyEsriModuleMap)
    expect(dummyEsriModuleMap.Polygon).toHaveBeenCalled()
    expect(result).toMatchSnapshot()
  })
})

describe('addTolerance Fn', () => {
  it('returns correct value', () => {
    const dummyGeometry1 = { rings: [[[76.553503226, 35.927019016], [76.5618180000001, 35.922915], [76.5694, 35.924837]]], spatialReference: { wkid: 4326, latestWkid: 4326 } }
    const dummyGeometryEngine1 = { buffer: jest.fn((geometry, resolution, unit) => true) }
    const dummyView1 = { scale: 1 }
    addTolerance(dummyGeometry1, dummyView1, { geometryEngine: dummyGeometryEngine1 })
    expect(dummyGeometryEngine1.buffer).toHaveBeenCalledWith(dummyGeometry1, 10 * dummyView1.scale * 2.54 / 9600, 'meters')
  })
})

describe('getDataSourceWithAdditionalStatusById Fn', () => {
  const dummyDss1 = { dummyId1: { type: 'dummyType1' } as any }
  it('returns error status if datasource id is falsy', () => {
    const result0 = getDataSourceWithAdditionalStatusById(dummyDss1, '')
    expect(result0.status).toBe(EntityStatusType.Error)
    expect(result0.dataSource).toBe(null)
  })
  it('returns loading status if datasource list is falsy', () => {
    const result1 = getDataSourceWithAdditionalStatusById(undefined, 'dummyId1')
    expect(result1.status).toBe(EntityStatusType.Loading)
    expect(result1.dataSource).toBe(undefined)
  })
  it('returns none status if datasource is found in datasource list', () => {
    const result2 = getDataSourceWithAdditionalStatusById(dummyDss1, 'dummyId1')
    expect(result2.status).toBe(EntityStatusType.None)
    expect(result2.dataSource).toBe(dummyDss1.dummyId1)
  })
  it('returns loading status if datasource is not found in datasource list', () => {
    const result3 = getDataSourceWithAdditionalStatusById(dummyDss1, 'dummyId2')
    expect(result3.status).toBe(EntityStatusType.Loading)
    expect(result3.dataSource).toBe(undefined)
  })
})
