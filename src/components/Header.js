import React from 'react'

const Header = (props) => {
    const { branding } = props;
    return(
        <div>
            <h1>{props.branding}</h1>
        </div>
    );
}

export default Header;
