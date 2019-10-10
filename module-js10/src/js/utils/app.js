import {NOTE_ACTIONS} from './constants';
import initialNotes from '../../assets/notes.json';
import Notepad from './notepad';
import {renderNoteList, addListItem, removeNote, getRefs} from './view';


const notepad = new Notepad(initialNotes);
const refs = getRefs();

renderNoteList(refs.ul, notepad.notes);

const handleEditorSubmit = evt => {
    evt.preventDefault();
    const [input, textarea] = evt.target.elements;
  
    if (input.value.trim() === '' || textarea.value.trim() === '') {
      return alert('Необходимо заполнить все поля!');
    };
  
    const noteTitle = input.value;
    const noteBody = textarea.value;
    const note = notepad.saveUserInput(noteTitle, noteBody);
  
    addListItem(refs.ul, note);
    evt.currentTarget.reset();
  };
  
  const handleNoteClick = ({target}) => {
    if (target.nodeName !== 'I') return;
    const action = target.closest('button').dataset.action;
  
    switch (action) {
      case NOTE_ACTIONS.DELETE:
        removeNote(target);
        break;
  
      case NOTE_ACTIONS.EDIT:
        // coming soon...
        break;
  
      case NOTE_ACTIONS.DECREASE_PRIORITY:
        // coming soon...
        break;
  
      case NOTE_ACTIONS.INCREASE_PRIORITY:
        // coming soon...
        break;
    }
  };
  
  const handleFilterInput = ({target}) => {
    const filteredNotes = notepad.filterNotesByQuery(target.value);
    renderNoteList(refs.ul, filteredNotes);
  };
  
  refs.form.addEventListener('submit', handleEditorSubmit);
  refs.ul.addEventListener('click', handleNoteClick);
  refs.searchInput.addEventListener('input', handleFilterInput);
  