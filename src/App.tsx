import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom"
import ScrollToTop from "./ScrollToTop"
import { Home, NotFound } from "./Pages"
import "../static/style-mobile.css"
import "../static/style-desktop.css"
import "../static/style-tablet.css"
import "../static/style-tablet-large.css"


class App extends React.Component {

    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route exact path="/">
                            <ScrollToTop>
                                <Home />
                            </ScrollToTop>
                        </Route>

                        <Route path="*">
                            <ScrollToTop>
                                <NotFound />
                            </ScrollToTop>
                        </Route>
                    </Switch>
                </div>
            </BrowserRouter>
        )
    }
}
export default App;
