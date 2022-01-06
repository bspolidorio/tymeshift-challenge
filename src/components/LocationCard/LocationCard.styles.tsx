import styled from 'styled-components';

export const EditIconContainer = styled.span`
  visibility: hidden;
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 26px;
  height: 26px;
  margin: 10px;
  background-color: #ffffff;
  border-radius: 13px;
  & img {
    width: 14px;
    height: 14px;
    opacity: 0.5;
  }
`;

export const Card = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 340px;
  height: 140px;
  padding: 15px 25px;
  background-color: RGBA(246, 246, 246, 0.2);
  border: 1px solid RGBA(0, 17, 34, 0.1);
  border-radius: 2px;
  color: #001122;
  cursor: pointer;
  &:hover {
    background-color: #f6f6f6;
    ${EditIconContainer} {
      visibility: visible;
    }
  }
`;

export const LocationTitle = styled.div`
  margin-bottom: 5px;
  font-size: 18px;
  font-weight: 700;
  line-height: 32px;
  opacity: 0.8;
`;

export const LocationDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const LocationDetails = styled.div`
  display: flex;
  align-items: baseline;
  gap: 5px;
  font-size: 14px;
  font-weight: 500;
  line-height: 24px;
  opacity: 0.8;
  & img {
    width: 14px;
    height: 14px;
    opacity: 0.3;
  }
`;
