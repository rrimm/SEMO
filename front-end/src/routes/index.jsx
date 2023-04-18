import { Cart, Details, Join, Login, Main, My, Admin, NotFound, Product, Review, ReviewForm } from '../pages/index';

import React from 'react';
import { BROWSER_PATH } from '../constants/path';
import { Route, Routes as BrowserRoutes } from 'react-router-dom';
import PrivateWrapper from './PrivateWrapper';

function Routes() {
  return (
    <BrowserRoutes>
      <Route path={BROWSER_PATH.BASE} element={<Main />} />
      <Route path={BROWSER_PATH.JOIN} element={<Join />} />
      <Route path={BROWSER_PATH.LOGIN} element={<Login />} />
      <Route path={BROWSER_PATH.DETAILS}>
        <Route path={':id'} element={<Details />} />
      </Route>
      <Route path={BROWSER_PATH.PRODUCT} element={<Product />} />
      <Route path={BROWSER_PATH.REVIEW} element={<Review />} />
      <Route element={<PrivateWrapper />}>
        <Route path={BROWSER_PATH.CART} element={<Cart />} />
        <Route path={BROWSER_PATH.MY} element={<My />} />
        <Route path={BROWSER_PATH.REVIEW_FORM} element={<ReviewForm />} />
      </Route>
      <Route path={BROWSER_PATH.ADMIN} element={<Admin />}>
        <Route path={':member'} element={<Admin />} />
        <Route path={':product'} element={<Admin />} />
      </Route>
      <Route path={'*'} element={<NotFound />} />
    </BrowserRoutes>
  );
}

export default Routes;
