import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { AuthLoginPage } from "../pages/AuthLoginPage";
import { AuthRegisterPage } from "../pages/AuthRegisterPage";

export const AuthRouter = () => {

    return(
        <div>
            <Switch>
                <Route  
                    exact
                    path='/auth/login'
                    component={ AuthLoginPage }
                />

                <Route  
                    exact
                    path='/auth/register'
                    component={ AuthRegisterPage }
                />

                <Redirect to='/auth/login' />
            </Switch>
        </div>
    )
}