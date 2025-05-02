import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="flex items-center">
      <div className="gap-4 max-w-96 mx-auto flex flex-col items-center w-full">
        <h1 className="text-3xl font-bold">Faça seu login</h1>
        <form className="flex flex-col gap-2 w-full">
          <input
            type="email"
            className="w-full lg:flex border border-gray-300 py-2 px-4 rounded-full"
            placeholder="Digite seu e-mail"
          />
          <input
            type="password"
            className="w-full lg:flex border border-gray-300 py-2 px-4 rounded-full"
            placeholder="Digite sua senha"
          />
          <button className="cursor-pointer bg-primary text-white font-bold w-full lg:flex border border-gray-300 py-2 px-4 rounded-full">
            Login
          </button>
        </form>
        <p>
          Ainda não tem uma conta ?
          <Link to="/register" className="underline font-semibold">
            {" "}
            Registre-se aqui{" "}
          </Link>
        </p>
      </div>
    </section>
  );
};

export default Login;
