/// <reference types="react" />
/** @jsx jsx */
import { React, ThemeVariables } from 'jimu-core';
export interface EditableInputProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    placeholder?: string;
    label?: string;
    hideLabel?: boolean;
    value?: number;
    arrowOffset?: number;
    max?: number;
    onChange?: (value: any) => void;
}
interface ExtraProps {
    theme?: ThemeVariables;
}
export declare const EditableInput: React.FC<Pick<Pick<EditableInputProps & ExtraProps, "theme"> & Partial<Pick<EditableInputProps & ExtraProps, keyof EditableInputProps>> & Partial<Pick<Partial<EditableInputProps>, never>>, keyof EditableInputProps> & {
    theme?: import("@emotion/react").Theme;
}>;
export {};
