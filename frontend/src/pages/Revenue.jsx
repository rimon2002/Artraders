import { Box, Typography } from "@mui/material";

function Revenue() {
  const sales = [
    { date: "2025-01-01", total: 500 },
    { date: "2025-02-01", total: 600 },
  ];

  const totalRevenue = sales.reduce((acc, sale) => acc + sale.total, 0);

  return (
    <Box sx={{ maxWidth: 500, margin: "auto", mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Yearly Revenue
      </Typography>
      <Typography variant="body1">Total Revenue: {totalRevenue}</Typography>
    </Box>
  );
}

export default Revenue;
