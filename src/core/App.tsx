import { AppRoutes } from "../routes/AppRoutes";
import { SnackbarProvider } from "notistack";
import "./../App.css";

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
