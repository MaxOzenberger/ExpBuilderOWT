/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ReactRedux, IMSizeModeLayoutJson, LayoutItemConstructorProps } from 'jimu-core';
import { LayoutItemProps } from '../../types';
import { StateToLayoutItemProps } from 'jimu-layouts/layout-runtime';
interface OwnProps {
    onItemDragStart: (id: any) => void;
    onItemDragEnd: (id: any) => void;
}
interface State {
    dragoverSide: 'top' | 'bottom' | 'left' | 'right';
}
declare type GridItemProps = LayoutItemProps & StateToLayoutItemProps & OwnProps;
declare class GridItem extends React.PureComponent<GridItemProps, State> {
    fakeLayouts: IMSizeModeLayoutJson;
    constructor(props: any);
    hasEmbedLayout(): boolean;
    onItemDragStart: () => void;
    onItemDragEnd: () => void;
    onDragOver: (draggingItem: LayoutItemConstructorProps, draggingElement: HTMLElement, containerRect: ClientRect, itemRect: ClientRect, clientX: number, clientY: number) => void;
    onDrop: (draggingItem: LayoutItemConstructorProps, containerRect: ClientRect, itemRect: ClientRect, clientX: number, clientY: number) => void;
    render(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof GridItem, ReactRedux.Omit<React.ClassAttributes<GridItem> & LayoutItemProps & StateToLayoutItemProps & OwnProps, "selected" | "autoScroll" | "animationPreview" | "watchViewportVisibility" | "playMode" | "layoutItem" | "previewId"> & LayoutItemProps & OwnProps>;
export default _default;
