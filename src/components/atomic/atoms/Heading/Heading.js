import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import './Heading.css'

export default function Heading({ children, color, size }) {
    return (
        <h1 className={`${classNames('heading', {
            [`color-${color}`]: color,
            [`size-${size}`]: size
        })
        }`} >
            {children}
        </h1>
    )
}

Heading.propTypes = {
    /** Heading content */
    children: PropTypes.node.isRequired,
    /** Heading color */
    color: PropTypes.oneOf(['primary', 'default']),
    /** Heading size */
    size: PropTypes.oneOf(['sm', 'md', 'lg'])
}

Heading.defaultProps = {
    /** Heading default content */
    children: PropTypes.node.isRequired,
    /** Heading default color */
    color: 'default',
    /** Heading default size */
    size: 'sm'
}
