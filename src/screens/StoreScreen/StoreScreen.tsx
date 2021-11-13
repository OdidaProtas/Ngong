import React, { lazy, Suspense } from "react";
import { Route, Switch, useRouteMatch } from "react-router";
import Loader from "../../components/SharedComponents/Loader/Loader";
import TbFallBack from "../StoreSelectionScreen/TbFallBack";

const Editor = lazy(() => import("./Editor/Editor"));
const StoreOverview = lazy(() => import("./Overview/StoreOverview"));
const CodeEditor = lazy(() => import("./CodeEditor/CodeEditor"));

export default function StoreScreen() {
  const { path } = useRouteMatch();
  return (
    <div>
      <Switch>
        <Route exact path={path}>
          <Suspense fallback={<Loader />}>
            <StoreOverview />
          </Suspense>
        </Route>
        <Route exact path={`${path}/editor`}>
          <Suspense fallback={<Loader />}>
            <Editor />
          </Suspense>
        </Route>
        <Route exact path={`${path}/editor/code`}>
          <Suspense fallback={<Loader />}>
            <CodeEditor />
          </Suspense>
        </Route>
      </Switch>
    </div>
  );
}
