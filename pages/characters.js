/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import Link from 'next/link';
import { useAuth } from '../utils/context/authContext';
import { getCharacters } from '../api/characterData';
import CharacterCard from '../components/CharacterCard';

export default function ViewCharacters() {
  const [char, setChar] = useState([]);

  const { user } = useAuth();

  const getAllChars = () => {
    getCharacters(user.uid).then(setChar);
  };

  useEffect(() => {
    getAllChars();
  }, []);

  return (
    <>
      <div
        id="characters-page"
        style={{
          padding: '30px',
        }}
      >
        <Link href="/character/new" passHref>
          <Button>New Character</Button>
        </Link>
      </div>
      <div className="d-flex flex-wrap">
        {char.map((chars) => (
          <CharacterCard key={chars.firebaseKey} charObj={chars} onUpdate={getAllChars} />
        ))}
      </div>
    </>
  );
}
