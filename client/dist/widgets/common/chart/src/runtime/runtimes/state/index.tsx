import { React, DataSource, IMSqlExpression } from 'jimu-core';
import { ChartInstance } from 'jimu-ui/advanced/chart';

export enum SourceStatus {
  /**
   * When there is no `useDataSource` or the status of it is `NotReady`
   *
   * Note: 1. In this state, chart will not be rendered
   *       2. When there is `useDataSource` and the status is `NotReady`,
   *          a warning message will be displayed
   */
  NotReady = 'NOT_READY',
  /**
   * When there is a `useDataSource` but no valid series
   * or the status of `useDataSource` becomes non-`NotReady` status
   *
   * Note: In this state, chart will not be rendered, but no warning message is displayed
   */
  Ready = 'READY',
  /**
   * Records is loading
   *
   * Note: In this state, if the records has been loaded,
   *       the chart will be rendered, otherwise it will not be rendered
   */
  Loading = 'LOADING',
  /**
   * The record has been loaded
   *
   * Note: In this state, chart will be rendered
   */
  Loaded = 'LOADED',
  /**
   * Record loading failed
   *
   * Note: In this state, chart will not be rendered,
   *       and will display a warning message of loading error
   */
  LoadError = 'LOAD_ERROR',
  /**
    * The number of loaded records exceeds the limit
    *
    * Note: In this state, chart will not be rendered,
    *       and will display a warning message of exceeds limit
    */
  ExceedLimit = 'EXCEED_LIMIT'
}

export interface ChartRuntimeState {
  //The instance of the chart component, which is used in `range-cursor-mode` tool
  chart?: ChartInstance
  //Filter criteria used for original data
  filter?: IMSqlExpression
  //The data source instance of the `useDataSource`
  dataSource?: DataSource
  //The data source instance of `outputDataSource`
  outputDataSource?: DataSource
  //The status of the data source when loading records
  sourceStatus?: SourceStatus
}

const initialState: ChartRuntimeState = {
  chart: null,
  filter: null,
  dataSource: null,
  outputDataSource: null,
  sourceStatus: SourceStatus.NotReady
}

const reducer = (state: ChartRuntimeState, action) => {
  switch (action.type) {
    case 'SET_CHART':
      return { ...state, chart: action.value }
    case 'SET_FILTER':
      return { ...state, filter: action.value }
    case 'SET_DATA_SOURCE':
      return { ...state, dataSource: action.value }
    case 'SET_OUTPUT_DATA_SOURCE':
      return { ...state, outputDataSource: action.value }
    case 'SET_SOURCE_STATUS':
      return { ...state, sourceStatus: action.value }
    default:
      return state
  }
}

const ChartRuntimeStateContext = React.createContext<ChartRuntimeState>(undefined)
const ChartRuntimeDispatchContext = React.createContext<React.Dispatch<any>>(undefined)

interface ChartRuntimeStateProviderProps {
  defaultState?: ChartRuntimeState
  children: React.ReactNode
}

export const ChartRuntimeStateProvider = (props: ChartRuntimeStateProviderProps) => {
  const { defaultState, children } = props

  const [state, dispatch] = React.useReducer<typeof reducer>(reducer, defaultState || initialState)

  return <ChartRuntimeStateContext.Provider value={state}>
    <ChartRuntimeDispatchContext.Provider value={dispatch}>
      {children}
    </ChartRuntimeDispatchContext.Provider>
  </ChartRuntimeStateContext.Provider>
}

export const useChartRuntimeState = () => {
  return React.useContext(ChartRuntimeStateContext)
}

export const useChartRuntimeDispatch = () => {
  return React.useContext(ChartRuntimeDispatchContext)
}

