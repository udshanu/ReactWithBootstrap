import styled from 'styled-components';

export const Styles = styled.div`
    .inner-container {
        transition: visibility 0.2s ease-out;
    }

    .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    .input-group {
        display: flex;
        flex-direction: column;
        margin-top: 5px;
        margin-bottom: 5px;
    }

    .login-btn {
        padding: 2px 30px;
        /* background-color: #417cef; */
        border: 0;
        font-size: 18px;
        border-radius: 3px;
        font-family: Oxygen, sans-serif;
        background-color: rgba(15, 15, 15, 0.03);
        margin-top: 20px;
        border: 2px solid #417cef;
        transition: background-color 0.3s ease-out;
        cursor: pointer;
    }
    
    .login-btn:hover,
    .login-btn:focus {
        background-color: #417cef;
        color: white;
    }

    .header {
        text-align: center;
        padding: 5px;
        margin-bottom: 17px;
        /* margin-left: 35px; */
        /* margin-right: 35px; */
        font-family: Ozxgen, sans-serif;
        font-size: 22px;
        border-bottom: 2px solid $blue_theme;
    }
`;