let baseUrl = "https://jsonplaceholder.typicode.com/users/";
let usuarios = [];
function ObtenerDatos() {
  fetch(baseUrl)
    .then(response => response.json())
    .then(data => {
      usuarios = data;
      console.log(usuarios);
      ImprimirUsuarios();
    });
}

function ImprimirUsuarios() {
  let contenedor = document.querySelector('#myTable tbody');
  contenedor.innerHTML = "";

  usuarios.forEach(users => {
    contenedor.innerHTML += MapearUsuarios(users);
  });
}

function MapearUsuarios(variable) {
  return `<tr>
  <td>${variable.id}</td>
  <td>${variable.name}</td>
  <td>${variable.email}</td>
  <td>
    <button class='btn btn-danger btn-sm' onclick="EliminarUsuarios(${variable.id})">Eliminar</button>
    <button class='btn btn-warning btn-sm' onclick="PopularDatosCampos(${variable.id})">Actualizar</button>
    </td>
</tr>`;
}

