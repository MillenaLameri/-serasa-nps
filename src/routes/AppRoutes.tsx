import { BrowserRouter, Route, Switch } from "react-router-dom";
import { Home } from "../page/home/Home";

import { ROUTES } from "./Routes";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={ROUTES.Home} component={Home} />
      </Switch>
    </BrowserRouter>
  );
};
