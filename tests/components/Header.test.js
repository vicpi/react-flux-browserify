require('../lib/testdom')('<html><body></body></html>');
var expect = require('expect');

describe('Header React Component', function() {
  it('renders component', function() {
    var React = require('react/addons');
    var Header = require('../../dist/components/Header.react.js');
    var TestUtils = React.addons.TestUtils;
    var header = TestUtils.renderIntoDocument(<Header />);
    var div = TestUtils.findRenderedDOMComponentWithTag(header, 'div');
    expect(div.getDOMNode().textContent).toBe('');
  });
});