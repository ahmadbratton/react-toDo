var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");


var AddTodo = require("AddTodo")

describe("Add Todo", () => {
    it("should exsist", () => {
        expect(AddTodo).toExist();
    } );

    it("should alert if valid data is entered", () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = "take out the trash";
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toHaveBeenCalledWith("take out the trash")

  });

  it("should not alert if invalid data is entered", () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = "";
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toNotHaveBeenCalled()

  })

} )