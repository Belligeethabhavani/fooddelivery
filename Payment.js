import React, { useState } from 'react';
import { Container, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Box, Snackbar, Alert } from '@mui/material';

const Payment = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [formData, setFormData] = useState({
    cardNumber: '',
    cardExpiry: '',
    cardCVV: '',
    upiID: '',
    paypalEmail: '',
  });
  const [notification, setNotification] = useState({ open: false, message: '', severity: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handlePayment = (e) => {
    e.preventDefault();
    console.log('Selected Payment Method:', paymentMethod);
    console.log('Form Data:', formData);

    if (!paymentMethod) {
      setNotification({ open: true, message: 'Please select a payment method', severity: 'warning' });
      return;
    }

    switch (paymentMethod) {
      case 'card':
        if (!formData.cardNumber || !formData.cardExpiry || !formData.cardCVV) {
          setNotification({ open: true, message: 'Please fill in all card details', severity: 'warning' });
          return;
        }
        console.log('Processing card payment with details:', formData);
        setNotification({ open: true, message: 'Card payment processed successfully', severity: 'success' });
        break;

      case 'upi':
        if (!formData.upiID) {
          setNotification({ open: true, message: 'Please enter UPI ID', severity: 'warning' });
          return;
        }
        console.log('Processing UPI payment with ID:', formData.upiID);
        setNotification({ open: true, message: 'UPI payment processed successfully', severity: 'success' });
        break;

      case 'paypal':
        if (!formData.paypalEmail) {
          setNotification({ open: true, message: 'Please enter PayPal email', severity: 'warning' });
          return;
        }
        console.log('Processing PayPal payment with email:', formData.paypalEmail);
        setNotification({ open: true, message: 'PayPal payment processed successfully', severity: 'success' });
        break;

      case 'cod':
        console.log('Cash on Delivery selected');
        setNotification({ open: true, message: 'Cash on Delivery selected', severity: 'info' });
        break;

      default:
        setNotification({ open: true, message: 'Invalid payment method', severity: 'error' });
    }
  };

  const handleClose = () => {
    setNotification({ ...notification, open: false });
  };

  return (
    <div
      style={{
        backgroundImage: 'url(/map.webp)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container
        maxWidth="sm"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.8)',
          padding: '20px',
          borderRadius: '8px',
        }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          Payment Options
        </Typography>
        <form onSubmit={handlePayment}>
          <FormControl component="fieldset">
            <FormLabel component="legend">Select Payment Method</FormLabel>
            <RadioGroup
              aria-label="payment method"
              name="paymentMethod"
              value={paymentMethod}
              onChange={(e) => setPaymentMethod(e.target.value)}
            >
              <FormControlLabel value="card" control={<Radio />} label="Credit/Debit Card" />
              {paymentMethod === 'card' && (
                <Box mt={2}>
                  <TextField
                    label="Card Number"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="Expiry Date (MM/YY)"
                    name="cardExpiry"
                    value={formData.cardExpiry}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                  <TextField
                    label="CVV"
                    name="cardCVV"
                    value={formData.cardCVV}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Box>
              )}
              <FormControlLabel value="upi" control={<Radio />} label="UPI" />
              {paymentMethod === 'upi' && (
                <Box mt={2}>
                  <TextField
                    label="Enter UPI ID"
                    name="upiID"
                    value={formData.upiID}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Box>
              )}
              <FormControlLabel value="paypal" control={<Radio />} label="PayPal" />
              {paymentMethod === 'paypal' && (
                <Box mt={2}>
                  <TextField
                    label="Enter PayPal Email"
                    name="paypalEmail"
                    value={formData.paypalEmail}
                    onChange={handleInputChange}
                    fullWidth
                    margin="normal"
                    required
                  />
                </Box>
              )}
              <FormControlLabel value="cod" control={<Radio />} label="Cash on Delivery" />
            </RadioGroup>
          </FormControl>
          <Button type="submit" variant="contained" color="primary" fullWidth style={{ marginTop: '20px' }}>
            Pay Now
          </Button>
        </form>
        <Snackbar open={notification.open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={notification.severity} sx={{ width: '100%' }}>
            {notification.message}
          </Alert>
        </Snackbar>
      </Container>
    </div>
  );
};

export default Payment;