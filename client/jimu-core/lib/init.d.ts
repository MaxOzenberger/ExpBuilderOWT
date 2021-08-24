import { IMState } from './types/state';
/**
 * By convention the default locale must be the first.
 **/
export declare const translatedLocales: string[];
export declare function init(): Promise<void>;
/**
 *
 * @param state load the modules that are rendered on server
 */
export declare function preloadModulesForSSR(state: IMState): Promise<any>;
