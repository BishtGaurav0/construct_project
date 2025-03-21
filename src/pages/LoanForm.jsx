import React from "react";
import {
  Container,
  TextField,
  Button,
  MenuItem,
  Typography,
  Box,
  Paper,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import loanBackground from "../assets/loan.jpg";

const LoanForm = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    localStorage.setItem("loanApplication", JSON.stringify(data));
    alert("Loan Application Submitted Successfully!");
    navigate("/");
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        height: "100vh",
        width: "100vw",
      }}
    >
      {/* Left Side: Image Section  */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        style={{
          flex: 1,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            width: "80%",
            height: "80%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            overflow: "hidden",
            borderRadius: 2,
          }}
        >
          <img
            src={loanBackground}
            alt="Loan Background"
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
        </Box>
      </motion.div>

      {/* Right Side: Form Section */}
      <Container
        component={motion.div}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        maxWidth="sm"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          p: 4,
        }}
      >
        <Paper
          elevation={6}
          sx={{ p: 4, borderRadius: 3, bgcolor: "rgba(255, 255, 255, 0.9)" }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            fontWeight="bold"
          >
            Loan Application Form
          </Typography>

          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              <TextField
                fullWidth
                label="Full Name"
                variant="outlined"
                {...register("name", { required: "Name is required" })}
                error={!!errors.name}
                helperText={errors.name?.message}
                sx={{ mb: 3 }}
              />
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <TextField
                fullWidth
                label="Email Address"
                type="email"
                variant="outlined"
                {...register("email", { required: "Email is required" })}
                error={!!errors.email}
                helperText={errors.email?.message}
                sx={{ mb: 3 }}
              />
            </motion.div>

            {/* Loan Amount Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <TextField
                fullWidth
                label="Loan Amount"
                type="number"
                variant="outlined"
                {...register("amount", { required: "Loan amount is required" })}
                error={!!errors.amount}
                helperText={errors.amount?.message}
                sx={{ mb: 3 }}
              />
            </motion.div>

            {/* Loan Type Dropdown */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <TextField
                select
                fullWidth
                label="Loan Type"
                defaultValue=""
                {...register("loanType", {
                  required: "Please select a loan type",
                })}
                error={!!errors.loanType}
                helperText={errors.loanType?.message}
                sx={{ mb: 3 }}
              >
                <MenuItem value="Personal Loan">Personal Loan</MenuItem>
                <MenuItem value="Home Loan">Home Loan</MenuItem>
                <MenuItem value="Business Loan">Business Loan</MenuItem>
              </TextField>
            </motion.div>

            {/* Loan Purpose Field */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <TextField
                fullWidth
                label="Loan Purpose"
                multiline
                rows={3}
                variant="outlined"
                {...register("purpose", { required: "Purpose is required" })}
                error={!!errors.purpose}
                helperText={errors.purpose?.message}
                sx={{ mb: 3 }}
              />
            </motion.div>

            {/* Buttons with Animation */}
            <Box
              textAlign="center"
              display="flex"
              justifyContent="center"
              gap={2}
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  Submit Application
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  onClick={() => navigate("/")}
                >
                  Back to Home
                </Button>
              </motion.div>
            </Box>
          </form>
        </Paper>
      </Container>
    </Box>
  );
};

export default LoanForm;
