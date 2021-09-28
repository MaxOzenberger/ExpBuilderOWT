/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, IMSqlExpression, DataSource, SqlExpressionMode } from 'jimu-core';
/**
 * The SqlExpressionBuilderPopup component props
 */
export interface SqlExpressionBuilderPopupProps {
    /**
     * Sql expression mode, includes `ALL` and `SIMPLE` mode.
     * Default value is `ALL`.
     */
    mode?: SqlExpressionMode;
    /**
     * Immutable sql expression.
     */
    expression: IMSqlExpression;
    /**
     * Selected data source.
     * Feature layers, feature layers used in web maps, and feature service URLs are supported.
     */
    dataSource: DataSource;
    /**
     * Whether the popup is open.
     */
    isOpen: boolean;
    /**
     * Will call the function when toggling the popup.
     */
    toggle: (isOpen?: boolean) => void;
    /**
     * Will call the function when the popup is closed and SQL expression is changed.
     */
    onChange: (expression: IMSqlExpression) => void;
    /**
     * @ignore
     */
    className?: string;
}
interface IntlProps {
    intl: IntlShape;
}
/**
 * A component that provides a modal to get `sql` and `displaySQL` to query and display a certain data source, respectively.
 * The user can configure multiple clauses and clause sets with the AND/OR logic operator.
 * Every clause includes:
 *   field selector, operator selector, (data) source type selector with the default input style.
 *   Additional options: case sensitive and more input settings, with the latter including no user input, display label and ask for values options.
 */
export declare const SqlExpressionBuilderPopup: React.FC<Pick<Omit<SqlExpressionBuilderPopupProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, "children" | keyof SqlExpressionBuilderPopupProps | "forwardedRef"> & {
    theme?: import("@emotion/react").Theme;
}>;
export default SqlExpressionBuilderPopup;
