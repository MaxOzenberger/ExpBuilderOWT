/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, IntlShape } from 'jimu-core';
import { ThemeProps } from 'jimu-ui';
import { TreeItemInRelationType, TreeRenderOverrideItemDataType, TreeItemActionType, TreeItemBlockInfoType, TreeOverrideItemBlockInfoActionDataType, TreeExpandItemActionDataType, TreeToggleItemDetailActionDataType, TreeDragItemActionDataType, TreeInitDndActionDataType, TreeDropItemActionDataType, TreeEditingItemDataType, TreeCheckFocusItemDataType, TreeItemActionMapType, TreeCheckDropItemActionDataType, TreeActionDataType } from './tree-types';
interface IntlProps {
    intl: IntlShape;
}
/**
 * The tree-item component props.
 */
export interface TreeItemProps extends TreeItemActionMapType {
    className?: string;
    /**
     * @ignore
     */
    treeType?: string;
    dndEnabled?: boolean;
    itemJsons: TreeItemInRelationType;
    withStates?: {
        [key: string]: any;
    };
    handleAction?: <ArgT, ResT>(actionKey: TreeItemActionType, actionData: ArgT, refComponent: _TreeItem) => ResT;
    itemBlockInfo?: TreeItemBlockInfoType;
    showRemoveIconForDisabledItem?: boolean;
}
export interface TreeItemState {
}
/**
 * ```ts
 * import { TreeItem } from 'jimu-ui/basic/jimu-ui/basic/list-tree'
 * ```
 */
export declare class _TreeItem extends React.Component<TreeItemProps & ThemeProps & IntlProps, TreeItemState> {
    dropZoneInteractable: Interact.Interactable;
    dragInteractable: Interact.Interactable;
    dropZoneRef: React.RefObject<HTMLDivElement>;
    dragRef: React.RefObject<HTMLDivElement>;
    dragTriggered: boolean;
    dndInteract: any;
    intl: any;
    constructor(props: any);
    static contextType: React.Context<boolean>;
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): jsx.JSX.Element[];
    renderChildBlocks(actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem): jsx.JSX.Element[];
    static defaultHandleActionMap: TreeItemActionMapType;
    static defaultProps: {
        renderOverrideItemDraggableContainer?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemDroppableContainer?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemChildrenToggle?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemDragHandle?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemDetailToggle?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemIcon?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemTitle?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemCommands?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemMainLine?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemDetailLine?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemBody?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemContent?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItemSubitems?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        renderOverrideItem?: (actionData: TreeRenderOverrideItemDataType, refComponent: _TreeItem) => any;
        overrideItemBlockInfo?: (actionData: TreeOverrideItemBlockInfoActionDataType, refComponent: _TreeItem) => TreeItemBlockInfoType;
        handleInitTreeItemDndDropZone?: (actionData: TreeInitDndActionDataType, refComponent: _TreeItem) => void;
        handleInitTreeItemDndDrag?: (actionData: TreeInitDndActionDataType, refComponent: _TreeItem) => void;
        handleDidDrop?: (actionData: TreeDropItemActionDataType, refComponent: _TreeItem) => void;
        handleDisabledItemRemoved?: (actionData: any, refComponent: _TreeItem) => void;
        handleToggleDetail?: (actionData: TreeToggleItemDetailActionDataType, refComponent: _TreeItem) => void;
        handleExpandItem?: (actionData: TreeExpandItemActionDataType, refComponent: _TreeItem) => void;
        handleEditingTextChange?: (actionData: TreeEditingItemDataType, refComponent: _TreeItem) => void;
        handleExitEditing?: (actionData: TreeEditingItemDataType, refComponent: _TreeItem) => void;
        handleStartEditing?: (actionData: TreeEditingItemDataType, refComponent: _TreeItem) => void;
        handleFindSearchText?: (actionData: TreeActionDataType, refComponent: _TreeItem) => any;
        isItemDisplayable?: (actionData: TreeActionDataType, refComponent: _TreeItem) => boolean;
        isItemFocused?: (actionData: TreeCheckFocusItemDataType, refComponent: _TreeItem) => boolean;
        handleClickItemBody?: (actionData: TreeActionDataType, refComponent: _TreeItem) => void;
        handleClickItemTitle?: (actionData: TreeActionDataType, refComponent: _TreeItem) => void;
        handleDoubleClickItemTitle?: (actionData: TreeActionDataType, refComponent: _TreeItem) => void;
        getDragItemJsons?: (actionData: TreeDragItemActionDataType, refComponent: _TreeItem) => TreeDragItemActionDataType;
        setDragItemJsons?: (actionData: TreeDragItemActionDataType, refComponent: _TreeItem) => void;
        handleFocusItem?: (actionData: TreeActionDataType, refComponent: _TreeItem) => void;
        isItemDroppable?: (actionData: TreeCheckDropItemActionDataType, refComponent: _TreeItem) => void;
        onDidDrop?: (actionData: TreeDropItemActionDataType, refComponent: _TreeItem) => void;
        onToggleDetail?: (actionData: TreeToggleItemDetailActionDataType, refComponent: _TreeItem) => void;
        onExpandItem?: (actionData: TreeExpandItemActionDataType, refComponent: _TreeItem) => void;
        onEditingTextChange?: (actionData: TreeEditingItemDataType, refComponent: _TreeItem) => void;
        onExitEditing?: (actionData: TreeEditingItemDataType, refComponent: _TreeItem) => void;
        onClickItemBody?: (actionData: TreeActionDataType, refComponent: _TreeItem) => void;
        onDoubleClickItemTitle?: (actionData: TreeActionDataType, refComponent: _TreeItem) => void;
        onClickItemCommand?: (actionData: import("./tree-types").CommandActionDataType, refComponent: _TreeItem) => void;
        onUpdateItem?: (actionData: import("./tree-types").UpdateTreeActionDataType, refComponent: _TreeItem) => void;
        theme: {};
        className: string;
        treeType: string;
        dndEnabled: boolean;
        withStates: {};
        handleAction: (actionKey: any, actionData: any, refComponent: any) => any;
        itemBlockInfo: {
            name: TreeItemActionType;
            children: ({
                name: TreeItemActionType;
                children: {
                    name: TreeItemActionType;
                    children: ({
                        name: TreeItemActionType;
                        children?: undefined;
                    } | {
                        name: TreeItemActionType;
                        children: ({
                            name: TreeItemActionType;
                            children: {
                                name: TreeItemActionType;
                                children: {
                                    name: TreeItemActionType;
                                }[];
                            }[];
                        } | {
                            name: TreeItemActionType;
                            children?: undefined;
                        })[];
                    })[];
                }[];
            } | {
                name: TreeItemActionType;
                children?: undefined;
            })[];
        };
    };
}
/**
 * ```ts
 * import { TreeItem } from 'jimu-ui/basic/jimu-ui/basic/list-tree'
 * ```
 */
export declare const TreeItem: React.FC<Pick<Omit<any, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}, string | number | symbol> & {
    theme?: import("@emotion/react").Theme;
}>;
export {};
