import React from 'react';
import PropTypes from 'prop-types';

export default function Button({ children }) {
    return (
        <button>
            {children}
        </button>
    );
}

Button.displayName = 'Button';

Button.propTypes = {
    /** Button content */
    children: PropTypes.node.isRequired,
}