import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './pages/about';
import Flow from './pages/flow';
import './styles/globals.css';

const App = () => {
    return (
        <Router>
            <Switch>
                <Route path="/about" component={About} />
                <Route path="/flow" component={Flow} />
                <Route path="/" exact>
                    <h1>ホームページ</h1>
                </Route>
            </Switch>
        </Router>
    );
};

export default App;
