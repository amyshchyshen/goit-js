import {PRIORITY_TYPES, ICON_TYPES, NOTE_ACTIONS} from './constants';
import Notepad from './notepad';
import initialNotes from '../../assets/notes.json';
const notepad = new Notepad(initialNotes);

const createElement = (tag, className) => {
    const createElement = document.createElement(tag);
    createElement.classList.add(className);
    return createElement;
};


const createNoteContent = (obj) => {
  const noteContent = createElement('div', 'note-content');
  const noteTitle = createElement('h2', 'note-title');
  const noteBody = createElement('p', 'note-body');
  noteTitle.textContent = obj.title;
  noteBody.textContent = obj.body;

  noteContent.append(noteTitle, noteBody);

  return noteContent;
};


const createActionButton = (noteaction, icontypes) => {
  const actionButton = createElement('button', 'action');
  actionButton.dataset.action = noteaction;
  const buttonIcon = createElement('i', 'material-icons');
  buttonIcon.classList.add('action__icon');
  buttonIcon.textContent = icontypes;
  actionButton.append(buttonIcon);

  return actionButton;
};

const createNoteFooter = note => {
  const noteFooter = createElement('footer', 'note__footer');

  const noteSectionPriority = createElement('section', 'note__section');
  const spanPriority = createElement('span', 'note__priority');
  spanPriority.textContent = note.priority;
  noteSectionPriority.append(createActionButton(NOTE_ACTIONS.DECREASE_PRIORITY, ICON_TYPES.ARROW_DOWN));
  noteSectionPriority.append(createActionButton(NOTE_ACTIONS.INCREASE_PRIORITY, ICON_TYPES.ARROW_UP));
  noteSectionPriority.append(spanPriority);

  const noteSectionAction = createElement('section', 'note__section');
  noteSectionAction.append(createActionButton(NOTE_ACTIONS.EDIT, ICON_TYPES.EDIT));
  noteSectionAction.append(createActionButton(NOTE_ACTIONS.DELETE, ICON_TYPES.DELETE));

  noteFooter.append(noteSectionPriority, noteSectionAction);
  
  return noteFooter;
};

const createListItem = note => {
  const listItem = createElement('li', 'note-list__item');
  const notes = createElement('div', 'note');
  listItem.dataset.id = note.id;
  notes.append(createNoteContent(note), createNoteFooter(note));
  listItem.append(notes);
    
  return listItem;
};

export const renderNoteList = (listRef, notes) => {
    const renderList = notes.map(elem => createListItem(elem));
    listRef.innerHTML = '';
    listRef.append(...renderList);
  };

 export const addListItem = (listRef, note) => {
    const listItem = createListItem(note);
    listRef.appendChild(listItem);
  };

 export const removeNote = element => {
    const parentListItem = element.closest('.note-list__item');
    const id = parentListItem.dataset.id;
    notepad.deleteNote(id);
    parentListItem.remove();
  };

  export const getRefs = () => ({
    ul: document.querySelector('.note-list'),
    button: document.querySelector('.button--wide'),
    form: document.querySelector('.note-editor'),
    searchInput: document.querySelector('.search-form__input'),
    titleInput: document.querySelector('input.note-editor__input'),
    bodyInput: document.querySelector('textarea.note-editor__input'),
});