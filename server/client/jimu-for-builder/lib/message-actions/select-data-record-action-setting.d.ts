/// <reference types="seamless-immutable" />
/// <reference types="react" />
/** @jsx jsx */
import { React, ActionSettingProps, ImmutableObject, IMDataSourceInfo, ThemeVariables, Immutable, DataSourceJson, ReactRedux } from 'jimu-core';
import { IMConfig } from './type';
interface StateExtraProps {
    dataSources: ImmutableObject<{
        [dsId: string]: DataSourceJson;
    }>;
    dataSourcesInfo: ImmutableObject<{
        [dsId: string]: IMDataSourceInfo;
    }>;
}
interface ExtraProps {
    theme?: ThemeVariables;
}
declare const _default: ReactRedux.ConnectedComponent<React.FC<Pick<Pick<ActionSettingProps<IMConfig> & ExtraProps & StateExtraProps, "theme" | "intl" | "widgetId" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn" | keyof StateExtraProps> & Partial<Pick<ActionSettingProps<IMConfig> & ExtraProps & StateExtraProps, "config">> & Partial<Pick<{
    config: Immutable.ImmutableObject<{
        messageUseDataSource: any;
        actionUseDataSource: any;
        sqlExprObj: any;
        enabledDataRelationShip: boolean;
    }>;
}, never>>, "intl" | "widgetId" | "config" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn" | keyof StateExtraProps> & {
    theme?: import("@emotion/react").Theme;
}>, ReactRedux.Omit<Pick<Pick<ActionSettingProps<IMConfig> & ExtraProps & StateExtraProps, "theme" | "intl" | "widgetId" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn" | keyof StateExtraProps> & Partial<Pick<ActionSettingProps<IMConfig> & ExtraProps & StateExtraProps, "config">> & Partial<Pick<{
    config: Immutable.ImmutableObject<{
        messageUseDataSource: any;
        actionUseDataSource: any;
        sqlExprObj: any;
        enabledDataRelationShip: boolean;
    }>;
}, never>>, "intl" | "widgetId" | "config" | "onSettingChange" | "actionId" | "messageWidgetId" | "messageType" | "onDisableDoneBtn" | keyof StateExtraProps> & {
    theme?: import("@emotion/react").Theme;
}, "dataSourcesInfo" | "dataSources"> & ActionSettingProps<IMConfig>>;
export default _default;
