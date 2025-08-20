import { Button, Container, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <Container>
      <Typography variant="h3" gutterBottom>
        Welcome to Rice Shop
      </Typography>
      <Typography variant="h6" paragraph>
        The best rice for your kitchen! Browse our products and shop now.
      </Typography>
      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/products"
      >
        Shop Now
      </Button>
    </Container>
  );
}

export default HomePage;
