import React from 'react';
import Input from '../elements/Input';
export default function NotesNav({ search }) {
  return (
    <nav className="note-app__header">
      <h1>ACSM | Notes App</h1>
      <Input type="text" placeholder="Cari catatan..." onChange={search} />
    </nav>
  );
}
