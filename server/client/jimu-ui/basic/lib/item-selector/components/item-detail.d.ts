/// <reference types="react" />
/** @jsx jsx */
import { React } from 'jimu-core';
import { IItem } from '@esri/arcgis-rest-types';
/**
 * The ItemDetail props
 */
export interface ItemDetailProps {
    /**
     * Portal [item](https://developers.arcgis.com/rest/users-groups-and-items/item.htm)
     */
    item: IItem;
    portalUrl: string;
    style?: React.CSSProperties;
    className?: string;
    onClose: () => void;
}
/**
 * A component to show the detail of a portal [item](https://developers.arcgis.com/rest/users-groups-and-items/item.htm)
 */
export declare const ItemDetail: React.ComponentType<Omit<any, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}>;
export default ItemDetail;
