import React, { useState } from "react";
import { Button, InputLabel, TextField } from "@material-ui/core";

const ContactForm = () => {
  const [status, setStatus] = useState("Send");
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
            <InputLabel htmlFor="email" className="label">
              Email:
            </InputLabel>
            <TextField required className="email-input" variant="outlined" type="email" fullWidth />
          </div>
          <br></br>
          <div>
            <InputLabel htmlFor="message" className="label">
              Message:
            </InputLabel>
            <TextField
              className="message-input"
              fullWidth
              multiline
              margin="normal"
              rows={10}
              variant="outlined"
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
    </React.Fragment>
  );
};

export default ContactForm;
