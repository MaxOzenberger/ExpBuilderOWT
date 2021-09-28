/// <reference types="react" />
/** @jsx jsx */
import { React, IMFieldSchema, DataSource, ImmutableArray, ImmutableObject, IntlShape, JimuFieldType, IMThemeVariables } from 'jimu-core';
import { SelectProps } from 'jimu-ui';
interface FieldSelectorInnerProps {
    dataSources: DataSource[];
    types?: ImmutableArray<JimuFieldType>;
    selectedFields?: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>;
    hiddenFields?: ImmutableArray<string> | ImmutableObject<{
        [dataSourceId: string]: string[];
    }>;
    isDataSourceDropDownHidden?: boolean;
    isSearchInputHidden?: boolean;
    useMultiDropdownBottomTools?: boolean;
    isSelectedFromRepeatedDataSourceContext?: boolean;
    useDropdown?: boolean;
    isMultiple?: boolean;
    placeholder?: string;
    dropdownProps?: SelectProps;
    widgetId?: string;
    useSelectionDataView?: boolean;
    usePopulatedDataView?: boolean;
    noSelectionItem?: {
        name: string;
    };
    className?: string;
    style?: React.CSSProperties;
    onChange?: (allSelectedFields: IMFieldSchema[], ds: DataSource, isSelectedFromRepeatedDataSourceContext: boolean) => void;
    getDefaultField?: (field: IMFieldSchema | {
        [dataSourceId: string]: IMFieldSchema;
    }) => void;
}
interface ExtraProps {
    intl: IntlShape;
    theme: IMThemeVariables;
}
export declare const FieldSelectorInner: React.FC<import("react-intl").WithIntlProps<Pick<FieldSelectorInnerProps & ExtraProps, "intl" | keyof FieldSelectorInnerProps> & {
    theme?: import("@emotion/react").Theme;
} & {
    children?: React.ReactNode;
}>> & {
    WrappedComponent: React.ComponentType<Pick<FieldSelectorInnerProps & ExtraProps, "intl" | keyof FieldSelectorInnerProps> & {
        theme?: import("@emotion/react").Theme;
    } & {
        children?: React.ReactNode;
    }>;
};
export {};
