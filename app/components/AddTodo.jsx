var React = require("react");
var {connect} = require("react-redux");
var actions = require("actions");

export var AddTodo = React.createClass({

    handleSubmit: function(e){
        e.preventDefault();
        var {dispatch} = this.props
        var todoText = this.refs.todoText.value;

        if(todoText.length > 0){
            this.refs.todoText.value = "";
            dispatch(actions.addTodo(todoText))
        } else{
            this.refs.todoText.focus();
        }


        

    },

    render: function () {
        return(
        <div className="container_footer" >
            <form onSubmit={this.handleSubmit} > 
            <input type="text" placeholder="add Todo" ref="todoText" />
            <button className="button expanded" > add todo </button>
            </form>
        </div>
        )
    }
});
export default connect()(AddTodo);