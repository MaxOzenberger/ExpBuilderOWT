/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IntlShape, ImmutableObject, WidgetJson, ReactRedux } from 'jimu-core';
export declare enum DataSourceRemoveWaringReason {
    /**
     * Data source is removed.
     */
    DataSourceRemoved = "DATA_SOURCE_REMOVED",
    /**
     * Source widget of output data source is removed.
     */
    SourceWidgetRemoved = "SOURCE_WIDGET_REMOVED"
}
interface DataSourceRemoveWarningProps {
    /**
     * Reasons why need to show the warning popup.
     */
    reason: DataSourceRemoveWaringReason;
    /**
     * If `dataSourceId` is passed in, will list all widgets related to the data source and ignore `widgetId`.
     * Must pass in one of `dataSourceId` and `widgetId`.
     */
    dataSourceId?: string;
    /**
     * If `widgetId` is passed in, will list all widgets related to output data sources of the widget.
     * Please note that this props can be superseded by `dataSourceId`.
     * Must pass in one of `dataSourceId` and `widgetId`.
     */
    widgetId?: string;
    /**
     * Label of the removed data source/source widget.
     * If do not pass in the props, will use data source label or widget label.
     */
    label?: string;
    isOpen: boolean;
    className?: string;
    toggle: () => void;
    /**
     * Will call this function after removing data source/source widget and related widgets.
     */
    afterRemoving?: () => void;
    /**
     * Will call this function before removing data source/source widget and related widgets.
     */
    beforeRemoving?: () => void;
}
interface ExtraProps {
    intl: IntlShape;
}
interface StateToProps {
    widgets: ImmutableObject<{
        [widgetId: string]: WidgetJson;
    }>;
}
interface State {
    selectedWidgets: string[];
    getAppConfigAction: any;
    proxySettingUtils: any;
}
declare class _DataSourceRemoveWarningPopup extends React.PureComponent<DataSourceRemoveWarningProps & ExtraProps & StateToProps, State> {
    __unmount: boolean;
    constructor(props: any);
    componentDidMount(): void;
    componentWillUnmount(): void;
    onCloseRemoveOptions: (e: any) => void;
    onCheckboxBtnClick: (selected: any, e: any) => void;
    onRemove: (e: any) => Promise<void>;
    stopPropagation: (e: any) => void;
    render(): jsx.JSX.Element;
}
export declare const DataSourceRemoveWarningPopup: React.FC<import("react-intl").WithIntlProps<ReactRedux.Omit<React.ClassAttributes<_DataSourceRemoveWarningPopup> & DataSourceRemoveWarningProps & ExtraProps & StateToProps, "widgets"> & DataSourceRemoveWarningProps>> & {
    WrappedComponent: React.ComponentType<ReactRedux.Omit<React.ClassAttributes<_DataSourceRemoveWarningPopup> & DataSourceRemoveWarningProps & ExtraProps & StateToProps, "widgets"> & DataSourceRemoveWarningProps>;
};
export {};
