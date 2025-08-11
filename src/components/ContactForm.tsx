'use client';
import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './contactForm.css';

export default function ContactForm() {
  const intialState = {
    name: '',
    email: '',
    subject: '',
    message: '',
    validate: '',
  };

  const [text, setText] = useState(intialState);

  const handleTextChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setText({ ...text, [name]: value, validate: '' });
  };

  const handleSubmitForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // simple form validation
    if (
      text.name === '' ||
      text.email === '' ||
      text.subject === '' ||
      text.message === ''
    ) {
      setText({ ...text, validate: 'incomplete' });
      return;
    }

    // POST request sent
    // Show pending info while sending email
    setText({ ...text, validate: 'loading' });
    emailjs
      .sendForm(
        'service_bt8z2rg',
        'template_hn0h7ic',
        e.currentTarget,
        'NCmMADAilguXoO3n2'
      )
      .then(
        () => {
          setText({
            ...intialState,
            validate: 'success',
          });
          setText({ ...text, validate: 'success' });
        },
        () => {
          setText({
            ...intialState,
            validate: 'error',
          });
          setText({ ...text, validate: 'error' });
        }
      );
  };

  return (
    <form className="contact-form" onSubmit={handleSubmitForm}>
      <div className="row">
        <div className="form-group col-md-6">
          <label>Your Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="name"
            value={text.name}
            onChange={handleTextChange}
          />
        </div>
        <div className="form-group col-md-6">
          <label>Your Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            id="email"
            value={text.email}
            onChange={handleTextChange}
          />
        </div>
      </div>
      <div className="form-group">
        <label>Subject</label>
        <input
          type="text"
          className="form-control"
          name="subject"
          id="subject"
          value={text.subject}
          onChange={handleTextChange}
        />
      </div>
      <div className="form-group">
        <label>Message</label>
        <textarea
          className="form-control"
          name="message"
          rows={10}
          value={text.message}
          onChange={handleTextChange}
        ></textarea>
      </div>
      <div className="my-3">
        {text.validate === 'loading' && (
          <div className="loading">Sending Message</div>
        )}
        {text.validate === 'incomplete' && (
          <div className="error-message">Please fill in all above details</div>
        )}
        {text.validate === 'success' && (
          <div className="sent-message">
            Your message was sent. We will contact you ASAP. Thank you!
          </div>
        )}
        {text.validate === 'error' && (
          <div className="error-message">Server Error</div>
        )}
      </div>
      <div className="text-center">
        <button type="submit">Send Message</button>
      </div>
    </form>
  );
}
