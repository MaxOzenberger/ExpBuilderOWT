/// <reference types="react" />
import { React, DataSource, IMFieldSchema, CodedValue, ClauseValueOptions, ClauseValuePair, IntlShape, IMThemeVariables, ImmutableArray } from 'jimu-core';
interface PredefinedProps {
    value: ClauseValueOptions;
    dataSource: DataSource;
    runtime: boolean;
    onChange: (valueObj: ClauseValueOptions) => void;
    isSmallSize?: boolean;
    isMultiple?: boolean;
    codedValues?: CodedValue[];
    fieldObj?: IMFieldSchema;
    sql?: string;
    style?: React.CSSProperties;
    className?: string;
}
/**
 * @ignore
 */
interface ExtraProps {
    theme: IMThemeVariables;
}
interface IntlProps {
    intl: IntlShape;
}
interface State {
    isValid: boolean;
    isOpen: boolean;
    value: ImmutableArray<ClauseValuePair>;
}
export declare class _VIPredefinedSelector extends React.PureComponent<PredefinedProps & ExtraProps & IntlProps, State> {
    externalDsStyle: {
        maxWidth: string;
    };
    constructor(props: any);
    i18nMessage: (id: string, values?: any) => string;
    componentDidUpdate(prevProps: PredefinedProps, prevState: State): void;
    handleToggle: (isDisplay: boolean | undefined) => void;
    handleOkBtn: () => void;
    isPredefinedValid: () => boolean;
    handleCancelBtn: () => void;
    onSettingValueChange: (values: any) => void;
    isValuesSet: () => boolean;
    onValueChangeForRuntime: (valuePairs: ClauseValuePair[]) => void;
    getValuesForRuntime: (values: any) => {
        values: any;
        codedValues: any[];
    };
    render(): JSX.Element;
}
export declare const VIPredefinedSelector: React.ComponentType<Pick<Omit<PredefinedProps & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, "children" | "forwardedRef" | keyof PredefinedProps> & {
    theme?: import("@emotion/react").Theme;
} & {
    children?: React.ReactNode;
}>;
export default VIPredefinedSelector;
