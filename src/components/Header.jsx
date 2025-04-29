import { Tabs, Tab, Box, Paper } from "@mui/material";
const Header = ({ value, onChange }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Paper elevation={3} sx={{ borderRadius: 2 }}>
        <Tabs value={value} onChange={onChange} centered
        sx={{
          fontWeight: "bold",
          fontFamily:'Arial, sans-serif'
        }}>
          <Tab label="Add Note" />
          <Tab label="View Notes" />
        </Tabs>
      </Paper>
    </Box>
  );
};

export default Header;

// "Why this nav approach for simplicity? Using Tabs provides a clear and easy-to-use navigation structure with two simple options—adding a note or viewing the list."
