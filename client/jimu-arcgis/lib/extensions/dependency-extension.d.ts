import { extensionSpec, Resource } from 'jimu-core';
export declare class ArcGISDependencyDefineExtension implements extensionSpec.DependencyDefineExtension {
    id: string;
    themeChangeObserver: any;
    getDependencyKey(): string;
    getResources(): Resource[];
    private onThemeChange;
    private removeApiThemeStyle;
    private getAPIThemeUrl;
    private checkApiUrl;
}
export declare class ArcGISDataSourceFactoryUriExtension implements extensionSpec.DataSourceFactoryUriExtension {
    id: string;
    getFactoryUri(dataSourceType: any): string;
}
