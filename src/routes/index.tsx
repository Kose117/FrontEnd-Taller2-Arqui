import { LoadingFallback } from "@/components/molecules/LoadingFallback";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

const Auth = lazy(() => import("../components/screens/AuthScreen"));
const Layout = lazy(() => import("../components/screens/LayoutScreen"));
const Dashboard = lazy(() => import("../components/screens/DashboardScreen"));
const Products = lazy(() => import("../components/screens/ProductsScreen"));


const UnauthorizedErrorScreen = lazy(
  () => import("../components/screens/errors/401")
);

const OperadorRoutes = lazy(() => import("./OperadorRoutes"));

const Settings = lazy(() => import("../components/screens/settings/SettingsScreen"));
const Account = lazy(() => import("../components/screens/settings/AccountScreen"));

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/no-autorizado" element={<UnauthorizedErrorScreen />} />
          <Route path="/auth" element={<Auth />} />

          <Route path="/" element={<Layout />}>
            <Route path="/ajustes" element={<Settings />} >
              <Route path="cuenta" element={<Account />} />
            </Route>
            <Route element={<OperadorRoutes />}>
              <Route path="estadisticas" element={<Dashboard />} />
              <Route path="productos" element={<Products />} />
            </Route>
          </Route>


        </Routes>
      </Suspense>
    </BrowserRouter >
  );
};
