/// <reference types="react" />
/// <reference types="cheerio" />
import { RenderOptions, queries as _queries, RenderResult as _RenderResult } from '@testing-library/react';
import { React, ThemeVariables, IMState, I18nMessages } from 'jimu-core';
import { Store } from 'redux';
declare const queries: {
    queryAllBySelector: (...args: any[]) => HTMLElement[];
    queryBySelector: import("@testing-library/react").QueryBy<any[]>;
    getAllBySelector: import("@testing-library/react").GetAllBy<any[]>;
    getBySelector: import("@testing-library/react").GetBy<any[]>;
    findBySelector: import("@testing-library/react").FindAllBy<any[]>;
    getByLabelText: _queries.GetByText;
    getAllByLabelText: _queries.AllByText;
    queryByLabelText: _queries.QueryByText;
    queryAllByLabelText: _queries.AllByText;
    findByLabelText: _queries.FindByText;
    findAllByLabelText: _queries.FindAllByText;
    getByPlaceholderText: _queries.GetByBoundAttribute;
    getAllByPlaceholderText: _queries.AllByBoundAttribute;
    queryByPlaceholderText: _queries.QueryByBoundAttribute;
    queryAllByPlaceholderText: _queries.AllByBoundAttribute;
    findByPlaceholderText: _queries.FindByBoundAttribute;
    findAllByPlaceholderText: _queries.FindAllByBoundAttribute;
    getByText: _queries.GetByText;
    getAllByText: _queries.AllByText;
    queryByText: _queries.QueryByText;
    queryAllByText: _queries.AllByText;
    findByText: _queries.FindByText;
    findAllByText: _queries.FindAllByText;
    getByAltText: _queries.GetByBoundAttribute;
    getAllByAltText: _queries.AllByBoundAttribute;
    queryByAltText: _queries.QueryByBoundAttribute;
    queryAllByAltText: _queries.AllByBoundAttribute;
    findByAltText: _queries.FindByBoundAttribute;
    findAllByAltText: _queries.FindAllByBoundAttribute;
    getByTitle: _queries.GetByBoundAttribute;
    getAllByTitle: _queries.AllByBoundAttribute;
    queryByTitle: _queries.QueryByBoundAttribute;
    queryAllByTitle: _queries.AllByBoundAttribute;
    findByTitle: _queries.FindByBoundAttribute;
    findAllByTitle: _queries.FindAllByBoundAttribute;
    getByDisplayValue: _queries.GetByBoundAttribute;
    getAllByDisplayValue: _queries.AllByBoundAttribute;
    queryByDisplayValue: _queries.QueryByBoundAttribute;
    queryAllByDisplayValue: _queries.AllByBoundAttribute;
    findByDisplayValue: _queries.FindByBoundAttribute;
    findAllByDisplayValue: _queries.FindAllByBoundAttribute;
    getByRole: _queries.GetByRole;
    getAllByRole: _queries.AllByRole;
    queryByRole: _queries.QueryByRole;
    queryAllByRole: _queries.AllByRole;
    findByRole: _queries.FindByRole;
    findAllByRole: _queries.FindAllByRole;
    getByTestId: _queries.GetByBoundAttribute;
    getAllByTestId: _queries.AllByBoundAttribute;
    queryByTestId: _queries.QueryByBoundAttribute;
    queryAllByTestId: _queries.AllByBoundAttribute;
    findByTestId: _queries.FindByBoundAttribute;
    findAllByTestId: _queries.FindAllByBoundAttribute;
};
/** The RenderResult type */
export declare type RenderResult = _RenderResult<typeof queries>;
/** The render result type */
export declare type WithRenderResult = (ui: any, options?: RenderOptions<typeof queries>) => RenderResult;
/** The render method used to render components. */
export declare const render: WithRenderResult;
/**
 * Create a wrapper with `ThemeProvider` and `IntlProvider`.
 * @param theme
 * @param locale
 * @param messages
 */
export declare const ThemeIntlWrapper: (theme: ThemeVariables, locale: string, messages: I18nMessages) => ({ children }: {
    children: any;
}) => JSX.Element;
/**
 * Create a wrapper with `ThemeProvider`.
 * @param theme
 */
export declare const ThemeWrapper: (theme: ThemeVariables) => ({ children }: {
    children: any;
}) => JSX.Element;
/**
 * Create a wrapper with `IntlProvider`.
 * @param locale
 * @param messages
 */
