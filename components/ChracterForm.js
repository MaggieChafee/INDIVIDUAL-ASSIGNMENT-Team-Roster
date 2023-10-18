import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Form } from 'react-bootstrap';
import { useRouter } from 'next/router';
import { useAuth } from '../utils/context/authContext';
import { createCharacter, updateCharacter } from '../api/characterData';

const initialState = {
  name: '',
  image: '',
};

function CharacterForm({ obj }) {
  const [formInput, setFormInput] = useState(initialState);
  const { user } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (obj.firebaseKey) setFormInput(obj);
  }, [obj, user]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormInput((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (obj.firebaseKey) {
      updateCharacter(formInput).then(() => router.push('/characters'));
    } else {
      const payload = { ...formInput, uid: user.uid };
      createCharacter(payload).then(({ name }) => {
        const patchPayload = { firebaseKey: name };
        updateCharacter(patchPayload).then(() => {
          router.push('/characters');
        });
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control placeholder="Name" name="name" value={formInput.name} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Image</Form.Label>
          <Form.Control placeholder="Image" name="image" value={formInput.image} onChange={handleChange} required />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Role</Form.Label>
          <Form.Control placeholder="Role" name="role" value={formInput.role} onChange={handleChange} required />
        </Form.Group>
        <Button type="submit" variant="dark">{obj.firebaseKey ? 'Update' : 'Create'} Character</Button>
      </Form>
    </>
  );
}

CharacterForm.propTypes = {
  obj: PropTypes.shape({
    name: PropTypes.string,
    image: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
  }),
};

CharacterForm.defaultProps = {
  obj: initialState,
};

export default CharacterForm;
