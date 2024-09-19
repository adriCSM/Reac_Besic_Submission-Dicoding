import React from 'react';
import { showFormattedDate } from '../../utils/index';
import Button from '../elements/Button';

export default function NoteList({ notes, arsipNote, deleteNote }) {
  const activeNotes = notes.filter((note) => !note.archived);

  return (
    <div>
      <h2 className="note-item__title">Catatan Aktif</h2>
      {!activeNotes.length ? (
        <div className="notes-list__empty-message">Tidak ada catatan</div>
      ) : (
        <div className="notes-list">
          {activeNotes.map((note) => (
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
                  onClick={() => deleteNote(note.id)}
                />
                <Button
                  className="note-item__archive-button"
                  name={'Arsipkan'}
                  onClick={() => arsipNote(note.id)}
                />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
