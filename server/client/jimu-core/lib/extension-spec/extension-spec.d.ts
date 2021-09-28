/// <reference types="react" />
import { AppConfig } from '../types/app-config';
import { WidgetProps } from '../types/props';
import { IMState } from '../types/state';
import { Resource } from '../types/common';
import { LayoutContextToolProps, LayoutTransformFunc, LayoutItemTransformFunc } from '../types/layout';
import { WidgetManifest } from '../types/manifest';
/**
 * Extension points allow a widget to run code at certain specific times of the Experience Builder application lifecycle. The extension points supported by the Jimu framework are defined here.
 */
export declare enum ExtensionPoints {
    /**
     * The process function of the `AppConfigProcessor` extension point will be invoked after the app config is loaded.
     * Pass the loaded app config into this extension and this extension will return the processed app config.
     *
     * The class for this extension should implement the `AppConfigProcessorExtension` interface.
     */
    AppConfigProcessor = "APP_CONFIG_PROCESSOR",
    /**
     * @ignore
     * The extension for the `WidgetClassWrapper` extension point will be invoked after the widget class is loaded and core props have been injected.
     *
     * The class for this extension should implement the `IWidgetClassWrapperExtension` interface.
     */
    WidgetClassWrapper = "WIDGET_CLASS_WRAPPER",
    /**
     * @ignore
     * The `AppConfigService` extension point is used to get the config service, which is used to save and load the app config.
     *
     * The class for this extension should implement the `IAppConfigServiceExtension` interface.
     */
    AppConfigService = "APP_CONFIG_SERVICE",
    /**
     * A redux-based application has only one store. If a widget needs to use redux to manage its state, it can use the `ReduxStore` extension to extend the redux store.
     *
     * The class for this extension should implement the `ReduxStoreExtension` interface.
     */
    ReduxStore = "REDUX_STORE",
    /**
     * The `DependencyDefine` extension point is used to include third-party libraries.
     * Usually the `dependency` property of the widget manifest should be used to load third-party libraries instead of this extension point.
     * This extension point can be used as an alternative in case where the third-party library requires initialization.
     *
     * The class for this extension should implement the `DependencyDefine` interface.
     */
    DependencyDefine = "DEPENDENCY_DEFINE",
    /**
     * @ignore
     * The `DataSourceFactoryUri` extension point is used to find the data source factory.
     * Because ds factory is heavy so app can't load all ds factories.
     * So, we define this extension and app will load all of these extensions and use this extension to load factory.
     */
    DataSourceFactoryUri = "DATA_SOURCE_FACTORY_URI",
    /**
     * The `ContextTool` extension point allows the developer to add additional tools to the context toolbar that shows when the widget is selected in the builder interface.
     *
     * The class for this extension should implement the the `ContextTool` interface.
     */
    ContextTool = "CONTEXT_TOOL",
    /** @ignore */
    LayoutTransformer = "LAYOUT_TRANSFORMER"
}
/**
 * The extension points that support multiple extensions.
 */
export declare const EP_SUPPORT_MULTIPLE_EXTENSIONS: ExtensionPoints[];
/**
 * Base extension interface
 */
export interface BaseExtension {
    /**
     * If an extension point supports multiple extensions, the index is used to determine the extension order.
     */
    index?: number;
    /**
     * The unique id. For widget's provided extension, the id pattern is: widgetId + extensionName
     */
    id: string;
    /** The extension name. */
    name?: string;
    label?: string;
    /**
     * The widget id that provides the extension. No widget id means the extension is provided by Jimu.
     */
    widgetId?: string;
    destroy?: () => void;
}
export declare class DummyExtension implements BaseExtension {
    index?: number;
    id: string;
    name?: string;
    widgetId?: string;
    label?: string;
}
/**
 * The extension interface for AppConfigProcessor extension point.
 */
export interface AppConfigProcessorExtension extends BaseExtension {
    /** The method to process the app config. */
    process: (appConfig: AppConfig) => Promise<AppConfig>;
}
export interface WidgetClassWrapperExtension extends BaseExtension {
    wrap: (WidgetClass: React.ComponentType<WidgetProps>, manifest: WidgetManifest) => React.ComponentClass<WidgetProps>;
}
export interface AppConfigServiceExtension extends BaseExtension {
    loadAppConfig: () => Promise<AppConfig>;
}
/**
 * The extension interface for ReduxStore extension point.
 */
export interface ReduxStoreExtension extends BaseExtension {
    /** The method that returns the redux actions. */
    getActions: () => string[];
    /**
     * The method that returns the redux store key. The key supports this format: a.b.c.
     */
    getStoreKey: () => string;
    /** The method that returns the redux initial store state. */
    getInitLocalState: () => any;
    /**
     * The method that returns the redux reducer. The reducer should return local state.
     */
    getReducer: () => (localState: any, action: any, state: IMState) => any;
}
/**
 * The extension interface for DependencyDefine extension point.
 */
export interface DependencyDefineExtension extends BaseExtension {
    /** Return the dependency key. */
    getDependencyKey: () => string;
    /** Return the resources. */
    getResources: () => Resource[];
}
export interface DataSourceFactoryUriExtension extends BaseExtension {
    getFactoryUri: (dataSourceType: any) => string;
}
/**
 * The extension interface for ContextTool extension point.
 */
export interface ContextToolExtension extends BaseExtension {
    /** Return group id. */
    getGroupId: () => string;
    /** Return the icon. */
    getIcon: () => React.ComponentClass<React.SVGAttributes<SVGElement>>;
    /** Return the title. */
    getTitle: () => string;
    /** OnClick callback. */
    onClick?: (props: LayoutContextToolProps, evt?: React.MouseEvent<any>) => void;
    /** Check whether this tool is visible. */
    visible?: (props: LayoutContextToolProps) => boolean;
    /** Check whether this tool is checked. */
    checked?: (props: LayoutContextToolProps) => boolean;
    /** Check whether this tool is disabled. */
    disabled?: (props: LayoutContextToolProps) => boolean;
    /**
     * The setting panel of the tool. Returning null means there is no setting panel for the tool. If the returned value is not null, the setting panel will be rendered.
     */
    getSettingPanel: (props: LayoutContextToolProps) => React.ComponentClass<unknown>;
}
export interface LayoutTransformerExtension extends BaseExtension {
    layoutType: string;
    transformLayout: LayoutTransformFunc;
    transformLayoutItem: LayoutItemTransformFunc;
}
