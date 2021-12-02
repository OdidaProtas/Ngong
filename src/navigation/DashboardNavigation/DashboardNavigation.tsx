import { Suspense, useEffect, useReducer, useState } from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  useRouteMatch,
  useParams,
} from "react-router-dom";
import { BusinessForm } from "..";
import TablesSkeleton from "../../components/SharedComponents/TablesSkeleton/TablesSkeleton";
import { axiosInstance } from "../../state";
import navigationOptions from "./DashboardNavigationSchema";
import DashProtectedRoute from "./DashProtectedRoute";
import DashboardContext, { initialState, reducer } from "./state";

export default function DashboardNavigation() {
  const { path } = useRouteMatch();

  const [dashboardState, dashboardDispatch] = useReducer(reducer, initialState);
  const [loading, setLoading] = useState(false);

  const { store } = dashboardState;

  const { id }: any = useParams();

  useEffect(() => {
    if (!store) {
      setLoading(true);
      axiosInstance
        .get(`/stores/${id}`)
        .then((res) => {
          dashboardDispatch({ type: "ADD_STORE", payload: res.data });
          setLoading(false);
        })
        .catch((e) => {
          setLoading(false);
          console.log(e);
        });
    }
  }, []);

  if (!store || loading) return <TablesSkeleton />;

  return (
    <DashboardContext.Provider value={{ ...dashboardState, dashboardDispatch }}>
      {/* <DateSalutationComponent /> */}
      <Switch>
        {navigationOptions.map((options: any, idx: number) => {
          const { url, component, isExact } = options;
          return (
            <DashProtectedRoute
              key={idx}
              component={component}
              exact={isExact}
              path={`${path}/${url}`}
            />
          );
        })}
        <Route path={`${path}/setup`}>
          <Suspense fallback={<TablesSkeleton />}>
            <BusinessForm />
          </Suspense>
        </Route>
        <Route path="**">
          <h4>Url not configured</h4>
        </Route>
      </Switch>
      {/* <BusinessForm /> */}
    </DashboardContext.Provider>
  );
}
