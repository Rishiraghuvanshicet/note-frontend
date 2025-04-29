import { useEffect, useState } from "react";
import { getNotes } from "../utils/Storage";
import { Card, CardContent, Typography, Grid } from "@mui/material";

// "Why useEffect to sync storage → state? useEffect is used to ensure that the component loads the latest notes from localStorage whenever the `refreshTrigger` changes."


export default function NotesList({ refreshTrigger }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    setNotes(getNotes());
  }, [refreshTrigger]);

  return (
    <div>
      <Typography variant="h5" gutterBottom>
        All Notes
      </Typography>
      <Grid container spacing={2}>
        {notes.map((note, index) => (
          <Grid item xs={12} sm={6} key={index}>
            <Card variant="outlined">
              <CardContent>
                <Typography variant="h6">{note.title}</Typography>
                <Typography variant="body2">
                  {note.content.slice(0, 100)}...
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

