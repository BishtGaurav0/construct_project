import React from "react";
import {
  Container,
  Typography,
  Button,
  Box,
  Card,
  CardContent,
  CardActions,
} from "@mui/material";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <Container sx={{ backgroundColor: "white", py: 4 }}>
      <Box display="flex" flexDirection="column" alignItems="center" gap={4}>
        {/* First Section */}
        <Box textAlign="center" p={4} width="100%" bgcolor="#E4E9F2">
          <Typography variant="h3" gutterBottom>
            Comprehensive Loan Application & Tracking System
          </Typography>
          <Typography variant="body1" paragraph>
            Empowering Your Financial Future Seamless Loan Application Solutions
            Tailored for Today's Dynamic Needs in Delhi Division. Explore
            Innovation.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ mt: 2 }}
            onClick={() => navigate("/loan-form")}
          >
            Apply for Loan
          </Button>
          <Box
            component="img"
            src="./src/assets/data.jpg"
            alt="Data Solutions"
            sx={{
              width: "100%",
              borderRadius: 2,
              maxHeight: 300,
              objectFit: "cover",
              mt: 2,
            }}
          />
        </Box>

        {/* Second Section */}
        <Box textAlign="center" p={4} width="100%">
          <Box
            component="img"
            src="./src/assets/refund.jpg"
            alt="Loan Application"
            sx={{
              width: "100%",
              borderRadius: 2,
              maxHeight: 300,
              objectFit: "cover",
            }}
          />
          <Typography variant="h5" gutterBottom sx={{ mt: 2 }}>
            Streamlining Loan Applications
          </Typography>
          <Typography variant="body1" paragraph>
            At Personal Clarity, we are committed to revolutionizing the loan
            application process. By leveraging technology, we enhance financial
            services, making them accessible. Our solutions streamline the
            complexities of loan applications, ensuring swift and
            straightforward processing.
          </Typography>
        </Box>

        {/* Streamlined Solutions Section */}
        <Typography
          variant="h4"
          sx={{ textAlign: "center", my: 4, fontWeight: "bold" }}
        >
          Streamlined Solutions
        </Typography>

        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
          {[
            {
              title: "Streamlined Loan Applications",
              description:
                "Simplify your loan applications process with user-friendly and customizable dashboards for your clients.",
            },
            {
              title: "Customizable Interface Options",
              description:
                "Personalize your dashboard with various interface options to align with your branding systems.",
            },
            {
              title: "Secure Data Management",
              description:
                "Superior security measures to ensure data protection and privacy for all users.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 300,
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate("/dashboard")}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>

        {/* Effective Processing Section */}
        <Typography
          variant="h4"
          sx={{ textAlign: "center", my: 4, fontWeight: "bold" }}
        >
          Effective Processing
        </Typography>

        <Box display="flex" flexWrap="wrap" justifyContent="center" gap={3}>
          {[
            {
              title: "User-Friendly Design",
              description:
                "Our interface always prioritizes simplicity, ensuring a seamless experience for all users.",
            },
            {
              title: "Secure Data Handling",
              description:
                "All data is handled using industry-standard encryption and protection measures.",
            },
            {
              title: "Customizable Workflows",
              description:
                "Tailor the application process to fit your specific business requirements with our flexible workflow options.",
            },
          ].map((item, index) => (
            <Card
              key={index}
              sx={{
                maxWidth: 300,
                textAlign: "center",
                border: "1px solid #ccc",
                borderRadius: 2,
              }}
            >
              <CardContent>
                <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" onClick={() => navigate("/apply")}>
                  Learn More
                </Button>
              </CardActions>
            </Card>
          ))}
        </Box>
      </Box>

      <Footer />
    </Container>
  );
};

export default LandingPage;
