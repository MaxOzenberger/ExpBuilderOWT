/// <reference types="react" />
import { React, ThemeVariables, ReactRedux } from 'jimu-core';
import { PopperProps } from 'jimu-ui';
interface SidePopperProps extends Omit<PopperProps, 'open' | 'reference' | 'position' | 'toggle'> {
    position: 'left' | 'right';
    isOpen: boolean;
    /**
     * Toggle to open/close the side popper.
     */
    toggle: () => void;
    /**
     * Element which triggers side popper.
     * Won't call `toggle` method when clicked dom is inside trigger dom.
     */
    trigger: Element;
}
interface ExtroProps {
    theme?: ThemeVariables;
    leftSidebarCollapse: boolean;
    rightSidebarCollapse: boolean;
    dispatch: any;
}
export declare const SidePopper: ReactRedux.ConnectedComponent<React.ComponentType<SidePopperProps & ExtroProps>, (ReactRedux.Omit<SidePopperProps & ExtroProps, "dispatch" | "leftSidebarCollapse" | "rightSidebarCollapse"> | ReactRedux.Omit<React.ClassAttributes<React.Component<SidePopperProps & ExtroProps, any, any>> & SidePopperProps & ExtroProps, "dispatch" | "leftSidebarCollapse" | "rightSidebarCollapse">) & SidePopperProps>;
export {};
