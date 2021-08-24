/// <reference types="react" />
/** @jsx jsx */
import { React, IntlShape, ImmutableObject, ProxyJson, ThemeVariables, ReactRedux } from 'jimu-core';
export interface ProxySettingPopupProps {
    isOpen: boolean;
    className?: string;
    onFinish: () => Promise<void>;
    onCancel: () => void;
    onToggle: () => void;
}
interface ExtraProps {
    intl: IntlShape;
    theme: ThemeVariables;
}
interface StateToProps {
    appProxies: ImmutableObject<{
        [proxyId: string]: ProxyJson;
    }>;
}
export declare const ProxySettingPopup: ReactRedux.ConnectedComponent<React.FC<import("react-intl").WithIntlProps<Pick<ProxySettingPopupProps & ExtraProps & StateToProps, "appProxies" | "intl" | keyof ProxySettingPopupProps> & {
    theme?: import("@emotion/react").Theme;
} & {
    children?: React.ReactNode;
}>> & {
    WrappedComponent: React.ComponentType<Pick<ProxySettingPopupProps & ExtraProps & StateToProps, "appProxies" | "intl" | keyof ProxySettingPopupProps> & {
        theme?: import("@emotion/react").Theme;
    } & {
        children?: React.ReactNode;
    }>;
}, ReactRedux.Omit<import("react-intl").WithIntlProps<Pick<ProxySettingPopupProps & ExtraProps & StateToProps, "appProxies" | "intl" | keyof ProxySettingPopupProps> & {
    theme?: import("@emotion/react").Theme;
} & {
    children?: React.ReactNode;
}>, "appProxies"> & ProxySettingPopupProps>;
export {};
