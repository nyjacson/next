// @flow

import React from 'react';
import validator from '../../utils/validator';
import styles from './text.scss';

type Props = {
  validation?: boolean,
  label: String,
  enableShake?: boolean,
  id: String,
  name: String,
  onBlur?: Function,
  onChange?: Function,
  textArea?: boolean,
  required?: boolean,
  registError?: Function,
  unregistError?: Function,
  validations?: Array<any>
};

type State = {
  value: String
};

export default class Text extends React.Component<Props, State> {
  static defaultProps = {
    textArea: false,
    required: true,
    onBlur: () => {},
    enableShake: false,
    validation: false,
    onChange: () => {},
    registError: () => {},
    unregistError: () => {},
    validations: []
  };

  constructor(props) {
    super(props);
    this.state = {
      value: '',
      error: false
    };
  }

  handleOnChange = e => {
    this.setState(
      {
        value: e.target.value
      },
      () => {
        this.props.onChange(e);
      }
    );
    this.handleValidation(e);
  };

  handleOnBlur = e => {
    this.props.onBlur(e);
    this.handleValidation(e);
  };

  validate = (validation: Object, e: Object) => {
    const isValid = validator[validation.rule](e.target.value);
    if (isValid === false) {
      this.setState({ error: true, errorMessage: validation.errorMessage });
      // this.props.registError(e);
    } else {
      this.setState({ error: false, errorMessage: '' });
      // this.props.unregistError(e);
    }
    return isValid;
  };

  handleValidation = e => {
    const isValid =
      this.props.validations && this.props.validations.every(validation => this.validate(validation, e), this);
    if (isValid) {
      this.props.unregistError(e);
    } else {
      this.props.registError(e);
    }
  };

  render() {
    return (
      <div className={`${styles.textWrapper} ${this.state.error ? styles.errorWrapper : ''}`}>
        <label htmlFor={this.props.id}>
          {this.props.label}
          {this.props.required && <i className={styles.iconStar} />}
        </label>
        {this.props.textArea ? (
          <textarea
            id={this.props.id}
            name={this.props.name}
            value={this.state.value}
            onChange={this.handleOnChange}
            onBlur={this.handleOnBlur}
            className={styles.textarea}
          />
        ) : (
          <input
            className={styles.input}
            id={this.props.id}
            name={this.props.name}
            value={this.state.value}
            type="text"
            onChange={this.handleOnChange}
            onBlur={this.handleOnBlur}
          />
        )}
        {this.state.error && <span className={styles.error}>{this.state.errorMessage}</span>}
      </div>
    );
  }
}
