/// <reference types="react" />
import { React } from 'jimu-core';
import { LinearUnit, UnitTypes, InputGroupProps } from 'jimu-ui';
export declare type InputUnitValue = LinearUnit | string;
/**
 * The InputUnit component props
 */
export interface InputUnitProps extends Omit<InputGroupProps, 'value'> {
    /**
     * Selectable units: px, rem, em, %
     * @default ['px']
     */
    units?: UnitTypes[];
    /**
     * The value of component
     * @default {distance: 0, unit: px}
     */
    value?: InputUnitValue;
    /**
     * Disable input and selection of units
     * @default false
     */
    disabled?: boolean;
    /**
     * The minimum value to accept for this input
     */
    min?: number;
    /**
     * 	The maximum value to accept for this input
     */
    max?: number;
    /**
     * Invoked when the value changes
     */
    onChange?: (value: LinearUnit, evt?: React.KeyboardEvent<HTMLInputElement>) => void;
}
export declare const _InputUnit: (props: InputUnitProps) => JSX.Element;
/**
 * A react component for outputting a value with units
 */
export declare const InputUnit: React.ComponentType<InputUnitProps>;
