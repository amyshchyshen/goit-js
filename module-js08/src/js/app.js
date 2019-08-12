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

  saveNote(note) {
    this._notes.push(note);
    return note;
  }

  findNoteById(id) {
    let findNote = {};
    for (let key of this._notes) {
      if (key.id === id) {
        findNote = key;
        return findNote;
      }
    }
    return undefined;
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
    let noteChangePriority = this.findNoteById(id);
    noteChangePriority.priority = priority;
    return noteChangePriority;
  }

  filterNotesByQuery(query) {
    let searchNote = [];
    for (let key of this._notes) {
      if (key.title.toLowerCase().includes(query.toLowerCase()) || 
      key.body.toLowerCase().includes(query.toLowerCase)) {
        searchNote.push(key);
      }
    }
    return searchNote;
  }

  filterNotesByPriority(priority) {
    let searchPriority = [];
    for (let key of this._notes) {
      if (key.priority === priority) {
        searchPriority.push(key);
      }
    }
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

// Maksim

const ref = {
  ul: document.querySelector('.note-list'),
};

const createElement = (tag, className) => {
  const createElement = document.createElement(tag);
  createElement.classList.add(className);
  return createElement;
};

const createListItem = note => {
  const listItem = createElement('li', 'note-list__item');
  const notes = createElement('div', 'note');
  //title
  const noteContent = createElement('div', 'note__content');
  const title = createElement('h2', 'note__title');
  title.textContent = note.title;
  //body
  const body = createElement('p', 'note__body');
  body.textContent = note.body;
  noteContent.append(title, body);
  notes.append(noteContent);
  listItem.append(notes);
  return listItem;
};
const renderNoteList = (listRef, notes) => {
  const renderList = notes.map(elem => createListItem(elem));
  listRef.append(...renderList);
};

renderNoteList(ref.ul, notes.note);

createElement('div', 'list')

// Repeta

// const createListItem = () => {
//   const listItem = document.createElement('li');
//   listItem.classList.add('list-item');
  
//   const body = document.createElement('p');
//   body.classList.add('note-body');
//   body.textContent = 
//   'Winter is coming! Winter is coming! Winter is coming!';
  
//   listItem.appendChild(body);
  
//   const actionButtons = document.createElement('div');
//   actionButtons.classList.add('action');
  
//   const editButton = document.createElement('button');
//   editButton.classList.add('btn');
//   editButton.textContent = 'Edit';
  
//   const deleteButton = document.createElement('button');
//   deleteButton.classList.add('btn');
//   deleteButton.textContent = 'Delete';
  
//   actionButtons.appendChild(editButton);
//   actionButtons.appendChild(deleteButton);
  
//   listItem.appendChild(body);
//   listItem.appendChild(actionButtons);

//   return listItem;
// };

// const noteList = document.querySelector('.note-list');

// const item = createListItem();

// ref.ul.appendChild(item);
// console.log(item);;