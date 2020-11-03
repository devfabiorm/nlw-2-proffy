import React from 'react';

import './styles.css';

const Button: React.FC = ({children, ...rest}) => {
    return <button id="button" {...rest}>{children}</button>
}

export default Button;