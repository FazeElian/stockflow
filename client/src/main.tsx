import { createRoot } from 'react-dom/client'
import Router from './Router.tsx'

// Tanstack
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"

// Global styles
import "./assets/css/Global.css";

const queryClient = new QueryClient()

createRoot(document.getElementById('root')!).render(
  <QueryClientProvider client={queryClient}>
    <Router />
    <ReactQueryDevtools />
  </QueryClientProvider>
)
