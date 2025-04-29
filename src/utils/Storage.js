const STORAGE_KEY = "My-Storage-Key";

export const getNotes = () => {
  try {
    const notes = localStorage.getItem(STORAGE_KEY);
    return notes ? JSON.parse(notes) : [];
  } catch (err) {
    console.error("Read error:", err);
    return [];
  }
};

export const saveNote = (note) => {
  try {
    const existing = getNotes();
    const updated = [...existing, note];
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
    return true;
  } catch (err) {
    console.error("Write error:", err);
    return false;
  }
};

// "Why localStorage + key naming? Using localStorage allows us to persist the notes across page reloads, and `My-Storage-Key` is chosen as a unique identifier to avoid conflicts."
