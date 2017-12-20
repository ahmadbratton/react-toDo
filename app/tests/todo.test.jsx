var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var {Todo} = require("Todo");

describe("todo app" , () => {
  it("should exist", () => {
    expect(Todo).toExist();
  } );

  it("should dispatch toggle todo action on click", () => {
    var todoData = {
      id:199,
      text:"write todo test",
      completed:true
    };

      var spy = expect.createSpy();
      var todo = TestUtils.renderIntoDocument(<Todo {...todoData} dispatch={spy} />)
      var $el = $(ReactDOM.findDOMNode(todo));

      TestUtils.Simulate.click($el[0]);

      expect(spy).toHaveBeenCalledWith({
        type: "TOGGLE_TODO",
        id: todoData.id
      });

  });

} );
