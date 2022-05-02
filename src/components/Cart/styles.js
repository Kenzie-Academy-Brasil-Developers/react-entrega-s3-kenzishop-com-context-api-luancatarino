import styled from "styled-components";

export const CartList = styled.div`
    background: var(--grey-3);
    display: flex;
    flex-direction: column;
    width: 60%;
    max-width: 650px;
    margin: 30px auto;
    justify-content: center;
    padding: 20px;
    align-items: center;
    border-radius: 3px;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
`;

export const TotalCart = styled.div`
    color: var(--grey-0);
    background: var(--grey-2);
    margin: 30px;
    height: 120px;
    width: 200px;
    padding: 15px;
    text-align: center;
    border: none;
    border-radius: 3px;
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    h2 {
        font-size: 1.1rem;
    }
    div {
        display: flex;
        justify-content: space-between;
    }
    p {
        font-size: 0.7em;
        margin: 10px;
    }
    button {
        color: var(--grey-0);
        background: green;
        border: none;
        padding: 10px;
        border-radius: 3px;
    }
`;
