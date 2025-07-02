import React from 'react';
import { RouteObject } from 'react-router-dom';

import StorybookPage from '@view/pages/storybook/Storybook';
import LoginPage from '@view/pages/auth/LoginPage';
import BaseLayout from '@view/layout/BaseLayout';
import ProductDetailPage from '@view/pages/product/ProductDetailPage';
import CustomizeMainPage from '@view/pages/custom/CustomizeMainPage';
import CustomizeStartPage from '@view/pages/custom/CustomizeStartPage';
import CustomizeInfoPage from '@view/pages/custom/CustomizeInfoPage';
import SearchPage from '@view/pages/search/SearchPage';
import CartPage from '@view/pages/cart/CartPage';
import PaymentCompletePage from '@view/pages/payment/PaymentCompletePage';
import PaymentPage from '@view/pages/payment/PaymentPage';
import { HomePage } from '@view/pages/main/HomePage';
import { ErrorPage } from '@view/pages/error/ErrorPage';
import { ROUTES } from '../model/constants/routes';

const AppRouter: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.PRODUCT_DETAIL, element: <ProductDetailPage /> },
      { path: ROUTES.CUSTOMIZE_MAIN, element: <CustomizeMainPage /> },
      { path: ROUTES.CUSTOMIZE_START, element: <CustomizeStartPage /> },
      { path: ROUTES.CUSTOMIZE_INFO, element: <CustomizeInfoPage /> },
      { path: ROUTES.CART, element: <CartPage /> },
      { path: ROUTES.PAYMENT, element: <PaymentPage /> },
      { path: ROUTES.PAYMENT_COMPLETE, element: <PaymentCompletePage /> },
      { path: ROUTES.SEARCH, element: <SearchPage /> },
    ],
  },
  {
    path: ROUTES.STORYBOOK,
    element: <StorybookPage />,
  },
];

export default AppRouter;
