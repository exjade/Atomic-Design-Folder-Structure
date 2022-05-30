import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './button.css';

export default function Button({ type, children }) {
    return (
        <button
            type='button'
            className={`
            ${classNames('button', {
                [`type-${type}`]: type,
            })} 
            h-8 
            w-1/2
            rounded-md
            `}
        >
            {children}
        </button>
    );
}

Button.propTypes = {
    /** Button content */
    children: PropTypes.node,
    /** Button type */
    type: PropTypes.oneOf(['primary', 'secondary'])
}

Button.defaultProps = {
    type: 'primary'
}