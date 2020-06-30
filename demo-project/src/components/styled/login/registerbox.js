import styled from 'styled-components';

export const Styles = styled.div`
.root-container {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.box-container {
    display: flex;
    flex-direction: column;
    max-width: 24em;
    min-width: 21em;
    box-shadow: 0px 0px 20px 0px rgba(15, 15, 15, 0.2);
    border-radius: 6px;
    padding: 24px;
}

.textbox {
  display: block;
  width: 400px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
}

`;