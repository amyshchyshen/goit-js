import {PRIORITY_TYPES} from './constants';
import shortid from 'shortid';

export default class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  get notes() {
    return this._notes;
  }

  saveUserInput(userTitle, userBody) {
    const newItem = {
      id: shortid.generate(),
      title: userTitle,
      body: userBody,
      priority: PRIORITY_TYPES.LOW,
    }
    return this.saveNote(newItem);
  }

  saveNote(note) {
    this._notes.push(note);
    return note;
  }

  findNoteById(id) {
    return this._notes.find(note => note.id === id);
  }

  deleteNote(id) {
    let noteForDelete = this.findNoteById(id);
    this._notes.splice(this._notes.indexOf(noteForDelete), 1);
  }

  updateNoteContent(id, updatedContent) {
    let noteForUpdate = this.findNoteById(id);
    const updatedNote = {...noteForUpdate, ...updatedContent};
    this._notes.splice(this._notes.indexOf(noteForUpdate), 1, updatedNote);
    return updatedNote;
  }

  updateNotePriority(id, priority) {
    let noteChangePriority = this._notes.map(note => 
      this.findNoteById(id)
        ? {
          ...note, 
          priority: note.priority = priority
        }
        : this._notes
    )
  }

  filterNotesByQuery(query) {
    let searchNote = [];
    let notesByQuery = this._notes.map(note => {
    if (note.title.toLowerCase().includes(query.toLowerCase()) || 
    note.body.toLowerCase().includes(query.toLowerCase)) {
      searchNote.push(note)
    }
   })
   return searchNote;
  }

  filterNotesByPriority(priority) {
    let searchResult = [];
    for (let key of this._notes) {
      if (key.priority === priority) {
        searchResult.push(key);
      }
    }
    return searchResult;
  }
}