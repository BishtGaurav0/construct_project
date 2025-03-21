import React, { useState, useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  LinearProgress,
  Paper,
  Chip,
  Button,
  IconButton,
  Stack,
} from "@mui/material";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
} from "recharts";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const LoanStatusDashboard = () => {
  const navigate = useNavigate();
  const [loanStatus, setLoanStatus] = useState("Submitted");
  const [documentStatus, setDocumentStatus] = useState("Pending Review");
  const statusStages = ["Submitted", "Under Review", "Approved", "Rejected"];
  const COLORS = ["#0088FE", "#FFBB28", "#00C49F", "#FF4444"];

  const [statusData, setStatusData] = useState({
    Submitted: 5,
    "Under Review": 3,
    Approved: 7,
    Rejected: 2,
  });

  useEffect(() => {
    toast.info(`Loan status updated: ${loanStatus}`);
  }, [loanStatus]);

  const updateStatus = () => {
    const nextIndex = statusStages.indexOf(loanStatus) + 1;
    if (nextIndex < statusStages.length) {
      setLoanStatus(statusStages[nextIndex]);
      setStatusData((prev) => ({
        ...prev,
        [statusStages[nextIndex]]: prev[statusStages[nextIndex]] + 1,
      }));
    }
  };

  const getProgress = () =>
    (statusStages.indexOf(loanStatus) / (statusStages.length - 1)) * 100;

  const getDocumentColor = () => {
    switch (documentStatus) {
      case "Approved":
        return "success";
      case "Requires Resubmission":
        return "error";
      default:
        return "warning";
    }
  };

  const chartData = Object.keys(statusData).map((key) => ({
    name: key,
    value: statusData[key],
  }));

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <Paper
          elevation={6}
          sx={{ p: 4, borderRadius: 3, position: "relative" }}
        >
          <IconButton
            sx={{ position: "absolute", top: 10, right: 10 }}
            onClick={() => navigate("/")}
          >
            <CloseIcon />
          </IconButton>
          <Typography
            variant="h4"
            fontWeight="bold"
            align="center"
            gutterBottom
          >
            Loan Status Dashboard
          </Typography>

          <Box sx={{ my: 4 }}>
            <Typography variant="h6" fontWeight="bold">
              Application Status:
            </Typography>
            <Typography variant="body1" color="text.secondary">
              {loanStatus}
            </Typography>
            <LinearProgress
              variant="determinate"
              value={getProgress()}
              sx={{ height: 10, my: 2 }}
            />
          </Box>

          <Box sx={{ my: 4 }}>
            <Typography variant="h6" fontWeight="bold">
              Document Verification:
            </Typography>
            <Chip
              label={documentStatus}
              color={getDocumentColor()}
              sx={{ fontSize: "16px", p: 1, mt: 1 }}
            />
          </Box>

          <Box display="flex" justifyContent="center" gap={2}>
            <Button
              variant="contained"
              color="primary"
              onClick={updateStatus}
              disabled={loanStatus === "Approved" || loanStatus === "Rejected"}
            >
              Update Status
            </Button>
            <Button
              variant="contained"
              color="secondary"
              onClick={() => setDocumentStatus("Requires Resubmission")}
            >
              Mark Document for Resubmission
            </Button>
          </Box>

          {/* Charts Section */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            spacing={4}
            sx={{ mt: 5 }}
          >
            {/* Pie Chart */}
            <Box flex={1}>
              <Typography variant="h6" fontWeight="bold" align="center">
                Loan Status Breakdown
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <PieChart>
                  <Pie
                    data={chartData}
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {chartData.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={COLORS[index % COLORS.length]}
                      />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </Box>

            {/* Bar Chart */}
            <Box flex={1}>
              <Typography variant="h6" fontWeight="bold" align="center">
                Loan Applications Per Status
              </Typography>
              <ResponsiveContainer width="100%" height={300}>
                <BarChart data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#82ca9d" />
                </BarChart>
              </ResponsiveContainer>
            </Box>
          </Stack>
        </Paper>
      </motion.div>
    </Container>
  );
};

export default LoanStatusDashboard;
