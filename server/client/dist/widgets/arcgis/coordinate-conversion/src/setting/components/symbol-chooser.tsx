import { React, IntlShape } from 'jimu-core';
import { SymbolSelector } from 'jimu-ui/advanced/map';

interface Props {
  intl?: IntlShape;
  symbol?: __esri.SimpleMarkerSymbol | __esri.PictureMarkerSymbol | __esri.PointSymbol3D;
  onPointSymbolChanged?: (symbol: __esri.SimpleMarkerSymbol | __esri.PictureMarkerSymbol | __esri.PointSymbol3D) => void;
}

interface State {
  currentSymbol: __esri.SimpleMarkerSymbol | __esri.PictureMarkerSymbol | __esri.PointSymbol3D;
}

export default class SymbolChooser extends React.PureComponent<Props, State>{
  constructor(props) {
    super(props);
    this.state = {
      currentSymbol: this.props.symbol
    }
  }

  handlePointSymbolChanged = (symbol) => {
    this.setState({
      currentSymbol: symbol
    });
    this.props.onPointSymbolChanged(symbol);
  }

  handlePolylineSymbolChanged = (symbol) => {
  }

  handlePolygonSymbolChanged = (symbol) => {
  }

  render() {
    return <div style={{ width: '370px' }}>
      <SymbolSelector intl={this.props.intl} symbol={this.state.currentSymbol} onPointSymbolChanged={this.handlePointSymbolChanged}
        onPolylineSymbolChanged={this.handlePolylineSymbolChanged}
        onPolygonSymbolChanged={this.handlePolygonSymbolChanged}>
      </SymbolSelector>
    </div>
  }
}
