import { useState } from "react";
import Swal from "sweetalert2";
import { auth } from "../firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import ojoCerrado from "../assets/icons/ojo-cerrado.png";
import ojoAbierto from "../assets/icons/ojo-abierto.png";
export const LoginComponent = () => {
  const [email, setEmail] = useState<string>("");
  const [constrasenia, setConstrasenia] = useState<string>("");
  const [visible, setVisible] = useState<boolean>(false);
  const logearse = () => {
    signInWithEmailAndPassword(auth, email, constrasenia)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          Swal.fire({
            title: "Éxito",
            text: "Se logueó correctamente",
            icon: "success",
          });
        }
        setEmail("");
        setConstrasenia("");
        setVisible(false);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        Swal.fire({
          icon: "error",
          title: `Opps ${errorCode}`,
          text: `${errorMessage}`,
        });
      });
  };

  return (
    <div
      className="flex flex-col lg:flex-row justify-center items-center min-h-screen"
      style={{ backgroundColor: "#223555" }}
    >
      <div className="w-full lg:w-1/2">
        <img
          src="https://miro.medium.com/v2/resize:fit:1080/1*vBi4Ycgdn5t3lu2SvQXuog.gif"
          alt="Login Illustration"
          className="object-cover w-full h-64 lg:h-screen"
        />
      </div>

      {/* Formulario */}
      <div className="p-8 sm:p-12 md:p-20 lg:p-36 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4 text-yellow-300">
          Inicie Sesión Para Continuar
        </h1>

        <div className="mb-4">
          <label htmlFor="username" className="block text-emerald-400">
            Correo Electrónico:
          </label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="text"
            id="username"
            name="username"
            className="w-full border text-white border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>

        <div className="mb-4 relative">
          <label htmlFor="password" className="block text-emerald-400">
            Contraseña:
          </label>
          <input
            value={constrasenia}
            onChange={(e) => setConstrasenia(e.target.value)}
            type={visible ? "text" : "password"}
            id="password"
            name="password"
            className="w-full border text-white border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
          <div className="h-6 w-6 cursor-pointer absolute top-8 right-3">
            <img
              className="h-auto max-w-full"
              src={visible ? ojoAbierto : ojoCerrado}
              alt="visible/unvisible icon"
              onClick={() => setVisible(!visible)}
            />
          </div>
        </div>

        <button
          onClick={logearse}
          type="button"
          className="bg-red-500 hover:bg-cyan-400 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Login
        </button>
      </div>
    </div>
  );
};
