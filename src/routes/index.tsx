import { useRoutes } from "react-router-dom";
import Layout from "src/components/Layout/Layout";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/HomePage"));
const ProductPage = lazy(() => import("../pages/ProductPage"));
const CheckoutPage = lazy(() => import("../pages/CheckoutPage"));
const ErrorPage = lazy(() => import("../pages/ErrorPage"));

const publicRoutes = [
  { path: "/", element: <HomePage /> },
  { path: "/:name", element: <ProductPage /> },
  { path: "/checkout", element: <CheckoutPage /> },
  { path: "*", element: <ErrorPage /> },
];

export const AppRoutes = () => {
  const element = useRoutes([...publicRoutes]);
  return <Layout>{element}</Layout>;
};
