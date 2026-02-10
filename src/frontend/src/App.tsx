import { RouterProvider, createRouter, createRootRoute, createRoute, createHashHistory } from '@tanstack/react-router';
import Home from './pages/Home';
import AdminWishes from './pages/AdminWishes';

// Create root route without a component (no shared layout)
const rootRoute = createRootRoute();

// Create home route
const homeRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Home,
});

// Create admin wishes route
const wishesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/wishes',
  component: AdminWishes,
});

// Create route tree
const routeTree = rootRoute.addChildren([homeRoute, wishesRoute]);

// Create hash history for IC compatibility
const hashHistory = createHashHistory();

// Create router instance with hash history
const router = createRouter({ 
  routeTree,
  history: hashHistory,
  defaultPreload: 'intent',
});

// Register router for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return <RouterProvider router={router} />;
}
