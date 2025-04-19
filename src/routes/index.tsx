import { LoadingFallback } from "@/components/molecules/LoadingFallback";
import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// componentes principales
const Auth = lazy(() => import("../components/screens/AuthScreen"));
const Layout = lazy(() => import("../components/templates/Layout"));
const Dashboard = lazy(() => import("../components/screens/DashboardScreen"));
const Products = lazy(() => import("../components/screens/ProductsScreen"));

const FileHistory = lazy(
  () => import("../components/screens/FileHistoryScreen")
);
const Evaluation = lazy(() => import("../components/screens/EvaluationScreen"));
const UnauthorizedErrorScreen = lazy(
  () => import("../components/screens/errors/401")
);

// rutas de rol
const EvaluatorRoutes = lazy(() => import("./EvaluatorRoutes"));
const ResearcherRoutes = lazy(() => import("./ResearcherRoutes"));

// rutas de ajustes
const Account = lazy(
  () => import("../components/screens/settings/AccountScreen")
);

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/" element={<Navigate to="/auth" />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/no-autorizado" element={<UnauthorizedErrorScreen />} />

          <Route path="/" element={<Layout />}>
            <Route path="cuenta" element={<Account />} />
            <Route path="estadisticas" element={<Dashboard />} />
            <Route path="productos" element={<Products />} />


          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};
