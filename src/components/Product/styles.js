import styled from "styled-components";

export const CardProduct = styled.div`
    background: var(--grey-0);
    margin-bottom: 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 320px;
    justify-content: space-between;
    padding: 15px;
    color: var(--grey-2);
    margin: 5px;
    width: 250px;
    border-radius: 3px;
    img {
        width: 150px;
        height: 200px;
    }
    button {
        border: none;
        border-radius: 3px;
        color: var(--grey-0);
        background: var(--green);
        width: 100px;
        height: 25px;
    }
    h3 {
        overflow: hidden;
        max-width: 20ch;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    h6 {
        color: var(--grey-1);
    }
`;

export const CartProduct = styled.div`
    background: var(--grey-0);
    margin-bottom: 25px;
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 120px;
    justify-content: space-between;
    padding: 25px;
    color: var(--grey-2);
    margin: 5px;
    width: 97%;
    max-width: 550px;
    border-radius: 3px;

    img {
        width: 75px;
        height: 100px;
    }
    button {
        border: none;
        border-radius: 3px;
        color: var(--grey-0);
        background: var(--red-1);
        width: 100px;
        height: 25px;
    }
    h3 {
        overflow: hidden;
        max-width: 15ch;
        white-space: nowrap;
        text-overflow: ellipsis;
    }
    h6 {
        color: var(--grey-1);
    }
`;
