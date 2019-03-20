var Counter = React.createClass({
    getDefaultProps: function() {
        console.log('Pobieranie właściwości z zewnątrz, np. od rodzica komponentu.');
    },
    getInitialState: function() {
        console.log('Ustawienie stanu początkowego.');
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
    componentWillMount: function() {
        console.log('Metoda rzadko używana - nie można zmienić stanu i właściowości przed pierszym renderowaniem');
    },

    render: function() {
        console.log('Metoda zwraca element do wyświetlenia. WAŻNE - metoda może zwrócić tylko jeden element');
        return React.createElement('div', {},
            React.createElement('button', {onClick: this.increment}, '+'),
            React.createElement('button', {onClick: this.decrement}, '-'),
            React.createElement('span', {}, 'Licznik ' + this.state.counter)    
        );
    }
    componentDidMount: function() {
    console.log('Element jest już pobrany - możemy np. zmienić jego miejsce w strukturze DOM lub pobrać dane z serwera');
    },
    componentWillReceiveProps: function() {
    console.log('Metoda ta pozwala aktualizować stan na podstawie nadchodzących właściwości.');
    },
    shouldComponentUpdate: function() {
    console.log('Metoda porównuje stare oraz nadchodzące propsy i podejmuje decyzje, czy jest potrzeba aktualizacji komponentu. Wykorzystywana do sprawdzania, czy faktycznie istnieje potrzeba aktualizacji stuktury DOM');
    },
    componentWillUpdate: function() {
    console.log('Metoda jest wywoływana wyłącznie w momencie, kiedy poprzednia metoda zwróci nam true');
    },
    componentDidUpdate: function() {
    console.log('Metoda działa analogiczne do componentDidMount');
    }

});

var elements = React.createElement("div", {}, 
    React.createElement(Counter),
    React.createElement(Counter)
);

ReactDOM.render(elements, document.getElementById("app"));
