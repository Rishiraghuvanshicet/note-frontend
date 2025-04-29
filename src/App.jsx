import { useState } from "react";
import { Container, Box } from "@mui/material";
import Header from "./components/Header";
import AddNote from "./components/AddNote";
import NotesList from "./components/NotesList";

const App = () => {
  const [tab, setTab] = useState(0);
  const [refresh, setRefresh] = useState(false);

  // "Why useState for tab and refresh? useState ensures that the UI responds to changes in the selected tab and the note list refreshes upon adding a new note."
  const handleChange = (_, index) => setTab(index);
  const handleNoteAdded = () => setRefresh(!refresh);

  return (
    <Container maxWidth="md" sx={{ mt: "4" }}>
      <Header value={tab} onChange={handleChange} />
      <Box mt={3}>
        {tab === 0 ? (
          <AddNote onNoteAdded={handleNoteAdded} />
        ) : (
          <NotesList refreshTrigger={refresh} />
        )}
      </Box>
    </Container>
  );
};
export default App;
