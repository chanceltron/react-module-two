import React, { Component } from 'react';

export default class MyForm extends Component {
  constructor() {
    super();
    this.state = { person: { name: '', comments: '', animal: '' } };
  }

  onSubmit = (e) => {
    e.preventDefault();
    // did something with data
    // this.setState({ value: '' });
  };

  onChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState((prevState) => ({ person: { ...prevState.person }, [name]: value }));
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <label htmlFor=''>
          Name:
          <input type='text' name='name' value={this.state.value} onChange={this.onChange} />
        </label>
        <br />
        <label htmlFor=''>
          Comments:
          <textarea onChange={this.onChange} name='comments' value={this.state.value} />
        </label>
        <br />
        <label htmlFor=''>
          Choose Animal:
          <select name='animal' onChange={this.onChange}>
            <option value='dog'>Dog</option>
            <option value='cat'>Cat</option>
            <option value='bird'>Bird</option>
            <option value='pig'>Pig</option>
          </select>
        </label>
        <br />
        <input type='submit' value='submit' />
      </form>
    );
  }
}
