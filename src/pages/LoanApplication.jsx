import React, { useState } from "react";
import {
  Container,
  Typography,
  Paper,
  Button,
  Box,
  IconButton,
} from "@mui/material";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { motion } from "framer-motion";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const localizer = momentLocalizer(moment);

const initialPayments = [
  {
    date: moment().subtract(5, "days").toDate(),
    status: "Overdue",
    amount: "$200",
  },
  {
    date: moment().add(3, "days").toDate(),
    status: "Upcoming",
    amount: "$150",
  },
  {
    date: moment().add(10, "days").toDate(),
    status: "Upcoming",
    amount: "$100",
  },
  {
    date: moment().subtract(1, "days").toDate(),
    status: "Paid",
    amount: "$250",
  },
];

const statusColors = {
  Overdue: "#ff4d4d",
  Upcoming: "#ffcc00",
  Paid: "#66cc66",
};

const LoanApplication = () => {
  const [payments, setPayments] = useState(initialPayments);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const navigate = useNavigate();

  const handleSelectEvent = (event) => {
    setSelectedPayment(event);
  };

  const handleMakePayment = () => {
    toast.success("Payment successful!");
    setSelectedPayment(null);
  };

  const handleRequestExtension = () => {
    toast.warn("Payment extension requested!");
    setSelectedPayment(null);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5 }}>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
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
            Interactive Repayment Calendar
          </Typography>
          <Calendar
            localizer={localizer}
            events={payments.map((p) => ({
              title: `${p.status}: ${p.amount}`,
              start: p.date,
              end: p.date,
              allDay: true,
              status: p.status,
            }))}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 500, marginTop: 20 }}
            eventPropGetter={(event) => ({
              style: { backgroundColor: statusColors[event.status] },
            })}
            onSelectEvent={handleSelectEvent}
          />
        </Paper>
      </motion.div>

      {selectedPayment && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Paper elevation={6} sx={{ p: 4, mt: 3, borderRadius: 3 }}>
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Payment Details
            </Typography>
            <Typography variant="body1">
              <b>Amount:</b> {selectedPayment.title.split(": ")[1]}
            </Typography>
            <Typography variant="body1">
              <b>Status:</b> {selectedPayment.status}
            </Typography>
            <Box display="flex" gap={2} mt={2}>
              {selectedPayment.status !== "Paid" && (
                <Button
                  variant="contained"
                  color="primary"
                  onClick={handleMakePayment}
                >
                  Make Payment
                </Button>
              )}
              {selectedPayment.status === "Overdue" && (
                <Button
                  variant="contained"
                  color="secondary"
                  onClick={handleRequestExtension}
                >
                  Request Extension
                </Button>
              )}
            </Box>
          </Paper>
        </motion.div>
      )}
    </Container>
  );
};

export default LoanApplication;
