import noteTemplate from '../../templates/note.hbs';

const createListItemMarkup = note => {
  return noteTemplate(note);
};

const createItemsListMarkup = notes => {
 return notes.map(note => createListItemMarkup(note)).join('');
};

export const renderNoteList = (listRef, notes) => {
  listRef.innerHTML = '';
  listRef.insertAdjacentHTML('beforeend', createItemsListMarkup(notes));
};

export const addListItem = (listRef, note) => {
  const listItem = createListItemMarkup(note);
  listRef.insertAdjacentHTML('beforeend', listItem);

};

export const findParentListItem = element => {
  const parentListItem = element.closest('.note-list__item');

  return parentListItem;
}

export const removeNote = listItem => {
  listItem.remove();
};

export const getRefs = () => ({
  searchInput: document.querySelector('.search-form__input'),
  form: document.querySelector('.note-editor'),
  ul: document.querySelector('.note-list'),
  openEditorModalBtn: document.querySelector('button[data-action="open-editor"]'),
});