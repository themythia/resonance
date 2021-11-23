import styled from 'styled-components';

export const MenuContainer = styled.div`
    background: var(--lt-background);
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: calc(100% - 48px);
    left: 0px;
    grid-column: 1/7;
    
`;
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    color:#FF9F0C;
`;
export const RightContainer = styled.div`
    display: flex;
    flex-direction: column;
    flex: 1;
    justify-content: center;
    align-items: center;
    margin-left: 20px;
    color:black;
`;
    