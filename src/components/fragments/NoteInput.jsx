import React from 'react';
import Button from '../elements/Button';
import Input from '../elements/Input';
import TextArea from '../elements/TextArea';
import { showFormattedDate } from '../../utils/index';
export default class NoteInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      body: '',
      character: 50,
    };

    this.onTitleChangeEventHandler = this.onTitleChangeEventHandler.bind(this);
    this.onBodyChangeEventHandler = this.onBodyChangeEventHandler.bind(this);
    this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);
  }

  //  EVENT KETIKA TITLE DIISI
  onTitleChangeEventHandler(event) {
    this.setState((prevState) => {
      return {
        title: event.target.value,
        character: prevState.character - 1,
      };
    });
  }

  // EVENT KETIKA BODY DIISI
  onBodyChangeEventHandler(event) {
    this.setState(() => {
      return {
        body: event.target.value,
      };
    });
  }

  // EVENT KETIKA SUBMIT
  onSubmitEventHandler(event) {
    event.preventDefault();
    this.props.addNote({
      ...this.state,
      createdAt: showFormattedDate(+new Date()),
      archived: false,
      id: +new Date(),
    });
  }

  render() {
    return (
      <div className="note-input">
        <h2 className="note-input__title">Buat Catatan</h2>
        <p className="note-input__title__char-limit">Sisa karakter: {this.state.character}</p>
        <form onSubmit={this.onSubmitEventHandler}>
          <Input
            type="text"
            placeholder="Ini adalah judul..."
            max={50}
            value={this.state.title}
            onChange={this.onTitleChangeEventHandler}
          />
          <TextArea
            placeholder="Tuliskan catatanmu di sini..."
            value={this.state.body}
            onChange={this.onBodyChangeEventHandler}
          />
          <Button name={'Buat'} />
        </form>
      </div>
    );
  }
}
