/// <reference types="seamless-immutable" />
/// <reference types="react" />
import { React, FieldSchema, IMFieldSchema, DataSource, Immutable, ImmutableArray, ImmutableObject, IMThemeVariables, ClauseValuePair } from 'jimu-core';
import { SelectProps } from 'jimu-ui';
interface Props {
    theme: IMThemeVariables;
    fields: ImmutableObject<{
        [jimuName: string]: FieldSchema;
    }>;
    ds: DataSource;
    placeholder?: string;
    dropdownProps?: SelectProps;
    selectedFields?: ImmutableArray<string>;
    isMultiple?: boolean;
    useMultiDropdownBottomTools?: boolean;
    isSearchInputHidden?: boolean;
    onFieldClick: (clickedFields: IMFieldSchema[]) => void;
}
interface States {
    fields: any;
}
export default class MultipleDropdownList extends React.PureComponent<Props, States> {
    constructor(props: any);
    componentDidUpdate(prevProps: Props, prevStates: States): void;
    onChange: (selectedFieldPairs: ClauseValuePair[]) => void;
    getFields: () => any[];
    getSelectedFields: () => Immutable.ImmutableArray<ClauseValuePair>;
    render(): JSX.Element;
}
export {};
