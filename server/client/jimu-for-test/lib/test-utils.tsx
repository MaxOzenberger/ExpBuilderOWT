import { render as _render, RenderOptions, queries as _queries, RenderResult as _RenderResult } from '@testing-library/react'
import { React, IntlProvider, ThemeVariables, IMState, ReactRedux, getAppStore, ThemeProvider, I18nMessages, utils, IMThemeVariables } from 'jimu-core'
import { Store } from 'redux'
import { mount, render as enzymeRender } from 'enzyme';
import * as customQueries from './custom-queries'
const queries = { ..._queries, ...customQueries }

import mockTheme from './theme-mock';

/** The RenderResult type */
export type RenderResult = _RenderResult<typeof queries>

/** The render result type */
export type WithRenderResult = (ui: any, options?: RenderOptions<typeof queries>) => RenderResult;

/** The render method used to render components. */
export const render: WithRenderResult = (ui, options) => _render<typeof queries>(ui, { queries, ...options });

/**
 * Create a wrapper with `ThemeProvider` and `IntlProvider`.
 * @param theme
 * @param locale
 * @param messages
 */
export const ThemeIntlWrapper = (theme: ThemeVariables, locale: string, messages: I18nMessages) => {
  return ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
      </ThemeProvider>
    )
  }
}

/**
 * Create a wrapper with `ThemeProvider`.
 * @param theme
 */
export const ThemeWrapper = (theme: ThemeVariables) => {
  return ({ children }) => {
    return (
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    )
  }
}

/**
 * Create a wrapper with `IntlProvider`.
 * @param locale
 * @param messages
 */
export const IntlWrapper = (locale: string, messages: I18nMessages) => {
  return ({ children }) => {
    return (
      <IntlProvider locale={locale} messages={messages}>
        {children}
      </IntlProvider>
    )
  }
}

/**
 * Create a wrapper with `ReactRedux.Provider`.
 * @param store
 */
export const StoreWrapper = (store: Store<IMState>) => {
  return ({ children }) => {
    return (
      <ReactRedux.Provider store={store}>
        {children}
      </ReactRedux.Provider>
    )
  }
}

/**
 * Create a wrapper with `ReactRedux.Provider` and `IntlProvider`.
 * @param store
 * @param locale
 * @param messages
 */
export const StoreIntlWrapper = (store: Store<IMState>, locale: string, messages: I18nMessages) => {
  locale = locale || store.getState().appContext?.locale || 'en'
  messages = messages || store.getState().appI18nMessages || {}

  return ({ children }) => {
    return (
      <ReactRedux.Provider store={store}>
        <IntlProvider locale={locale} messages={messages}>
          {children}
        </IntlProvider>
      </ReactRedux.Provider>
    )
  }
}

/**
 * Create a wrapper with `ReactRedux.Provider` and `ThemeProvider`.
 * @param store
 * @param theme
 */
export const StoreThemeWrapper = (store: Store<IMState>, theme: ThemeVariables) => {
  theme = theme || getStoreTheme(store) || mockTheme

  return ({ children }) => {
    return (
      <ReactRedux.Provider store={store}>
        <ThemeProvider theme={theme}>
          {children}
        </ThemeProvider>
      </ReactRedux.Provider>
    )
  }
}

/**
 * Create a wrapper with `ReactRedux.Provider`, `ThemeProvider` and `IntlProvider`.
 * @param store
 * @param theme
 * @param locale
 * @param messages
 */
export const StoreThemeIntlWrapper = (store: Store<IMState>, theme: ThemeVariables, locale: string, messages: I18nMessages) => {
  locale = locale || store.getState().appContext?.locale || 'en'
  messages = messages || store.getState().appI18nMessages || {}
  theme = theme || getStoreTheme(store) || mockTheme

  return ({ children }) => {
    return (
      <ReactRedux.Provider store={store}>
        <ThemeProvider theme={theme}>
          <IntlProvider locale={locale} messages={messages}>
            {children}
          </IntlProvider>
        </ThemeProvider>
      </ReactRedux.Provider>
    )
  }
}

/**
 * Create a custom render function with `ThemeProvider` and `IntlProvider`.
 * @param theme
 * @param locale
 * @param messages
 */
export const withThemeIntlRender = (theme = mockTheme as ThemeVariables, locale: string = 'en', messages: I18nMessages = {}): WithRenderResult => {
  return (ui, options?: RenderOptions<typeof queries>) => render(ui, { wrapper: ThemeIntlWrapper(theme, locale, messages), ...options });
}

