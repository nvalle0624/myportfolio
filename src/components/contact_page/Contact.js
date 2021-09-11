import React, { useState } from "react";
import { Button, InputLabel, TextField } from "@material-ui/core";

// from: https://w3collective.com/react-contact-form/

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <React.Fragment>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div>
            <InputLabel htmlFor="name" className="label">
              Name:
            </InputLabel>
            <TextField
              id="name"
              className="email-input"
              required
              placeholder="Your name"
              variant="outlined"
              fullWidth
            />
          </div>
          <br></br>
          <div>
            <InputLabel htmlFor="email" className="label">
              Email:
            </InputLabel>
            <TextField
              required
              id="email"
              className="email-input"
              variant="outlined"
              type="email"
              placeholder="Your email"
              fullWidth
            />
          </div>
          <br></br>
          <div>
            <InputLabel htmlFor="message" className="label">
              Message:
            </InputLabel>
            <TextField
              id="message"
              className="message-input"
              fullWidth
              multiline
              margin="normal"
              rows={10}
              variant="outlined"
              placeholder="Send me a message"
              required
            />
          </div>
          <Button
            variant="contained"
            style={{ margin: "10px", backgroundColor: "black", color: "white" }}
            type="submit"
          >
            {status}
          </Button>
        </form>
      </div>
      <div className="background1"></div>
      <div className="background2"></div>
    </React.Fragment>
  );
};

export default ContactForm;
