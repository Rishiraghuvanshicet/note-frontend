import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Stack,
} from "@mui/material";
import { saveNote } from "../utils/Storage";

const AddNote = ({ onNoteAdded }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [isSaving, setIsSaving] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSaving(true);
    setError(null);

    const newNote = {
      id: new Date().toISOString(),
      title,
      content,
    };

    // "Why useState + this submit handler? useState is used for controlled inputs, ensuring the form values are synced with the state and the form is reset upon successful submission."
    const success = saveNote(newNote);
    if (success) {
      onNoteAdded();
      setTitle("");
      setContent("");
    } else {
      setError("Failed to save note.");
    }

    setIsSaving(false);
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack spacing={2}>
        <Typography variant="h5">Add a New Note</Typography>

        {error && <Alert severity="error">{error}</Alert>}

        <TextField
          label="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          fullWidth
          required
        />

        <TextField
          label="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          fullWidth
          multiline
          rows={4}
          required
        />

        <Button type="submit" variant="contained" disabled={isSaving}>
          {isSaving ? <CircularProgress size={24} /> : "Add Note"}
        </Button>
      </Stack>
    </form>
  );
};

export default AddNote;

// "Why show spinner here? The spinner provides visual feedback that the app is processing the request, improving the UX when saving the note."
// "Why display error banner? The error banner ensures that the user is aware if something goes wrong during the note saving process."
