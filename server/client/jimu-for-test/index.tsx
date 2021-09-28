import {
  ExtensionManager, extensionSpec, IMState, Immutable, ImmutableObject, IMDataSourceInfo, getAppStore, appActions, version,
  AppRuntimeInfo, UrlParameters, BrowserSizeMode, AppContext, IMJimuMapViewInfo, AppInfo, IMRuntimeInfos, WidgetsMutableStateVersion, IMMapWidgetInfo, IMAppConfig
} from 'jimu-core';
import { ArcGISDependencyDefineExtension, ArcGISDataSourceFactoryUriExtension } from 'jimu-arcgis';
import { mockSystemJsImport } from './lib/mock-systemjs-import';
import * as mockData from './lib/mock-data';

export * from './lib/widget-wrapper';
export * from './lib/widget-setting-wrapper';
export * from './lib/test-utils';
export * from './lib/mock-service';
export * from './lib/mock-item';
export * from './lib/mock-get-selections';
export * from './lib/mock-systemjs-import';
export * from './lib/mock-window-location'
export { mockData };

/**
 * Init globals to make test easy.
 */
export function initGlobal() {
  window.jimuConfig = {
    isBuilder: false,
    isSite: false,
    isInBuilder: false,
    isOutOfExb: false,
    rootPath: '/',
    appFolderName: '',
    baseUrl: '/',
    useStructuralUrl: true,
    isInPortal: false,
    mountPath: '/',
    hostEnv: 'prod',
    isDevEdition: false,
    arcgisJsApiUrl: '',
    buildNumber: '',
    exbVersion: '1.5.0'
  }
  mockSystemJsImport();
}

/** Return an empty init state. */
export function getInitState(): IMState {
  if (!window.jimuConfig) {
    initGlobal();
  }
  const INIT_STATE: IMState = Immutable({
    appConfig: null,
    portalUrl: null,
    portalSelf: null,
    widgetsRuntimeInfo: Immutable({}) as IMRuntimeInfos,
    widgetsClassStatus: Immutable({}) as ImmutableObject<{ [widgetUri: string]: boolean }>,
    widgetsPreloadProps: {} as { [widgetId: string]: ImmutableObject<any> },

    dataSourcesPreloadData: {} as { [dsId: string]: ImmutableObject<any[]> },
    appContext: Immutable({}) as ImmutableObject<AppContext>,

    appPath: window.jimuConfig.rootPath,
    appInfo: Immutable({} as AppInfo),

    isNetworkOffLine: false,
    isMobileSize: false,
    appId: null,
    appI18nMessages: Immutable({}) as any,
    appRuntimeInfo: Immutable({} as AppRuntimeInfo),
    jimuCoreNls: null,
    queryObject: Immutable({} as UrlParameters),

    dataSourcesInfo: Immutable({}) as ImmutableObject<{ [dsId: string]: IMDataSourceInfo }>,
    jimuMapViewsInfo: Immutable({}) as ImmutableObject<{ [jimuMapViewId: string]: IMJimuMapViewInfo }>,

    widgetsState: Immutable({}) as any,
    widgetsMutableStateVersion: Immutable({}) as ImmutableObject<WidgetsMutableStateVersion>,

    mapWidgetsInfo: Immutable({}) as ImmutableObject<{ [dsId: string]: IMMapWidgetInfo }>,

    token: null,
    user: null,
    theme: null,
    browserSizeMode: BrowserSizeMode.Large,
    overlays: Immutable([]),
    userLocaleChanged: false,
    hasPrivilege: true,
    privilegeError: null,
    loadAppConfigError: null
  });

  return INIT_STATE;
}

/** Get an empty default app config. */
export function getDefaultAppConfig(): IMAppConfig {
  return Immutable({
    theme: '/themes/default/',
    mainSizeMode: BrowserSizeMode.Large,
    pages: {},
    pageStructure: [],
    dialogs: {},
    layouts: {},
    sections: {},
    views: {},
    widgets: {},
    screenGroups: {},
    screens: {},
    header: {},
    footer: {},
    dataSources: {},
    attributes: {},
    widgetsManifest: {},
    messageConfigs: {},
    exbVersion: version
  } as any)
}

/**
 * Init extensions. Will init `DependencyDefine` and `DataSourceFactoryUri`.
 */
export function initExtensions() {
  ExtensionManager.getInstance().registerExtension({
    epName: extensionSpec.ExtensionPoints.DependencyDefine,
    extension: new ArcGISDependencyDefineExtension()
  });
  ExtensionManager.getInstance().registerExtension({
    epName: extensionSpec.ExtensionPoints.DataSourceFactoryUri,
    extension: new ArcGISDataSourceFactoryUriExtension()
  });
}

/** Init store with default app config. */
export function initStore(){
  getAppStore().dispatch(appActions.updateStoreState(getInitState().merge({appConfig: getDefaultAppConfig()})))
}

export { default as mockTheme } from './lib/theme-mock';
