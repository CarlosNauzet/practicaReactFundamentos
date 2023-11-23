import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";
import Layout from "./components/layout/Layout";
import AdvertsPage from "./pages/adverts/AdvertsPage";
import NewAdvertPage from "./pages/adverts/NewAdvertPage";
import AdvertDetailPage from "./pages/adverts/AdvertDetailPage";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
      <Route path="/adverts" element={<Layout />}>
        <Route index element={<AdvertsPage />} />
        <Route path="new" element={<NewAdvertPage />} />
        <Route path=":id" element={<AdvertDetailPage />} />
      </Route>
      <Route path="/" element={<Navigate replace to="/adverts" />} />
      <Route path="/404" element={<div>404 Page Not Found!</div>} />
      <Route path="*" element={<Navigate to="/404" />} />
    </Routes>
  );
}

export default App;

// crear componente log in
// usar componenters form-input & button dentro de log in
// recuerda importar el form.css
// crear estados para manejar los valores de los inputs
// crear eventos onsubmit y onChange (igual que en signup)
// crear una funcion en service ( que recibe los dos parametros de email y password)
