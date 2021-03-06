require('../lib/testdom')('<html><body></body></html>');
var expect = require('expect');

describe('CategoryCreate React Component', function() {
  it('render component', function() {
    var React = require('react/addons');
    var CategoryCreate = require('../../dist/components/CategoryCreate.react.js');
    var TestUtils = React.addons.TestUtils;

    var title = TestUtils.renderIntoDocument(<CategoryCreate />);
    var form = TestUtils.findRenderedDOMComponentWithTag(title, 'form');
    expect(form.getDOMNode().getAttribute('class')).toInclude('pad');

    var inputs = TestUtils.scryRenderedDOMComponentsWithTag(title, 'input');

    expect(inputs.length).toBe(2);
    var label = TestUtils.findRenderedDOMComponentWithTag(title, 'label');
    expect(label.getDOMNode().getAttribute('for')).toBe('name');
    expect(label.getDOMNode().textContent).toBe('Name');
  });
});