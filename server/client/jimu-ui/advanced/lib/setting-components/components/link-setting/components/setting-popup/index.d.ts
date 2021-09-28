/// <reference types="react" />
import { React, ImmutableArray, IntlShape, ThemeVariables, UseDataSource, LinkType } from 'jimu-core';
import { IMLinkParam } from '../../types';
/**
 * The LinkSettingPopup props
 */
export interface LinkSettingPopupProps {
    /**
     * The setting result
     */
    linkParam?: IMLinkParam;
    /**
     * Callback when cancel setting
     */
    onSettingCancel?: () => void;
    /**
     * Callback when confirm setting
     */
    onSettingConfirm?: (linkParam: IMLinkParam) => void;
    /**
     * Whether to show the setting popup
     */
    isOpen?: boolean;
    /**
     * Element which triggers the popper.
     * Won't call `toggle` method when clicked dom is inside trigger dom.
     */
    trigger: Element;
    /**
     * @ignore
     * @deprecated
     * Same with `isOpen`
     */
    showDialog?: boolean;
    /**
     * @ignore
     */
    intl: IntlShape;
    /**
     * Use widget id to get widget context, e.g. whether widget is in repeated data source context.
     */
    widgetId?: string;
    /**
     * @ignore
     */
    isLinkPageSetting?: boolean;
    /**
     * @ignore
     */
    useDataSources?: ImmutableArray<UseDataSource>;
    /**
     * The popup shows next to left panel of builder or right panel of builder
     */
    pisition?: 'right' | 'left';
    /**
     * The title of the popup
     */
    title?: string;
    /**
     * Hide some types of link
     */
    hiddenLinks?: ImmutableArray<LinkType>;
}
/**
 * A component to set link, such as link to a view, a page or url
 */
export declare const LinkSettingPopup: React.FC<import("react-intl").WithIntlProps<Pick<LinkSettingPopupProps & {
    theme: ThemeVariables;
}, keyof LinkSettingPopupProps> & {
    theme?: import("@emotion/react").Theme;
}>> & {
    WrappedComponent: React.ComponentType<Pick<LinkSettingPopupProps & {
        theme: ThemeVariables;
    }, keyof LinkSettingPopupProps> & {
        theme?: import("@emotion/react").Theme;
    }>;
};
