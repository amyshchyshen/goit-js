import noteTemplate from '../../templates/note.hbs';
import storage from './storage';

const createListItemMarkup = note => {
  return noteTemplate(note);
};

const createItemsListMarkup = notes => {
 return notes.map(note => createListItemMarkup(note)).join('');
};

const renderNotesList = (listRef, notes) => {
  listRef.innerHTML = '';
  const savedNotes = storage.load('notes');

  if (savedNotes) {
    return listRef.insertAdjacentHTML('beforeend', createItemsListMarkup(savedNotes))
  }

  listRef.insertAdjacentHTML('beforeend', createItemsListMarkup(notes));
};

const renderFilteredNotes = (listRef, notes) => {
  listRef.innerHTML = '';
  listRef.insertAdjacentHTML('beforeend', createItemsListMarkup(notes));
};

const addListItem = (listRef, note) => {
  const listItem = createListItemMarkup(note);
  listRef.insertAdjacentHTML('beforeend', listItem);
};

const findParentListItem = element => {
  const parentListItem = element.closest('.note-list__item');

  return parentListItem;
}

const removeNote = listItem => {
  listItem.remove();
};

const getRefs = () => ({
  searchInput: document.querySelector('.search-form__input'),
  form: document.querySelector('.note-editor'),
  ul: document.querySelector('.note-list'),
  openEditorModalBtn: document.querySelector('button[data-action="open-editor"]'),
});

export default {renderNotesList, renderFilteredNotes, addListItem, findParentListItem, removeNote, getRefs};