/// <reference types="react" />
/** @jsx jsx */
import { React, ThemeVariables, IntlShape } from 'jimu-core';
import { ExpressionBuilderProps } from '../../types';
interface ExpressionBuilderPopupProps extends ExpressionBuilderProps {
    isOpen: boolean;
    onClose: () => void;
    trigger?: Element;
}
interface ExtraProps {
    theme: ThemeVariables;
    intl: IntlShape;
}
declare const ExpressionBuilderPopup: React.FC<import("react-intl").WithIntlProps<Pick<ExpressionBuilderPopupProps & ExtraProps, "intl" | keyof ExpressionBuilderPopupProps> & {
    theme?: import("@emotion/react").Theme;
}>> & {
    WrappedComponent: React.ComponentType<Pick<ExpressionBuilderPopupProps & ExtraProps, "intl" | keyof ExpressionBuilderPopupProps> & {
        theme?: import("@emotion/react").Theme;
    }>;
};
export default ExpressionBuilderPopup;
