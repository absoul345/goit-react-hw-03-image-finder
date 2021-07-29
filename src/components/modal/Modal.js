/* eslint-disable react/no-typos */
import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import PropTypes from 'prop-types';

const modalRoot = document.querySelector('#modal-root');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = e => {
    if (e.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = e => {
    if (e.currentTarget === e.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div>
        <div className="Overlay" onClick={this.handleOverlayClick}>
          <div className="Modal">
            <img src={this.props.url} alt={this.props.tag} />
          </div>
        </div>
      </div>,
      modalRoot,
    );
  }
}

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
