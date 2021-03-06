/// <reference types="react" />
import { React } from 'jimu-core';
import { SketchProps } from './sketch';
import { ColorItem } from '../color-components';
/**
 * The SketchStandard component props
 */
export interface SketchStandardProps extends SketchProps {
    presetColors?: ColorItem[];
}
export declare const SketchStandard: React.ComponentType<SketchStandardProps>;
