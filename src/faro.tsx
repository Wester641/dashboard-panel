import { matchRoutes } from "react-router-dom";
import {
  initializeFaro,
  createReactRouterV6DataOptions,
  ReactIntegration,
  getWebInstrumentations,
} from "@grafana/faro-react";
import { TracingInstrumentation } from "@grafana/faro-web-tracing";

initializeFaro({
  url:
    import.meta.env.VITE_FARO_COLLECTOR_URL ||
    "https://faro-collector-prod-us-west-0.grafana.net/collect/5d219d05e94e58278eb9d20a79915322",
  app: {
    name: "lnm-frontend",
    version: "1.0.0",
    environment: import.meta.env.MODE,
  },

  instrumentations: [
    ...getWebInstrumentations(),
    new TracingInstrumentation(),
    new ReactIntegration({
      router: createReactRouterV6DataOptions({ matchRoutes }),
    }),
  ],
});
