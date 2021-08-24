import * as React from 'react';
import { shallow, configure } from 'enzyme';
// setup file
import * as Adapter from 'enzyme-adapter-react-16';
import { AddPopper } from '../src/common/add-popper';
import { OutputSettings } from '../src/config'

configure({ adapter: new Adapter() });

describe('Add conversion popper component', function () {

  const mockSelectedFormat: OutputSettings[] = [{
    name: 'dd',
    label: 'DD',
    currentPattern: 'X, Y',
    defaultPattern: 'Y°N, X°E',
    enabled: true,
    isCustom: true
  }];

  const wrapper = shallow(<AddPopper supportedFormats={mockSelectedFormat} />);

  it('Should have specified label', function () {
    expect(wrapper.state('coordinateLabel')).toEqual('DD');
  });

  it('Should have specified current pattern', function () {
    expect(wrapper.state('currentPattern')).toEqual('X, Y');
  });

  it('Reset current pattern', function () {
    wrapper.find('.reset-button').simulate('click');
    expect(wrapper.state('currentPattern')).toEqual('Y°N, X°E');
  });

  it('Format section visible for coordinate types other than address', function () {
    expect(wrapper.find('.hidden').length).toEqual(0);
  });

  it('Hide format section for address', function () {
    const mockAddressFormat: OutputSettings[] = [{
      name: 'address',
      label: 'Address',
      currentPattern: '',
      defaultPattern: '',
      enabled: true,
      isCustom: true
    }];
    const wrapper1 = shallow(<AddPopper supportedFormats={mockAddressFormat} />);
    expect(wrapper1.find('.hidden').length).toEqual(1);
  });

});