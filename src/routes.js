import { BrowserRouter, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/SearchPage";

export default function Routes() {

    return (
        <BrowserRouter>
            <Switch  >
                <Route path="/" component={SearchPage} exact />
            </Switch>
        </BrowserRouter>
    );
}