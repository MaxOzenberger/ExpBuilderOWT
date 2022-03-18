/** @jsx jsx */
import { React, jsx } from "jimu-core";
import { JimuMapViewSelector } from "jimu-ui/advanced/setting-components";
export default class Setting extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.onMapWidgetSelected = (useMapWidgetIds) => {
            this.props.onSettingChange({
                id: this.props.id,
                useMapWidgetIds: useMapWidgetIds
            });
        };
    }
    render() {
        return (jsx("div", { className: "widget-setting-demo" },
            jsx(JimuMapViewSelector, { useMapWidgetIds: this.props.useMapWidgetIds, onSelect: this.onMapWidgetSelected })));
    }
}
//# sourceMappingURL=setting.js.map