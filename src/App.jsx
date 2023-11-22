import { Route, Routes } from "react-router-dom";
import "./App.css";
import FormInput from "./components/shared/FormInput";
import LogIn from "./pages/auth/LogIn";
import SignUp from "./pages/auth/SignUp";

function App() {
  return (
    <Routes>
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<LogIn />} />
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