export declare const IntlWrapper: (locale: string, messages: I18nMessages) => ({ children }: {
    children: any;
}) => JSX.Element;
/**
 * Create a wrapper with `ReactRedux.Provider`.
 * @param store
 */
export declare const StoreWrapper: (store: Store<IMState>) => ({ children }: {
    children: any;
}) => JSX.Element;
/**
 * Create a wrapper with `ReactRedux.Provider` and `IntlProvider`.
 * @param store
 * @param locale
 * @param messages
 */
export declare const StoreIntlWrapper: (store: Store<IMState>, locale: string, messages: I18nMessages) => ({ children }: {
    children: any;
}) => JSX.Element;
/**
 * Create a wrapper with `ReactRedux.Provider` and `ThemeProvider`.
 * @param store
 * @param theme
 */
export declare const StoreThemeWrapper: (store: Store<IMState>, theme: ThemeVariables) => ({ children }: {
    children: any;
}) => JSX.Element;
/**
 * Create a wrapper with `ReactRedux.Provider`, `ThemeProvider` and `IntlProvider`.
 * @param store
 * @param theme
 * @param locale
 * @param messages
 */
export declare const StoreThemeIntlWrapper: (store: Store<IMState>, theme: ThemeVariables, locale: string, messages: I18nMessages) => ({ children }: {
    children: any;
}) => JSX.Element;
/**
 * Create a custom render function with `ThemeProvider` and `IntlProvider`.
 * @param theme
 * @param locale
 * @param messages
 */
export declare const withThemeIntlRender: (theme?: ThemeVariables, locale?: string, messages?: I18nMessages) => WithRenderResult;
/**
 * Create a custom render function with `ThemeProvider`.
 * @param theme
 */
export declare const withThemeRender: (theme?: ThemeVariables) => WithRenderResult;
/**
 * Create a custom render function with `IntlProvider`.
 * @param locale
 * @param messages
 */
export declare const withIntlRender: (locale?: string, messages?: {}) => WithRenderResult;
/**
 * Create a custom render function with `ReactRedux.Provider`.
 * @param store
 */
export declare const withStoreRender: (store?: Store<IMState>) => WithRenderResult;
/**
 * Create a custom render function with `ReactRedux.Provider` and `IntlProvider`.
 * @param store
 * @param locale
 * @param messages
 */
export declare const withStoreIntlRender: (store?: Store<IMState>, locale?: string, messages?: I18nMessages) => WithRenderResult;
/**
 * Create a custom render function with `ReactRedux.Provider` and `ThemeProvider`.
 * @param store
 * @param theme
 */
export declare const withStoreThemeRender: (store?: Store<IMState>, theme?: ThemeVariables) => WithRenderResult;
/**
 * Create a custom render function with `ReactRedux.Provider`, `ThemeProvider` and `IntlProvider`.
 * @param store
 * @param theme
 * @param locale
 * @param messages
 */
export declare const withStoreThemeIntlRender: (store?: Store<IMState>, theme?: ThemeVariables, locale?: string, messages?: I18nMessages) => WithRenderResult;
/**
 * Used to render a widget component.
 */
export declare const widgetRender: (store?: Store<IMState>, theme?: ThemeVariables, locale?: string, messages?: I18nMessages) => WithRenderResult;
/**
 * Used to render a widget setting component.
 */
export declare const widgetSettingRender: (store?: Store<IMState>, theme?: ThemeVariables, locale?: string, messages?: I18nMessages) => WithRenderResult;
/**
 * @ignore
 * Full DOM rendering component with `ReactRedux.Provider`.
 * @param store
 * @param children
 */
export declare const mountWithStoreEnzyme: (store: Store<IMState>, children: any) => import("enzyme").ReactWrapper<any, Readonly<{}>, React.Component<{}, {}, any>>;
/**
 * @ignore
 * Shallow rendering component with `ReactRedux.Provider`.
 * @param store
 * @param children
 */
export declare const renderWithStoreEnzyme: (store: Store<IMState>, children: any) => cheerio.Cheerio;
/**
 * Create a function to run the passed function asynchronously.
 * @param timeout
 * @param useFakeTimers
 */
export declare const runFuncAsync: (timeout?: number, useFakeTimers?: boolean) => (callback: any, ...args: any[]) => Promise<unknown>;
/**
 * Return a promise to resolve a value after waiting a certain number of milliseconds.
 * @param milliseconds
 * @param value
 */
export declare const waitForMilliseconds: (milliseconds?: number, value?: any) => Promise<unknown>;
/**
 * Determine whether a component is a Class component.
 */
export declare function isClassComponent(component: any): boolean;
export {};
