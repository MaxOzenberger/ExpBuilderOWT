/// <reference types="react" />
import { React } from 'jimu-core';
import { ButtonProps } from './button';
/**
 * The DropdownButton component props.
 */
export interface DropdownButtonProps extends ButtonProps {
    /**
     * If `true`, an arrow icon will be shown at the end of the button.
     * The icon can be customized by assigning the property with an element instead.
     * @default true
     */
    arrow?: boolean | React.ReactElement;
}
/**
 * The `DropdownButton` component is a button element in a `Dropdown` component to toggle the dropdown menu.
 *
 * Please use this component together with `Dropdown`, `DropdownMenu` and `DropdownItem`.
 *
 * ```ts
 * import { DropdownButton } from 'jimu-ui'
 * ```
 */
export declare class _DropdownButton extends React.PureComponent<DropdownButtonProps> {
    static contextType: React.Context<{}>;
    static defaultProps: Partial<DropdownButtonProps>;
    constructor(props: any);
    onClick(e: any): void;
    render(): JSX.Element;
}
/**
 * The `DropdownButton` component is a button element in a `Dropdown` component to toggle the dropdown menu.
 *
 * Please use this component together with `Dropdown`, `DropdownMenu` and `DropdownItem`.
 *
 * ```ts
 * import { DropdownButton } from 'jimu-ui'
 * ```
 */
export declare const DropdownButton: React.ComponentType<DropdownButtonProps>;
