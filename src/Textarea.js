import React, { Component } from 'react';
import PropTypes from 'prop-types';
import idgen from './idgen';
import Icon from './Icon';
import cx from 'classnames';

class Textarea extends Component {
  componentDidUpdate() {
    M.textareaAutoResize(this._textarea);
  }

  renderIcon(icon) {
    return <Icon className="material-icons prefix">{icon}</Icon>;
  }

  render() {
    const {
      className,
      iconClassName,
      icon,
      label,
      id,
      onChange,
      ...other
    } = this.props;

    const computedId = id || idgen();

    return (
      <div className="input-field">
        {icon && this.renderIcon(icon, iconClassName)}
        <textarea
          ref={input => {
            this._textarea = input;
          }}
          onChange={onChange}
          id={computedId}
          className={cx('materialize-textarea', className)}
          {...other}
        />
        <label htmlFor={computedId}>{label}</label>
      </div>
    );
  }
}

Textarea.propTypes = {
  /*
   * render icon next to input
   */
  icon: PropTypes.string,
  /*
   * icon classname
   */
  iconClassName: PropTypes.string,
  /*
   * textarea label
   */
  label: PropTypes.string,
  /*
   * onChange callback
   */
  onChange: PropTypes.func,
  /*
   * override id
   * @default idgen()
   */
  id: PropTypes.string,
  /*
   * disabled input
   */
  disabled: PropTypes.bool,
  /*
  * predefined value
  */
  value: PropTypes.string,
  className: PropTypes.string
};

export default Textarea;
