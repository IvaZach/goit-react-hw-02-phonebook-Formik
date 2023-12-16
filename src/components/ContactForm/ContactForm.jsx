import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import css from './ContactForm.module.css';

class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };
  handleChange = evt => {
    const { name, value } = evt.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
      id: nanoid(6),
    };

    this.props.onSubmit(contact);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit} className={css.form}>
        <div className="mb-3">
          <label htmlFor="validationDefault01" className="form-label">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="validationDefault01"
            value={this.state.name}
            onChange={this.handleChange}
            required
            className="form-control"
            placeholder="first and last name"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="inputTel" className="form-label">
            Number
          </label>
          <input
            type="tel"
            name="number"
            id="inputTel"
            value={this.state.number}
            onChange={this.handleChange}
            required
            className="form-control"
            placeholder="###-##-##"
            pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Add contact
        </button>
      </form>
    );
  }
}

ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default ContactForm;
