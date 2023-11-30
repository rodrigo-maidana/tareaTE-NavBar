import { useCallback, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import PropTypes from "prop-types";
import axios from "axios";

function UserForm({ user, onSubmit, setUser }) {
  const handeFirstNameChange = useCallback(
    (event) => {
      setUser({ ...user, firstName: event.target.value });
    },
    [user, setUser]
  );

  const handeLastNameChange = useCallback(
    (event) => {
      setUser({ ...user, lastName: event.target.value });
    },
    [user, setUser]
  );

  const handleSubmit = useCallback(() => {
    //realiza POST si el usuario es nuevo o PUT si edita el usuario
    const request = user.id
      ? axios.put(`https://reqres.in/api/users/${user.id}`, user)
      : axios.post("https://reqres.in/api/users", user);

    request
      .then((response) => {
        console.log("operacion exitosa: ", response.data);
        onSubmit();
      })
      .catch((error) => {
        console.log("Error en la operacion: ", error);
      });
    //onSubmit();
  }, [onSubmit, user]);

  return (
    <Form className="user-form">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter first name"
          value={user?.firstName}
          onChange={handeFirstNameChange}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter last name"
          value={user?.lastName}
          onChange={handeLastNameChange}
        />
      </Form.Group>
      <Button variant="primary" type="button" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

UserForm.propTypes = {
  user: PropTypes.object,
  onSubmit: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

UserForm.defaultProps = {
  users: {},
};

export default UserForm;
