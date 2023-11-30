import { useState, useEffect, useCallback } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Hacer la solicitud a la API al montar el componente
    axios
      .get("https://reqres.in/api/users?page=2")
      .then((response) => {
        // Actualizar el estado con la lista de usuarios
        setUsers(response.data.data);
      })
      .catch((error) => {
        console.error("Error al obtener la lista de usuarios:", error);
      });
  }, []); // El segundo parámetro [] asegura que useEffect se ejecute solo una vez al montar el componente

  return (
    <>
      <Table striped bordered hover variant="dark" id="user-list">
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.first_name}</td> {/* Cambio aquí */}
              <td>{user.last_name}</td> {/* Cambio aquí */}
              <td>
                <Button
                  variant="info"
                  type="button"
                  onClick={() => handleEdit(user)}
                >
                  Edit
                </Button>
                <Button
                  variant="success"
                  type="button"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default UserList;
