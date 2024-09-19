import React from 'react';
import { showFormattedDate } from '../../utils/index';
import Button from '../elements/Button';

export default function NoteArsip({ notes, deleteNoteFromArsip, moveArsipToNotes }) {
  const archivedNotes = notes.filter((note) => note.archived);
  return (
    <div>
      <h2 className="note-item__title">Arsip</h2>
      {!archivedNotes.length ? (
        <div className="notes-list__empty-message">Tidak ada Arsip</div>
      ) : (
        <div className="notes-list">
          {archivedNotes.map((note) => (
            <div className="note-item" key={note.id}>
              <div className="note-item__content">
                <h4 className="note-item__title">{note.title}</h4>
                <p className="note-item__date">{showFormattedDate(note.createdAt)}</p>
                <p className="note-item__body">{note.body}</p>
              </div>
              <div className="note-item__action">
                <Button
                  className="note-item__delete-button"
                  name={'Delete'}
                  onClick={() => deleteNoteFromArsip(note.id)}
                />
                <Button
                  className="note-item__archive-button"
                  name={'Pindahkan'}
                  onClick={() => moveArsipToNotes(note.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
