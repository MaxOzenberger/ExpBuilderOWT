/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, DataSource, SqlExpressionMode, IMSqlExpression, QueryScope } from 'jimu-core';
/**
 * The SqlExpressionBuilder component props
 */
export interface SqlExpressionBuilderProps {
    /**
     * Imutable sql expression.
     * default value
     */
    expression: IMSqlExpression;
    /**
     * Selected data source.
     * Feature layers, feature layers used in web maps, and feature service URLs are supported.
     */
    dataSource: DataSource;
    /**
     * Will call the function when SQL expression is changed.
     */
    onChange: (sqlExprObj: IMSqlExpression) => void;
    /**
     * Sql expression mode, includes `ALL` and `SIMPLE` mode.
     * Default value is `ALL`.
     */
    mode?: SqlExpressionMode;
    /**
     * Decide the data sourece's filters when source type is unique or multiple.
     * Default value is `IN_CONFIG_VIEW`.
     */
    queryScope?: QueryScope;
    /**
     * Valid when queryScope is `InRuntimeView`.
     * It is used to exclude filters of the current widget, for the custom filter at runtime in the future.
     * @ignore
     */
    widgetId?: string;
    /**
     * @ignore
     */
    noScrollForList?: boolean;
    style?: React.CSSProperties;
    className?: string;
}
/**
 * @ignore
 */
interface IntlProps {
    intl: IntlShape;
}
/**
 * A component allowing users to get `sql` and `displaySQL` to query and display a certain data source, respectively.
 * The user can configure multiple clauses and clause sets with the AND/OR logic operator.
 * Every clause includes:
 *   field selector, operator selector, (data) source type selector with the default input style.
 *   Additional options: case sensitive and more input settings, with the latter including no user input, display label and ask for values options.
 */
export declare const SqlExpressionBuilder: React.ComponentType<Omit<SqlExpressionBuilderProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}>;
export default SqlExpressionBuilder;
