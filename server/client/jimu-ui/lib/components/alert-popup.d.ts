/// <reference types="react" />
import { React, IntlShape } from 'jimu-core';
interface Props {
    className?: string;
    isOpen?: boolean;
    title?: string;
    hideOK?: boolean;
    hideCancel?: boolean;
    toggle?: (isOk?: boolean) => void;
    okLabel?: string;
    cancelLabel?: string;
    onClickClose?: () => void;
    onClickOk?: () => void;
}
interface IntlProps {
    intl: IntlShape;
}
export declare const AlertPopup: React.ComponentType<Omit<Props & IntlProps, "intl"> & {
    forwardedRef?: React.Ref<any>;
} & {
    children?: React.ReactNode;
}>;
export {};
