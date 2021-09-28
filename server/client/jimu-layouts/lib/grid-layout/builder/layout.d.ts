/// <reference types="react" />
/** @jsx jsx */
import { React, ReactRedux, LayoutItemConstructorProps } from 'jimu-core';
import { LayoutProps, StateToLayoutProps } from 'jimu-layouts/layout-runtime';
import { DropHandlers } from '../../builder/types';
declare class GridLayout extends React.PureComponent<LayoutProps & StateToLayoutProps> implements DropHandlers {
    constructor(props: any);
    handleDragOver(): void;
    handleDragEnter(): void;
    handleDragLeave(): void;
    handleDrop(draggingItem: LayoutItemConstructorProps, containerRect: ClientRect, itemRect: ClientRect): void;
    render(): JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof GridLayout, ReactRedux.Omit<React.ClassAttributes<GridLayout> & LayoutProps & StateToLayoutProps, "browserSizeMode" | "mainSizeMode" | "layout"> & LayoutProps>;
export default _default;
