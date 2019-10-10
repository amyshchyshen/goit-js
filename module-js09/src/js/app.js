'use strict';

//
class Notepad {
  constructor(notes) {
    this._notes = notes;
  }

  static Priority = {
    LOW: 0,
    NORMAL: 1,
    HIGH: 2,
  };

  get notes() {
    return this._notes;
  }

  static generateUniqueId = () =>
    Math.random()
      .toString(36)
      .substring(2, 15) +
    Math.random()
      .toString(36)
      .substring(2, 15);

  get notes() {
    return this._notes;
  }

  saveUserInput(userTitle, userBody) {
    const newItem = {
      id: Notepad.generateUniqueId(),
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
    let searchPriority = [];
    let notesByPriority = this._notes.map(note => {
      if (note.priority === priority) {
        searchPriority.push(note);
        }
    })
    return searchPriority;
  }  
}
//
const PRIORITY_TYPES = {
  LOW: 0,
  NORMAL: 1,
  HIGH: 2,
};

const ICON_TYPES = {
  EDIT: 'edit',
  DELETE: 'delete',
  ARROW_DOWN: 'expand_more',
  ARROW_UP: 'expand_less',
};

const NOTE_ACTIONS = {
  DELETE: 'delete-note',
  EDIT: 'edit-note',
  INCREASE_PRIORITY: 'increase-priority',
  DECREASE_PRIORITY: 'decrease-priority',
};

const initialNotes = [
  {
    id: 'id-1',
    title: 'JavaScript essentials',
    body:
      'Get comfortable with all basic JavaScript concepts: variables, loops, arrays, branching, objects, functions, scopes, prototypes etc',
    priority: PRIORITY_TYPES.HIGH,
  },
  {
    id: 'id-2',
    title: 'Refresh HTML and CSS',
    body:
      'Need to refresh HTML and CSS concepts, after learning some JavaScript. Maybe get to know CSS Grid and PostCSS, they seem to be trending.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-3',
    title: 'Get comfy with Frontend frameworks',
    body:
      'First should get some general knowledge about frameworks, then maybe try each one for a week or so. Need to choose between React, Vue and Angular, by reading articles and watching videos.',
    priority: PRIORITY_TYPES.NORMAL,
  },
  {
    id: 'id-4',
    title: 'Winter clothes',
    body:
      "Winter is coming! Need some really warm clothes: shoes, sweater, hat, jacket, scarf etc. Maybe should get a set of sportwear as well so I'll be able to do some excercises in the park.",
    priority: PRIORITY_TYPES.LOW,
  },
];

const notepad = new Notepad(initialNotes);

const refs = {
    ul: document.querySelector('.note-list'),
    button: document.querySelector('.button--wide'),
    form: document.querySelector('.note-editor'),
    searchInput: document.querySelector('.search-form__input'),
    titleInput: document.querySelector('input.note-editor__input'),
    bodyInput: document.querySelector('textarea.note-editor__input'),
};

//CREATE ELEMENTS

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

const renderNoteList = (listRef, notes) => {
    const renderList = notes.map(elem => createListItem(elem));
    listRef.innerHTML = '';
    listRef.append(...renderList);
  };
  

//EVENTS (HW-9)

  const addListItem = (listRef, note) => {
    const listItem = createListItem(note);
    listRef.appendChild(listItem);
  };

  const removeNote = element => {
    const parentListItem = element.closest('.note-list__item');
    const id = parentListItem.dataset.id;
    notepad.deleteNote(id);
    parentListItem.remove();
  };

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


  