import { useState } from "react";
import {
  Button,
  TextField,
  Typography,
  Alert,
  CircularProgress,
  Stack,
  Paper,
  Box,
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
    <Box>
      <Paper
        elevation={3}
        sx={{
          padding: 4,
          borderRadius: 3,
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <form onSubmit={handleSubmit}>
          <Stack spacing={3}>
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", textAlign: "center", color: "#1976d2" }}
            >
              Add a New Note
            </Typography>

            {error && (
              <Alert severity="error">
                {error}
              </Alert>
            )}

            <TextField
              label="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              fullWidth
              required
              variant="outlined"
              sx={{ backgroundColor: "#f9f9f9" }}
            />

            <TextField
              label="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              fullWidth
              multiline
              rows={4}
              required
              variant="outlined"
              sx={{ backgroundColor: "#f9f9f9" }}
            />

            <Button
              type="submit"
              variant="contained"
              disabled={isSaving}
              size="large"
              sx={{ alignSelf: "center", width: "150px" }}
            >
              {isSaving ? <CircularProgress size={24} /> : "Add Note"}
            </Button>
          </Stack>
        </form>
      </Paper>
    </Box>
  );
};

export default AddNote;

// "Why show spinner here? The spinner provides visual feedback that the app is processing the request, improving the UX when saving the note."
// "Why display error banner? The error banner ensures that the user is aware if something goes wrong during the note saving process."
