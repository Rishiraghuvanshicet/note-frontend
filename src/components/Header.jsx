import { Tabs, Tab } from "@mui/material";

const Header = ({ value, onChange }) => {
  return (
    <Tabs value={value} onChange={onChange} centered>
      <Tab label="Add Note" />
      <Tab label="View Notes" />
    </Tabs>
  );
};

export default Header;

// "Why this nav approach for simplicity? Using Tabs provides a clear and easy-to-use navigation structure with two simple options—adding a note or viewing the list."
