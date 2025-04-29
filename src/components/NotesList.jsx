import { useEffect, useState } from "react";
import { getNotes } from "../utils/Storage";
import {
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
  Divider,
} from "@mui/material";

// "Why useEffect to sync storage → state? useEffect is used to ensure that the component loads the latest notes from localStorage whenever the `refreshTrigger` changes."

export default function NotesList({ refreshTrigger }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, [refreshTrigger]);

  return (
    <Box>
      <Typography
        variant="h4"
        gutterBottom
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          color: "blue",
          mb: 4,
        }}
      >
        All Notes
      </Typography>

      {notes.length === 0 ? (
        <Typography
          variant="body1"
          sx={{ textAlign: "center", fontStyle: "italic", color: "gray" }}
        >
          No notes available. Please add a note!
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {notes.map((note, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card
                variant="outlined"
                sx={{
                  height: "100%",
                  transition: "0.4s",
                  boxShadow: 3,
                  ":hover": {
                    boxShadow: 6,
                    transform: "scale(1.02)",
                    opacity:0.8
                  },
                }}
              >
                <CardContent>
                  <Typography
                    variant="h6"
                    sx={{ fontWeight: "bold", mb: 1, color: "#333" }}
                  >
                    {note.title}
                  </Typography>
                  <Divider sx={{ mb: 1 }} />
                  <Typography
                    variant="body2"
                    sx={{ color: "#555", lineHeight: 1.5 }}
                  >
                    {note.content.length > 100
                      ? note.content.slice(0, 100) + "..."
                      : note.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
