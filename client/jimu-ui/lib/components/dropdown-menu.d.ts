/// <reference types="react" />
import { React } from 'jimu-core';
import { Modifiers, PositioningStrategy } from './overlay/popper';
/**
 * The DropdownMenu component props
 *
 * Inherits properties from the `HTMLElement`.
 *
 * See [additional props available from HTMLElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement).
 */
export interface DropdownMenuProps extends React.HTMLAttributes<HTMLElement> {
    /**
     * Whether to put dropdown menu to body by ReactDOM.createPortal
     *
     * @default true
     */
    appendToBody?: boolean;
    /**
     * Left align, right align, or center align the menu to its container.
     */
    alignment?: 'start' | 'end' | 'center';
    /**
     * `modifier` options from Popper.js.
     * See [the modifiers documentation](https://github.com/FezVrasta/popper.js/blob/master/docs/_includes/popper-documentation.md#modifiers--object).
     */
    modifiers?: Modifiers;
    /**
     * Describes the positioning strategy to use. By default, it is absolute,
     * which in the simplest cases does not require repositioning of the popper
     * If your reference element is in a fixed container, use the fixed strategy
     */
    strategy?: PositioningStrategy;
    /**
     * If `true`, the menu will show an arrow pointer.
     */
    showArrow?: boolean;
    /**
     * If `true`, the placement of the menu will be flipped in right-to-left (RTL) mode.
     *
     * @default true
     */
    flip?: boolean;
    /**
     * Custom html element to be used as a menu's container.
     *
     * @default div
     */
    tag?: React.ElementType;
    /**
     * Custom z-index CSS property.
     * Effective only when `appendTo` is `parent`.
     */
    zIndex?: string;
    /**
     * Custom max-height CSS property.
     * The unit is pixel.
     */
    maxHeight?: number;
    /**
     * The offset modifier to shift the dropdown menu on both its axis.
     * To learn how to use offset, [modifiers.offset documentation](https://popper.js.org/docs/v2/modifiers/popper-offsets/).
     */
    offset?: number[];
    /**
     * When the value changes, it will try to rebind the keyboard event to the focusable nodes in the component.
     * Note: `-1` means not to enable event binding.
     * @default 0
     */
    a11yVersion?: number;
}
/**
 * The `DropdownMenu` component is a menu container of a `Dropdown` control. It displays a list of options on a temporary popper component.
 *
 * Please use this component together with `Dropdown`, `DropdownButton` and `DropdownItem`.
 *
 * ```ts
 * import { DropdownMenu } from 'jimu-ui'
 * ```
 */
export declare class _DropdownMenu extends React.PureComponent<DropdownMenuProps> {
    static defaultProps: DropdownMenuProps;
    static contextType: React.Context<{}>;
    handleRef: (tagRef: any) => void;
    render(): JSX.Element;
}
/**
 * The `DropdownMenu` component is a menu container of a `Dropdown` control. It displays a list of options on a temporary popper component.
 *
 * Please use this component together with `Dropdown`, `DropdownButton` and `DropdownItem`.
 *
 * ```ts
 * import { DropdownMenu } from 'jimu-ui'
 * ```
 */
export declare const DropdownMenu: React.ComponentType<DropdownMenuProps>;
