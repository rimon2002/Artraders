import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

function DueSystem() {
  const [dueAmount, setDueAmount] = useState(0);
  const [customerDue, setCustomerDue] = useState({
    name: "John Doe",
    due: 100,
  });

  const handleAddDue = () => {
    setCustomerDue({ ...customerDue, due: customerDue.due + dueAmount });
  };

  const handleClearDue = () => {
    setCustomerDue({ ...customerDue, due: 0 });
  };

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Manage Dues for {customerDue.name}
      </Typography>
      <Typography variant="body1">Current Due: {customerDue.due}</Typography>
      <TextField
        label="Add Due Amount"
        type="number"
        value={dueAmount}
        onChange={(e) => setDueAmount(Number(e.target.value))}
        fullWidth
        sx={{ mb: 2 }}
      />
      <Button
        variant="contained"
        color="primary"
        fullWidth
        onClick={handleAddDue}
      >
        Add Due
      </Button>
      <Button
        variant="contained"
        color="secondary"
        fullWidth
        onClick={handleClearDue}
        sx={{ mt: 2 }}
      >
        Clear Due
      </Button>
    </Box>
  );
}

export default DueSystem;
