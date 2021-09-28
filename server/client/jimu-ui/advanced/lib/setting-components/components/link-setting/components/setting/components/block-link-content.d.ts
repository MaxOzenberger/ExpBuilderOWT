/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
import { IMLinkParam } from '../../../types';
interface Props {
    linkParam: IMLinkParam;
    originLinkParam: IMLinkParam;
    onLinkParamChange: any;
    intl: IntlShape;
    selectAreaMaxHeight?: string;
}
export default class BlockLinkContent extends React.PureComponent<Props, unknown> {
    constructor(props: any);
    componentDidMount(): void;
    getInitLinkParam: () => IMLinkParam;
    getBlockData: () => Array<{
        id: string;
        name: string;
    }>;
    setLinkParam: (newSelectItem: any) => void;
    render(): JSX.Element;
}
export {};
