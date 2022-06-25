import "././assets/css/style.css";
import "././assets/css/bootstrap.min.css";
import "././assets/css/font-awesome.min.css";
import {
  NavLink,
  Redirect,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import LinearProgress from "@mui/material/LinearProgress";
import React, { Suspense, lazy } from "react";
import { History } from "history";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const DashboardContainer = lazy(
  () => import("./pages/Dashboard/DashboardContainer")
);
const FormContainer = lazy(() => import("./pages/Form/FormContainer"));
interface AppProps {
  history: History;
}

export const App: React.FC<AppProps> = () => {
  return (
    <Router>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar component="nav">
          <Toolbar>
            <Typography
              variant="h6"
              component="div"
              sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
            >
              <NavLink to={"/dashboard"} style={{ color: "white" }}>
                Dashboard
              </NavLink>
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              <NavLink to={"/form"} style={{ color: "white" }}>
                Add New
              </NavLink>
            </Box>
          </Toolbar>
        </AppBar>
        <div className="wp-content">
          <div className="container-fluid">
            <Suspense fallback={<LinearProgress />}>
              <Switch>
                <Redirect from="/" to={`/dashboard`} exact={true} />
                <Route
                  path={`/dashboard`}
                  exact={true}
                  component={DashboardContainer}
                />
                <Route path={`/form`} exact={true} component={FormContainer} />
              </Switch>
            </Suspense>
          </div>
        </div>
      </Box>
    </Router>
  );
};
