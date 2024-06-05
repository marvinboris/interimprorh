import { ScrollToTop } from "./components";
import { LayoutApp } from "./layouts";
import AppRoutes from "./routes";
import "./index.css";

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

// Create a client
const queryClient = new QueryClient();

createRoot(document.getElementById("app") || document.body).render(
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
        <LayoutApp>
            <BrowserRouter>
                <React.StrictMode>
                    <ScrollToTop />
                    <AppRoutes />
                </React.StrictMode>
            </BrowserRouter>
        </LayoutApp>
    </QueryClientProvider>
);
