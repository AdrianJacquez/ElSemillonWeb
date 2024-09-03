import { useRef } from "react";
import emailjs from "emailjs-com";

import Swal from "sweetalert2/dist/sweetalert2.js";
import "sweetalert2/src/sweetalert2.scss";

const Formulario = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_webam7n",
        "template_vey10uc",
        form.current,
        "WZwBh09ICLymbEYJW"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            position: "center",
            icon: "success",
            title: "!Enviado Con Exito¡",
            showConfirmButton: false,
            timer: 1500,
            background: "#D8E8DD",
            iconColor: "#078610",
            textColor: "",
          });
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
          Swal.fire({
            icon: "error",
            title: "No Se Pudo Enviar",
            text: "Something went wrong!",
            showConfirmButton: false,
            timer: 1500,
            background: "#D8E8DD",
            iconColor: "#078610",
          });
        }
      );
  };

  return (
    /*Formulario*/
    <div className="w-full md:w-1/2">
      <form
        id="formContacto"
        ref={form}
        onSubmit={sendEmail}
        className="max-w-md mx-auto p-6 bg-green-50 rounded-lg shadow-md shadow-black"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-green-900">
          Formulario de Contacto
        </h2>

        <div className="mb-4">
          <label
            for="name"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Nombre
          </label>
          <input
            type="text"
            id="name"
            name="name"
            required
            maxlength="50"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
            placeholder="nombre"
          />
        </div>

        <div className="mb-4">
          <label
            for="email"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            maxlength="100"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
            placeholder="correo@email.com"
            pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
          />
        </div>

        <div className="mb-4">
          <label
            for="subject"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Asunto
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            maxlength="200"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-green-500"
            placeholder="Asunto del mensaje"
          />
        </div>

        <div className="mb-6">
          <label
            for="message"
            className="block mb-2 text-sm font-medium text-gray-700"
          >
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            rows="4"
            required
            maxlength="800"
            className="w-full px-3 py-2 text-gray-700 border rounded-lg min-h-24 max-h-96 focus:outline-none focus:border-green-500"
            placeholder="Tu mensaje aquí"
          ></textarea>
        </div>

        <div className="text-center">
          <button
            type="submit"
            className="px-4 py-2 text-white bg-green-500 rounded-lg hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 transition-colors duration-300"
          >
            Enviar Mensaje
          </button>
        </div>
      </form>
    </div>
  );
};

export default Formulario;
