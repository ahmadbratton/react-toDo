var React = require("react");
var ReactDOM = require("react-dom");
var expect = require("expect");
var $ = require("jQuery");
var TestUtils = require("react-addons-test-utils");

var TodoAPI = require("TodoAPI");

describe("todo API" , () => {
    beforeEach(() => {
        localStorage.removeItem("todos")
    })

  it("should exist", () => {
    expect(TodoAPI).toExist();
  } );

  describe("set todos" ,  () => {
    it("should set valid todos array" , () => {
        var todos = [{
                id:23,
                text: "test",
                completed:false
            }];
            TodoAPI.setTodos(todos);

            var actualTodos = JSON.parse(localStorage.getItem("todos"));

            expect(actualTodos).toEqual(todos);

    } )

     it("should not set invald todos array", () => {
        var badTodos = {a: "b"};
        TodoAPI.setTodos(badTodos);

        expect(localStorage.getItem("todos")).toBe(null);
    } )
  })
  })

  describe("get todos" , () => {

  it("should return empty arry for bad localstorage data" , () => {
    var actualTodos = TodoAPI.getTodos();
    expect(actualTodos).toEqual([]);

  })

  it("should return todo if valid array in localStorage ", () => {
      var todos = [{
                id:23,
                text: "test",
                completed:false
            }];
    localStorage.setItem("todos" , JSON.stringify(todos))
    var actualTodos = TodoAPI.getTodos();
    expect(actualTodos).toEqual(todos);
  })



  describe("filter Todos" , () => {
       var todos = [{
                id:1,
                text: "some test",
                completed:true
            },
            {
                id:2,
                text: "test",
                completed:false
            }, 
            {
                id:3,
                text: "some test",
                completed:true
            }];

            it("should return all items if showCompleted is true" , () => {
                var filteredTodos = TodoAPI.filterTodos(todos, true, "");
                expect(filteredTodos.length).toBe(3);
            })

            it("should only return non completed items if showCompleted is false" , () => {
                var filteredTodos = TodoAPI.filterTodos(todos, false, "");
                expect(filteredTodos.length).toBe(1);
            })

            it("should sort by completed staus" , () => {
                var filteredTodos = TodoAPI.filterTodos(todos, true, "");
                expect(filteredTodos[0].completed).toBe(false);
            })

            it("should filter todos by searchText" , () => {
                var filteredTodos = TodoAPI.filterTodos(todos, true, "some");
                expect(filteredTodos.length).toBe(2);
            });

             it("should return all todos if searchText is empty" , () => {
                var filteredTodos = TodoAPI.filterTodos(todos, true, "");
                expect(filteredTodos.length).toBe(3);
            });

  });



});