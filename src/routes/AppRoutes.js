import React, { useState, lazy, Suspense } from "react";
import { PagesWrapper } from "./RoutesStyle";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import LoadingPage from "../pages/LoadingPage/LoadingPage";
import NavBar from "../components/NavBar/NavBar";
const HomePage = lazy(() => import("../pages/HomePage/HomePage"));
const DrawingPage = lazy(() => import("../pages/DrawingPage/DrawingPage"));
const AppRoutes = () => {
  return (
    <BrowserRouter>
      <NavBar />
      <PagesWrapper>
        <Suspense fallback={<LoadingPage />}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route exact path="/drawing" component={DrawingPage} />
          </Switch>
        </Suspense>
      </PagesWrapper>
    </BrowserRouter>
  );
};
export default AppRoutes;
