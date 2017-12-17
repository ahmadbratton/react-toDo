var React = require("react");

var AddTodo = React.createClass({

    handleSubmit: function(e){
        e.preventDefault();

        var todoText = this.refs.todoText.value;

        if(todoText.length > 0){
            this.refs.todoText.value = "";
            this.props.onAddTodo(todoText);
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
module.exports = AddTodo;