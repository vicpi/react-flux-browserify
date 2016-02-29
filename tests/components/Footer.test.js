require('../lib/testdom')('<html><body></body></html>');
var expect = require('expect');

describe('Footer React Component', function() {
  it('renders component', function() {
    var React = require('react/addons');
    var Footer = require('../../dist/components/Footer.react.js');
    var TestUtils = React.addons.TestUtils;
    var footer = TestUtils.renderIntoDocument(<Footer />);
    var hr = TestUtils.findRenderedDOMComponentWithTag(footer, 'hr');
    expect(hr.getDOMNode().getAttribute('class')).toInclude('footer');
    expect(hr.getDOMNode().nextSibling.firstChild.textContent).toInclude('Products');
  });
});