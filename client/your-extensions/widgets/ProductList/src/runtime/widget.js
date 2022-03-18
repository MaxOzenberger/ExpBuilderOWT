/** @jsx jsx */
import { React, jsx } from "jimu-core";
import { JimuMapViewComponent } from "jimu-arcgis";
import Extent from "./components/Extent";
export default class Widget extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = {
            jimuMapView: null,
            extentxmax: null,
            extentxmin: null,
            extentymax: null,
            extentymin: null
        };
        this.activeViewChangeHandler = (jmv) => {
            if (jmv) {
                this.setState({
                    jimuMapView: jmv
                });
                jmv.view.on("move", (evt) => {
                    console.log(evt);
                    this.state.extentxmax = jmv.view.extent.xmax;
                    this.state.extentxmin = jmv.view.extent.xmin;
                    this.state.extentymax = jmv.view.extent.ymax;
                    this.state.extentymin = jmv.view.extent.ymin;
                });
            }
        };
    }
    render() {
        var _a;
        return (jsx("div", { className: "widget-starter jimu-widget" },
            this.props.hasOwnProperty("useMapWidgetIds") && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (jsx(JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.activeViewChangeHandler })),
            jsx("p", null,
                "Extent: ",
                this.state.extentxmax,
                " ",
                this.state.extentxmin,
                " ",
                this.state.extentymax,
                " ",
                this.state.extentymin),
            jsx(Extent, null)));
    }
}
//# sourceMappingURL=widget.js.map