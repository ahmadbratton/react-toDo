var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");


var {AddTodo} = require("AddTodo")

describe("Add Todo", () => {
    it("should exsist", () => {
        expect(AddTodo).toExist();
    } );

    it("should dipatch addTodo when valid todo text", () => {
    var todoText = "take out the trash"
    var spy = expect.createSpy();
    var action = {
      type:"ADD_TODO",
      text:todoText

    }
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = todoText;
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toHaveBeenCalledWith(action)

  });

  it("should not dispatch addTodo when invalid todo text", () => {
    var spy = expect.createSpy();
    var addTodo = TestUtils.renderIntoDocument(<AddTodo dispatch={spy} />)
    var $el = $(ReactDOM.findDOMNode(addTodo));

    addTodo.refs.todoText.value = "";
    TestUtils.Simulate.submit($el.find("form")[0]);
    expect(spy).toNotHaveBeenCalled()

  })

} )