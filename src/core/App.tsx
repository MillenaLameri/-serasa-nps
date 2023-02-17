import { AppRoutes } from "../routes/AppRoutes";
import "./../App.css";
import { SnackbarProvider } from "notistack";

export const App = () => {
  return (
    <div className="App">
      <SnackbarProvider
        maxSnack={3}
        autoHideDuration={2000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <AppRoutes />
      </SnackbarProvider>
    </div>
  );
};
