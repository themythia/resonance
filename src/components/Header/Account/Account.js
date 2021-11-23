import React from 'react'
import styled from 'styled-components'
import {AccountCircle} from'@styled-icons/material/';


const AccountContainer = styled.div``

const Account = () => {
    return (
        <AccountContainer>
            <AccountCircle size='25' cursor='pointer'/>
        </AccountContainer>
    )
}

export default Account;
