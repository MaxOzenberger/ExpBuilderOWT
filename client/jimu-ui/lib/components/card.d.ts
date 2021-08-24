/// <reference types="react" />
import { React } from 'jimu-core';
export interface CardProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactElement | React.ReactNode;
    /**
     * If true, the card will show horizontal layout
     */
    horizontal?: boolean;
    /**
     * If true, the card will be shown as selected
     */
    active?: boolean;
    /**
     * Make card behave as a button (clickable)
     */
    button?: boolean;
    [key: string]: any;
}
export declare const _Card: {
    (props: CardProps): JSX.Element;
    defaultProps: {
        horizontal: boolean;
        button: boolean;
        active: boolean;
    };
};
export declare const Card: React.ComponentType<CardProps>;
export { default as CardImg } from 'reactstrap/lib/CardImg';
export type { CardImgProps } from 'reactstrap/lib/CardImg';
export { default as CardBody } from 'reactstrap/lib/CardBody';
export type { CardBodyProps } from 'reactstrap/lib/CardBody';
export { default as CardFooter } from 'reactstrap/lib/CardFooter';
export type { CardFooterProps } from 'reactstrap/lib/CardFooter';
export { default as CardHeader } from 'reactstrap/lib/CardHeader';
export type { CardHeaderProps } from 'reactstrap/lib/CardHeader';
