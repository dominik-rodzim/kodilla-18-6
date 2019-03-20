var Counter = React.createClass({
    getInitialState: function() {
        return {
            counter: 0
        };
    },

    increment: function() {
        this.setState({
            counter: this.state.counter + 1
        });
    },

    decrement: function() {
        this.setState({
            counter: this.state.counter - 1
        });
    },

    render: function() {
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)    
        );
    }
});

var elements = React.createElement("div", {}, 
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(elements, document.getElementById("app"));

