/// <reference types="react" />
import { React } from 'jimu-core';
/** The type of icon prop in Icon component. */
export declare type IconType = any;
/**
 * The Icon component props
 */
export interface SVGIconProps {
    /**
     * The svg icon object. For example: `require('path.to.icon.svg')`
     */
    icon: IconType;
    /**
     * Defines the size, both width and height, of the icon.
     * If `size` is defined, `width` and `height` property will be ignored.
     * @default 16
     */
    size?: number | string;
    /**
     * Customizes the width of the icon.
     */
    width?: number | string;
    /**
     * Customizes the height of the icon.
     */
    height?: number | string;
    /**
     * Defines the class names added to the element.
     */
    className?: string;
    /**
     * Defines the inline CSS style properties.
     */
    style?: React.CSSProperties;
    /**
     * Defines the `fill` color of the icon.
     * Only effective when the icon is an svg element and the `fill` property on its children are unset or set to `currentColor`.
     */
    color?: string;
    /**
     * Rotates the icon by a given degree.
     */
    rotate?: number | string;
    /**
     * Flips the icon, horizontal or vertical.
     */
    flip?: 'horizontal' | 'vertical';
    /**
     * Extra options:
     * `currentColor`: if set to `true`, the `stroke` and `fill` properties on the child elements will be replaced with `currentColor`,
     * in order to make `color` property effective.
     * @default { currentColor: true }
     */
    options?: {
        currentColor?: boolean;
    };
    /**
     * Flips the icon automatically, if the locale is following right-to-left (RTL).
     */
    autoFlip?: boolean;
    /**
     * The title of the icon and aria-label.
     * If displayed as a image, the `title` is used as `alt`.
     */
    title?: string;
    /**
     * Indicates whether the element is exposed to an accessibility API.
     * @default false
     */
    'aria-hidden'?: boolean;
}
interface SVGIconState {
    iconSrc: IconType;
}
/**
 * The `Icon` component is designed for svg icons display, but also supports PNG, JPG, ICO.
 *
 * SVG icons are shown as inline SVG elements in the component, while icons in other formats can be loaded using data url.
 *
 * ```ts
 * import { Icon } from 'jimu-ui'
 * ```
 */
export declare class _Icon extends React.PureComponent<SVGIconProps, SVGIconState> {
    svgUrlTester: RegExp;
    __unmount: boolean;
    static defaultProps: Partial<SVGIconProps>;
    constructor(props: any);
    componentDidMount(): void;
    componentDidUpdate(prevProps: SVGIconProps): void;
    componentWillUnmount(): void;
    fetchSvgByUrl: (url: string) => Promise<string>;
    isIconFromUrl(iconSrc: IconType): boolean;
    extractSvgSrc(iconSrc: IconType): any;
    render(): JSX.Element;
}
/**
 * The `Icon` component is designed for svg icons display, but also supports PNG, JPG, ICO.
 *
 * SVG icons are shown as inline SVG elements in the component, while icons in other formats can be loaded using data url.
 *
 * ```ts
 * import { Icon } from 'jimu-ui'
 * ```
 */
export declare const Icon: React.ComponentType<SVGIconProps>;
export {};
