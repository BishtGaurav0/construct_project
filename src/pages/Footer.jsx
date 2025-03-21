import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";

const Footer = () => {
  const items = [
    {
      title: "Customer-Centric Approach",
      description:
        "Clear and transparent customer service is at the heart of everything we do. We strive to understand customer needs and provide tailored solutions that empower them to achieve their financial goals.",
    },
    {
      title: "Integrity and Transparency",
      description:
        "We are committed to maintaining the highest standards of integrity and transparency in all our interactions, fostering honest and respectful communication.",
    },
    {
      title: "Innovation and Excellence",
      description:
        "We believe in the power of innovation to drive change. Our team continuously explores new ideas and methodologies to enhance our services, ensuring the best possible experience for our clients.",
    },
    {
      title: "Collaboration and Teamwork",
      description:
        "We recognize that true strength lies in collaboration. By working together, we achieve more and drive collective success toward our common goals.",
    },
    {
      title: "Social Responsibility",
      description:
        "We acknowledge our responsibility to the community and the environment. We actively contribute to sustainable practices and initiatives that create a lasting, positive impact on society.",
    },
  ];

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
        Credibility Assured
      </Typography>
      <Box
        display="flex"
        flexWrap="wrap"
        justifyContent="center"
        gap={4}
        mt={2}
      >
        {items.map((item, index) => (
          <Box
            key={index}
            sx={{ width: { xs: "100%", sm: "45%", md: "30%" }, mb: 4 }}
          >
            <Card variant="outlined" sx={{ height: "100%", p: 2 }}>
              <CardContent>
                <Typography variant="h6" fontWeight="bold" gutterBottom>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {item.description}
                </Typography>
              </CardContent>
            </Card>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default Footer;
