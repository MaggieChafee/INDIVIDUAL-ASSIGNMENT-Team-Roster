import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropTypes from 'prop-types';
import { deleteCharacter } from '../api/characterData';

function CharacterCard({ charObj, onUpdate }) {
  const deleteACharacter = () => {
    if (window.confirm(`Delete ${charObj.name}?`)) {
      deleteCharacter(charObj.firebaseKey).then(() => onUpdate());
    }
  };

  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={charObj.image} style={{ height: '100px', width: '180px' }} />
      <Card.Body>
        <Card.Title>{charObj.name}</Card.Title>
        <Card.Text>{charObj.role}</Card.Text>
        <Button variant="success" href={`/character/edit/${charObj.firebaseKey}`} passHref>Edit</Button>
        <Button variant="danger" onClick={deleteACharacter}>Delete</Button>
      </Card.Body>
    </Card>
  );
}

CharacterCard.propTypes = {
  charObj: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    role: PropTypes.string,
    firebaseKey: PropTypes.string,
  }).isRequired,
  onUpdate: PropTypes.func.isRequired,
};

export default CharacterCard;
