import React from 'react';
import NoteArsip from '../fragments/NoteArsip';
import NoteInput from '../fragments/NoteInput';
import NoteList from '../fragments/NoteList';
import { getInitialData } from '../../utils/index';
import NotesNav from '../fragments/NoteNav';

export default class NotesApps extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchQuery: '',
    };
    this.addNoteEventHandler = this.addNoteEventHandler.bind(this);
    this.moveNoteToArsiptEventListener = this.moveNoteToArsiptEventListener.bind(this);
    this.deleteNoteEventListener = this.deleteNoteEventListener.bind(this);
    this.moveArsipToNotesEventListener = this.moveArsipToNotesEventListener.bind(this);
    this.searchNote = this.searchNote.bind(this);
  }

  // EVENT ADD NOTE
  addNoteEventHandler(note) {
    this.setState((prevState) => {
      return {
        notes: [...prevState.notes, note],
      };
    });
  }

  // EVENT MOVE NOTE TO ARSIP
  moveNoteToArsiptEventListener(id) {
    this.setState((prevState) => {
      const newNotes = prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: true } : note,
      );
      return {
        notes: newNotes,
      };
    });
  }

  // EVENT DELETE NOTE
  deleteNoteEventListener(id) {
    this.setState((prevState) => {
      const findNote = prevState.notes.find((note) => note.id === id);
      return {
        notes: prevState.notes.filter((note) => note.id !== id),
      };
    });
  }

  // EVENT MOVE ARSIP TO NOTES
  moveArsipToNotesEventListener(id) {
    this.setState((prevState) => {
      const newNotes = prevState.notes.map((note) =>
        note.id === id ? { ...note, archived: false } : note,
      );
      return {
        notes: newNotes,
      };
    });
  }

  // SEARCH NOTE
  searchNote(event) {
    this.setState({ searchQuery: event.target.value });
  }

  render() {
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchQuery.toLowerCase()),
    ); //Cara filter ini saya peroleh dari chat gpt, namun saya masih bingung mengapa filter dilakukan di dalam fungsi render bukannya di luar, mohon penjelasannya?

    return (
      <div>
        <NotesNav search={this.searchNote} />
        <div className="note-app__body">
          <NoteInput addNote={this.addNoteEventHandler} />

          <NoteList
            notes={filteredNotes}
            arsipNote={this.moveNoteToArsiptEventListener}
            deleteNote={this.deleteNoteEventListener}
          />
          <NoteArsip
            notes={filteredNotes}
            deleteNoteFromArsip={this.deleteNoteEventListener}
            moveArsipToNotes={this.moveArsipToNotesEventListener}
          />
        </div>
      </div>
    );
  }
}
