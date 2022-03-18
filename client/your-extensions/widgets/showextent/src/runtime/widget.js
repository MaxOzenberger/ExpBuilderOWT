/**
  Licensing

  Copyright 2021 Esri

  Licensed under the Apache License, Version 2.0 (the "License"); You
  may not use this file except in compliance with the License. You may
  obtain a copy of the License at
  http://www.apache.org/licenses/LICENSE-2.0

  Unless required by applicable law or agreed to in writing, software
  distributed under the License is distributed on an "AS IS" BASIS,
  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or
  implied. See the License for the specific language governing
  permissions and limitations under the License.

  A copy of the license is available in the repository's
  LICENSE file.
*/
import { React } from 'jimu-core';
import { JimuMapViewComponent } from 'jimu-arcgis';
export default class Widget extends React.PureComponent {
    constructor() {
        super(...arguments);
        this.state = { extent: null };
        this.isConfigured = () => {
            return this.props.useMapWidgetIds && this.props.useMapWidgetIds.length === 1;
        };
        this.onActiveViewChange = (jimuMapView) => {
            if (!this.extentWatch) {
                this.extentWatch = jimuMapView.view.watch('extent', extent => {
                    this.setState({
                        extent
                    });
                });
            }
        };
    }
    componentWillUnmount() {
        if (this.extentWatch) {
            this.extentWatch.remove();
            this.extentWatch = null;
        }
    }
    render() {
        var _a;
        if (!this.isConfigured()) {
            return 'Select a map';
        }
        return React.createElement("div", { className: "widget-use-map-view", style: { width: '100%', height: '100%', overflow: 'hidden' } },
            React.createElement("h3", null, "This widget demonstrates how to use a map view and display the map view's extent."),
            React.createElement(JimuMapViewComponent, { useMapWidgetId: (_a = this.props.useMapWidgetIds) === null || _a === void 0 ? void 0 : _a[0], onActiveViewChange: this.onActiveViewChange }),
            React.createElement("div", null, "Extent:"),
            React.createElement("div", null, this.state.extent && JSON.stringify(this.state.extent.toJSON())));
    }
}
//# sourceMappingURL=widget.js.map