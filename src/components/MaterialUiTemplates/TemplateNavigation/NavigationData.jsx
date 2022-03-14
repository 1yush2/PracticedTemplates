import NavigationHomeContent from "./NavigationHomeContent";
import ErrorPage from "../ErrorPage";

import DashboardClone from "./../Dashboard/DashboardClone";
import Checkout from "./../multiStepForm/Checkout";
import MaterialAlbumClone from "./../AlbumClone/MaterialAlbumClone";
import MaterialPictureSignIn from "./../SignInPages/MaterialPictureSignIn";
import MaterialSimpleSIgn from "./../SignInPages//materialSimpleSIgn";
import MaterialPricingClone from "./../PricingClone/MaterialPricingClone";

export const routesData = [
  {
    link: "/",
    component: <NavigationHomeContent />,
  },
  {
    link: "/Dashboard",
    component: <DashboardClone />,
  },
  {
    link: "/MultiStepForm",
    component: <Checkout />,
  },
  {
    link: "/Album",
    component: <MaterialAlbumClone />,
  },
  {
    link: "/PictureSignIn",
    component: <MaterialPictureSignIn />,
  },
  {
    link: "/SignIn",
    component: <MaterialSimpleSIgn />,
  },
  {
    link: "/Pricing",
    component: <MaterialPricingClone />,
  },
  {
    link: "*",
    component: <ErrorPage />,
  },
];

export const cardData = [
  {
    name: "Dashboard",
    link: "/Dashboard",
  },
  {
    name: "MultiStepForm",
    link: "/MultiStepForm",
  },
  {
    name: "Album",
    link: "/Album",
  },
  {
    name: "PictureSignIn",
    link: "/PictureSignIn",
  },
  {
    name: "SignIn",
    link: "/SignIn",
  },
  {
    name: "Pricing",
    link: "/Pricing",
  },
];
