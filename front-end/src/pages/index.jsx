import { lazy } from 'react';

const Cart = lazy(() => import('./Cart/index'));
const Details = lazy(() => import('./Details/index'));
const Join = lazy(() => import('./Join/index'));
const Login = lazy(() => import('./Login/index'));
const Main = lazy(() => import('./Main/index'));
const My = lazy(() => import('./My/index'));
const NotFound = lazy(() => import('./NotFound/index'));
const Product = lazy(() => import('./Product/index'));
const Review = lazy(() => import('./Review/index'));
const ReviewForm = lazy(() => import('../components/Review/ReviewForm/index'));
const People = lazy(() => import('./People/index'));

export {
  Cart,
  Details,
  Join,
  Login,
  Main,
  My,
  NotFound,
  Product,
  Review,
  ReviewForm,
  People,
};
