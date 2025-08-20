import { Box, Typography } from "@mui/material";

function Footer() {
  return (
    <Box sx={{ textAlign: "center", p: 2 }}>
      <Typography variant="body2" color="textSecondary">
        &copy; 2025 Rice Shop. All rights reserved.
      </Typography>
    </Box>
  );
}

export default Footer;
