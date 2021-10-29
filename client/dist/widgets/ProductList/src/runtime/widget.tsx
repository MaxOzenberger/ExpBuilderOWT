/** @jsx jsx */
import { React, AllWidgetProps, jsx } from "jimu-core";
import { JimuMapViewComponent, JimuMapView } from "jimu-arcgis";
import Extent from "./components/Extent"

export default class Widget extends React.PureComponent<AllWidgetProps<any>, any> {
  
  state = {
    jimuMapView: null,
    extentxmax: null,
    extentxmin: null,
    extentymax: null,
    extentymin: null
  };

  activeViewChangeHandler = (jmv: JimuMapView) => {
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

  render() {
    return (
      <div className="widget-starter jimu-widget">
        {this.props.hasOwnProperty("useMapWidgetIds") && this.props.useMapWidgetIds && this.props.useMapWidgetIds[0] && (
          <JimuMapViewComponent useMapWidgetId={this.props.useMapWidgetIds?.[0]} onActiveViewChange={this.activeViewChangeHandler} />
        )}
        <p>
          Extent: {this.state.extentxmax} {this.state.extentxmin} {this.state.extentymax} {this.state.extentymin}
        </p>
        <Extent></Extent>
      </div>
    );
  }
}