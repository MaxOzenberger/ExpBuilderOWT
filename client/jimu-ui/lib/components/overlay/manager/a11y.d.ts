import { React } from 'jimu-core';
/**
 * Loop within a focusable element inside a container when the Tab key is pressed.
 *
 * Modify the version to rebind the loop event.
 * Note: `-1` means not to enable event binding.
 * @default 0
 * @param version
 */
export declare const useInFocusLoop: (containerRef: React.MutableRefObject<HTMLDivElement>, open: boolean, version?: number) => void;
/**
 * Trigger toggle when the escape key is pressed
 */
export declare const useToggleForEscape: (containerRef: React.MutableRefObject<HTMLDivElement>, open: boolean, toggle: (evt: any) => void) => void;
