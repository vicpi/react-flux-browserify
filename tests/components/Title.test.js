require('../lib/testdom')('<html><body></body></html>');
var expect = require('expect');

describe('Title React Component', function() {
  it('renders component', function() {
    var React = require('react/addons');
    var Title = require('../../dist/components/Title.react.js');
    var TestUtils = React.addons.TestUtils;
    var title = TestUtils.renderIntoDocument(<Title />);
    var h1 = TestUtils.findRenderedDOMComponentWithTag(title, 'h1');
    expect(h1.getDOMNode().getAttribute('class')).toInclude('bold-header');
    expect(h1.getDOMNode().firstChild.nodeName).toBe('A');
    expect(h1.getDOMNode().textContent).toInclude('products');
  });
});