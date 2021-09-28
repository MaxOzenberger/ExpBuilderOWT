/// <reference types="react" />
/** @jsx jsx */
import { React, PageJson, ImmutableObject, ReactRedux, jsx, BrowserSizeMode, IMThemeVariables, IMHeaderJson, IMFooterJson, IMDialogJson } from 'jimu-core';
import { PageContextProps } from '../builder/page-context';
interface PageProps {
    dialogId?: string;
    /**
     * store pages that have been rendered
     *
     * Only one page will be visible, all other pages will be hidden
     *  */
    pageStatus: ImmutableObject<{
        [pageId: string]: boolean;
    }>;
}
interface StateToProps {
    pages: ImmutableObject<{
        [pageId: string]: PageJson;
    }>;
    header: IMHeaderJson;
    headerVisible?: boolean;
    footer: IMFooterJson;
    footerVisible?: boolean;
    browserSizeMode: BrowserSizeMode;
    mainSizeMode: BrowserSizeMode;
    theme: IMThemeVariables;
    splashDialogJson: IMDialogJson;
    isSplashClosed: boolean;
    pageDialogId: string;
    pageDialogJson: IMDialogJson;
    isPageDlgClosed: boolean;
    urlDialogJson: IMDialogJson;
}
declare class PageRenderer extends React.PureComponent<PageProps & StateToProps> {
    static displayName: string;
    pageContext: PageContextProps;
    pageRef: HTMLElement;
    constructor(props: any);
    componentDidUpdate(prevProps: PageProps): void;
    render(): jsx.JSX.Element;
    renderHeader(): jsx.JSX.Element;
    renderFooter(): jsx.JSX.Element;
    renderPageBody(renderedPageId: string, theme: IMThemeVariables): jsx.JSX.Element;
    renderDialog(): jsx.JSX.Element;
}
declare const _default: ReactRedux.ConnectedComponent<typeof PageRenderer, ReactRedux.Omit<React.ClassAttributes<PageRenderer> & PageProps & StateToProps, "header" | "footer" | "browserSizeMode" | "theme" | "mainSizeMode" | "pages" | "headerVisible" | "footerVisible" | "splashDialogJson" | "isSplashClosed" | "pageDialogId" | "pageDialogJson" | "isPageDlgClosed" | "urlDialogJson"> & PageProps>;
export default _default;
