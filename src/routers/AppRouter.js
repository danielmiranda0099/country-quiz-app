import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Page404 } from '../pages/404';
import { CountryQuizPage } from '../pages/CountryQuizPage';
import { CountryQuizScore } from '../pages/CountryQuizScore';
import { HomePage } from '../pages/HomePage';
import { AuthRouter } from './AuthRouter';


export const AppRouter = () => {

    return (
        <Router>
            <div>
                <Switch>
                    <Route 
                        path="/auth"
                        component={ AuthRouter }
                    />

                    <Route 
                        path="/country-quiz"
                        component={ CountryQuizPage }
                    />

                    <Route 
                        path="/country-quiz-score"
                        component={ CountryQuizScore }
                    />

                    <Route
                        exact  
                        path="/"
                    >
                        <HomePage />
                    </Route>

                    <Route 
                        path='*'
                        component={ Page404}
                    />
                </Switch>
            </div>
        </Router>
    )
}