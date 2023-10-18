/* eslint-disable react-hooks/exhaustive-deps */
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { getSinglCharacter } from '../../../api/characterData';
import CharacterForm from '../../../components/ChracterForm';

export default function EditCharacter() {
  const [editChar, setEditChar] = useState({});
  const router = useRouter();
  const { firebaseKey } = router.query;
  useEffect(() => {
    getSinglCharacter(firebaseKey).then(setEditChar);
  }, [firebaseKey]);

  return (
    <CharacterForm obj={editChar} />
  );
}
