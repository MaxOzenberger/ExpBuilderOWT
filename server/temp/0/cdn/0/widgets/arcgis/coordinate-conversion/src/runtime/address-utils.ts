import * as Format from 'esri/widgets/CoordinateConversion/support/Format';
import * as Locator from 'esri/tasks/Locator';


export function addressToLocations(locatorURL: string, address: string, minCandidateScore: number): Promise<__esri.AddressCandidate[]> {
  const locator = new Locator({ url: locatorURL });
  return locator.addressToLocations({
    address: {
      SingleLine: address
    }
  }, {
    query: {}
  }).then(response => {
    response = response.sort((a, b) => { return b.score - a.score });
    response = response.filter((item) => { return item.score >= minCandidateScore && item.location });
    return response;
  }, err => {
    console.error(err.message);
    return [];
  })
}

export function generateAddressFormat(locatorURL: string, minCandidateScore: number): Format {
  const locator = new Locator({ url: locatorURL });
  var newFormat = new Format({
    name: 'address',
    getConversionStrategy: (): 'server' | 'client' => {
      return 'server';
    },
    conversionInfo: {
      // Define a convert function
      // Point -> Position
      convert: (point: __esri.Point): Promise<__esri.Position> => {
        const promise = new Promise<__esri.Position>((resolve, reject) => {
          if (locator) {
            return locator.locationToAddress({
              location: point
            }, {
              query: {}
            }).then(response => {
              resolve({
                coordinate: response && response.address && response.score && response.score >= minCandidateScore ? response.address : '',
                location: point
              });
            }, () => {
              resolve({
                coordinate: '',
                location: point
              });
            });
          } else {
            resolve({
              coordinate: '',
              location: point
            });
          }
        });
        return promise;
      },
      // Define a reverse convert function
      // String -> Point
      reverseConvert: (string: string): Promise<__esri.AddressCandidate> => {
        const promise = new Promise<__esri.AddressCandidate>((resolve, reject) => {
          if (locator) {
            return locator.addressToLocations({
              address: {
                SingleLine: string
              }
            }, {
              query: {}
            }).then(response => {
              if (response && response.length > 0) {
                response = response.filter((item) => { return item.score >= minCandidateScore && item.location });
                response = response.sort((a, b) => { return b.score - a.score });
                resolve(response[0]);
              }
              resolve(null);

            }, () => {
              resolve(null);
            });
          } else {
            resolve(null);
          }
        });
        return promise;
      }
    },
    // Define each segment of the coordinate
    coordinateSegments: [
      {
        alias: 'L',
        description: 'Address',
        searchPattern: /.*/
      }
    ],
    defaultPattern: 'L'
  });
  return newFormat;
}

