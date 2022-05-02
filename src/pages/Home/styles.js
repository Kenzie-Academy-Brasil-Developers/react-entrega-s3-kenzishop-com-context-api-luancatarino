import styled from "styled-components";

export const Header = styled.div`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background: var(--grey-3);
    color: var(--red-1);
    margin-bottom: 50px;
    h1 {
        margin-left: 50px;
    }
    button {
        margin-right: 50px;
        background: var(--grey-3);
        border: none;
        color: var(--grey-0);
        font-size: 1.1rem;
    }
    div {
        display: flex;
        align-items: center;
    }
    p {
        margin-right: 5px;
        background: var(--red-1);
        color: var(--grey-0);
        border: none;
        border-radius: 50%;
        font-size: 0.8rem;
        padding: 5px;
        font-weight: bold;
        width: 25px;
        height: 25px;
        text-align: center;
        display: flex;
        align-items: center;
    }
`;
