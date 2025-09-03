import React from 'react';
import { RouteObject } from 'react-router-dom';

import StorybookPage from '@view/pages/storybook/Storybook';
import LoginPage from '@view/pages/auth/LoginPage';
import ProductDetailPage from '@view/pages/product/ProductDetailPage';
import CustomizeMainPage from '@view/pages/custom/CustomizeMainPage';
import CustomizeStartPage from '@view/pages/custom/CustomizeStartPage';
import CustomizeInfoPage from '@view/pages/custom/CustomizeInfoPage';
import SearchPage from '@view/pages/search/SearchPage';
import HomePage from '@view/pages/main/HomePage';
import ErrorAlert from '@view/pages/error/ErrorAlert';
import ROUTES from '../model/constants/routes';

import BaseLayout from '@view/layout/BaseLayout';
import DetailLayout from "@view/layout/DetailLayout";

const AppRouter: RouteObject[] = [
  {
    path: '/',
    element: <BaseLayout />,
    errorElement: <ErrorAlert message={null} onDismiss={function(): void {
        throw new Error('Function not implemented.');
    } } />,
    children: [
      { path: ROUTES.LOGIN, element: <LoginPage /> },
      { path: ROUTES.HOME, element: <HomePage /> },
      { path: ROUTES.CUSTOMIZE_MAIN, element: <CustomizeMainPage /> },
      { path: ROUTES.CUSTOMIZE_START, element: <CustomizeStartPage /> },
      { path: ROUTES.CUSTOMIZE_INFO, element: <CustomizeInfoPage /> },
      // { path: ROUTES.CART, element: <CartPage /> },
      // { path: ROUTES.PAYMENT, element: <PaymentPage /> },
      // { path: ROUTES.PAYMENT_COMPLETE, element: <PaymentCompletePage /> },
      { path: ROUTES.SEARCH, element: <SearchPage /> },
    ],
  },
  {
    path: 'product',
    element: <DetailLayout/>,
    errorElement: <ErrorAlert message={null} onDismiss={function(): void {
      throw new Error('Function not implemented.');
    } } />,
    children: [
      { path: ROUTES.PRODUCT_DETAIL, element: <ProductDetailPage /> },
    ]
  },
  {
    path: ROUTES.STORYBOOK,
    element: <StorybookPage />,
  },
];

export default AppRouter;
