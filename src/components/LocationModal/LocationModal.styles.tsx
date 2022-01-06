import styled from 'styled-components';

interface ModalStyles {
  isOpen: boolean;
}

export const CloseIconContainer = styled.span`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin: 20px 25px;
  cursor: pointer;
  transition: opacity 0.3s ease-out;
  z-index: 20;
  &:hover {
    opacity: 0.8;
  }
  & img {
    width: 16px;
    height: 16px;
    opacity: 0.6;
  }
`;

export const ModalContainer = styled.div<ModalStyles>`
  display: ${(props) => (props.isOpen ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: RGB(0, 17, 34, 0.6);
  z-index: 10;
`;

export const Modal = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 440px;
  min-height: 350px;
  padding: 15px 25px;
  background-color: RGBA(246, 246, 246, 0.2);
  border: 1px solid RGBA(0, 17, 34, 0.1);
  border-radius: 2px;
  color: #001122;
  background-color: #ffffff;
  box-shadow: 0px 8px 16px 4px RGBA(0, 17, 34, 0.2);
`;

export const LocationTitle = styled.div`
  margin-bottom: 30px;
  font-size: 16px;
  font-weight: 600;
  line-height: 32px;
  opacity: 0.8;
`;

export const DescriptionTitle = styled.div`
  margin-top: 20px;
  font-size: 14px;
  font-weight: 600;
  line-height: 24px;
  color: RGB(0, 17, 34, 0.8);
`;

export const DescriptionText = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  color: RGB(0, 17, 34, 0.8);
`;

export const LocationDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const LocationDetails = styled.div`
  display: flex;
  align-items: baseline;
  gap: 8px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  color: RGB(0, 17, 34, 0.8);
  & img {
    width: 14px;
    height: 14px;
    opacity: 0.3;
  }
`;

export const DoneBtn = styled.button`
  width: 64px;
  height: 32px;
  background-color: RGB(55, 178, 77);
  font-size: 14px;
  font-weight: 600;
  color: #fff;
  border: none;
  border-radius: 16px;
  transition: opacity 0.3s ease-out;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const DoneBtnContainer = styled.div`
  display: flex;
  justify-content: end;
`;
