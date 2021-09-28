/// <reference types="react" />
/** @jsx jsx */
import { React, jsx, ThemeVariables } from 'jimu-core';
import { Placement, PopperProps } from 'jimu-ui';
import { ColorItem, PickerBlockProps } from '../color-components';
/**
 * The ThemeColorPicker component props.
 */
export interface ThemeColorPickerProps {
    /**
     * @ignore
     */
    pickerBlockProps?: Partial<PickerBlockProps>;
    /**
     * @ignore
     */
    popperProps?: Partial<Omit<PopperProps, 'placement' | 'showArrow' | 'offset'>>;
    /**
     * The color value of this component.
     */
    value?: string;
    /**
     * The placement of the pop-up of this component.
     * @default bottom
     */
    placement?: Placement;
    /**
     * Whether to show arrow of popper
     * @default true
     */
    showArrow?: boolean;
    /**
     * The offset modifier can shift your popper on both its axes.
     */
    offset?: number[];
    /**
     * Callback fired when the value is changed.
     * @event
     */
    onChange?: (color: string) => void;
    /**
     * Callback fired when a picker block is clicked.
     * @event
     */
    onClick?: (evt: React.MouseEvent<HTMLDivElement>) => void;
    /**
     * Predefined standard colors.
     */
    presetColors?: ColorItem[];
    /**
     * Default: true
     *
     * Indicates whether to display the colors of the organization shared theme.
     */
    showSharedColors?: boolean;
    /**
     * Default: The theme in the theme context
     *
     * The theme to get colors.
     */
    specificTheme?: ThemeVariables;
    /**
     * The className property is used to set the custom className of this component.
     */
    className?: string;
    /**
     * The style property is used to set the custom style of this component.
     */
    style?: React.CSSProperties;
    /**
     * If `true`, transparency is not allowed.
     */
    disableAlpha?: boolean;
}
/**
 * The `ThemeColorPicker` component provides the user the ability to choose standard colors and theme colors.
 *
 * ```ts
 * import { ThemeColorPicker } from 'jimu-ui/basic/color-picker'
 * ```
 */
export declare const ThemeColorPicker: (props: ThemeColorPickerProps) => jsx.JSX.Element;
