import { useState } from "react";
import { Container, Tabs, Tab } from "@mui/material";

const App = () => {
  const [tab, setTab] = useState(0);
  const [refresh, setRefresh] = useState(false);

  const handleChange = (event) => setTab(event.target.value);

  return (
    <Container maxWidth="md" sx={{ mt: "4" }}>
      <Tabs value={tab} onChange={handleChange} centered>
        <Tab label="Add Note" />
        <Tab label="View Notes" />
      </Tabs>
    </Container>
  );
};
export default App;
