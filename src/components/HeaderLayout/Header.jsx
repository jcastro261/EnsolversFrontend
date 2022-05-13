import React from 'react';
import Buttons from '../HeaderLayout/HeaderComponents/Buttons';
import Title from '../HeaderLayout/HeaderComponents/Title';

const Header = () => {
    return (
        <div style={styleHeader.headerContainer}>
            <div style={styleHeader.divHeaderContainer}>
                <Title/>
                <Buttons/>
            </div>
        </div>
    );
};

const styleHeader = {
    headerContainer:{
        width: '100vw',
        display: 'flex',
        justifyContent:'start',
        borderBottom:'solid 2px'
    },
    divHeaderContainer:{
        width: '40vw',
        display: 'flex',
        flexFlow:'row',
        justifyContent:'space-around',
    }
}

export default Header;