/**
 * Create a custom render function with `ThemeProvider`.
 * @param theme
 */
export const withThemeRender = (theme = mockTheme as ThemeVariables): WithRenderResult => {
  return (ui, options?: RenderOptions<typeof queries>) => render(ui, { wrapper: ThemeWrapper(theme), ...options });
}

/**
 * Create a custom render function with `IntlProvider`.
 * @param locale
 * @param messages
 */
export const withIntlRender = (locale: string = 'en', messages = {}): WithRenderResult => {
  return (ui, options?: RenderOptions<typeof queries>) => render(ui, { wrapper: IntlWrapper(locale, messages), ...options });
}

/**
 * Create a custom render function with `ReactRedux.Provider`.
 * @param store
 */
export const withStoreRender = (store: Store<IMState> = getAppStore()): WithRenderResult => {
  return (ui, options?: RenderOptions<typeof queries>) => render(ui, { wrapper: StoreWrapper(store), ...options });
}

/**
 * Create a custom render function with `ReactRedux.Provider` and `IntlProvider`.
 * @param store
 * @param locale
 * @param messages
 */
export const withStoreIntlRender = (store: Store<IMState> = getAppStore(), locale?: string, messages?: I18nMessages): WithRenderResult => {
  return (ui, options?: RenderOptions<typeof queries>) => render(ui, { wrapper: StoreIntlWrapper(store, locale, messages), ...options });
}

/**
 * Create a custom render function with `ReactRedux.Provider` and `ThemeProvider`.
 * @param store
 * @param theme
 */
export const withStoreThemeRender = (store: Store<IMState> = getAppStore(), theme?: ThemeVariables): WithRenderResult => {
  return (ui, options?: RenderOptions<typeof queries>) => render(ui, { wrapper: StoreThemeWrapper(store, theme), ...options });
}

/**
 * Create a custom render function with `ReactRedux.Provider`, `ThemeProvider` and `IntlProvider`.
 * @param store
 * @param theme
 * @param locale
 * @param messages
 */
export const withStoreThemeIntlRender = (store: Store<IMState> = getAppStore(), theme?: ThemeVariables, locale?: string, messages?: I18nMessages): WithRenderResult => {
  return (ui, options?: RenderOptions<typeof queries>) => render(ui, { wrapper: StoreThemeIntlWrapper(store, theme, locale, messages), ...options });
}

/**
 * Used to render a widget component.
 */
export const widgetRender = withStoreThemeIntlRender

/**
 * Used to render a widget setting component.
 */
export const widgetSettingRender = withStoreThemeIntlRender

/**
 * @ignore
 * Full DOM rendering component with `ReactRedux.Provider`.
 * @param store
 * @param children
 */
export const mountWithStoreEnzyme = (store: Store<IMState>, children) => {
  return (
    mount(<ReactRedux.Provider store={store}>
      {children}
    </ReactRedux.Provider>)
  )
}

/**
 * @ignore
 * Shallow rendering component with `ReactRedux.Provider`.
 * @param store
 * @param children
 */
export const renderWithStoreEnzyme = (store: Store<IMState>, children) => {
  return (
    enzymeRender(<ReactRedux.Provider store={store}>
      {children}
    </ReactRedux.Provider>)
  )
}

/**
 * Create a function to run the passed function asynchronously.
 * @param timeout
 * @param useFakeTimers
 */
export const runFuncAsync = (timeout: number = 0, useFakeTimers?: boolean) => (callback, ...args) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        resolve(callback.apply(null, args));
      } catch (error) {
        reject(error);
      }
    }, timeout);
    useFakeTimers && jest.runOnlyPendingTimers();
  });
}

/**
 * Return a promise to resolve a value after waiting a certain number of milliseconds.
 * @param milliseconds
 * @param value
 */
export const waitForMilliseconds = (milliseconds = 0, value?: any) => {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(value) }, milliseconds);
  });
}

/**
 * Determine whether a component is a Class component.
 */
export function isClassComponent(component) {
  return typeof component === 'function' && !!component.prototype?.isReactComponent
}

function getStoreTheme(store: Store<IMState>): IMThemeVariables{
  return utils.isDeepEqual(store.getState().theme, {}) ? null : store.getState().theme
}