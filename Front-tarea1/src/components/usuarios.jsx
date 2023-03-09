import React from "react";
import { useState, useEffect } from "react";
import personaAxios from "../axios/Axios";

const usuarios = () => {
  const [usuarios, setUsuarios] = useState([]);
  const [usarioBuscado, setUsuarioBuscado] = useState([]);
  const [busqueda, setBusqueda] = useState("");
  const [buscando, setBuscando] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await personaAxios.post("/user/searchById", {
        id: busqueda,
      });

      setUsuarioBuscado([response.data.usuario]);
      setBuscando(true);

      if (response.data.usuario == null) {
        setBuscando(false);
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await personaAxios.get("/user/getusers");
        setUsuarios(response.data.usuarios);
        setBuscando(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      <div className="mb-6">
        <form onSubmit={handleSubmit}>
          <label
            htmlFor="default-search"
            className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Buscar por ID
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-200 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Buscar por ID"
              value={busqueda}
              onChange={(event) => setBusqueda(event.target.value)}
              name="id"
            />
            <button
              type="submit"
              className="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>
      </div>
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left  ">
          <thead className="text-xs  uppercase text-white dark:bg-red-700 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                id
              </th>
              <th scope="col" className="px-6 py-3">
                nombre
              </th>
              <th scope="col" className="px-6 py-3">
                apellido
              </th>
              <th scope="col" className="px-6 py-3">
                email
              </th>
              <th scope="col" className="px-6 py-3">
                genero
              </th>
              <th scope="col" className="px-6 py-3">
                ip
              </th>
            </tr>
          </thead>
          <tbody>
            {buscando
              ? usarioBuscado &&
                usarioBuscado.map((usuario) => (
                  <tr
                    className="bg-white border-b  dark:border-gray-700"
                    key={usuario.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      {usuario.id}
                    </th>
                    <td className="px-6 py-4">{usuario.first_name}</td>
                    <td className="px-6 py-4">{usuario.last_name}</td>
                    <td className="px-6 py-4">{usuario.email}</td>
                    <td className="px-6 py-4">{usuario.gender}</td>
                    <td className="px-6 py-4">{usuario.ip_address}</td>
                  </tr>
                ))
              : usuarios.map((user) => (
                  <tr
                    className="bg-white border-b  dark:border-gray-700"
                    key={user.id}
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium  whitespace-nowrap "
                    >
                      {user.id}
                    </th>
                    <td className="px-6 py-4">{user.first_name}</td>
                    <td className="px-6 py-4">{user.last_name}</td>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.gender}</td>
                    <td className="px-6 py-4">{user.ip_address}</td>
                  </tr>
                ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default usuarios;
