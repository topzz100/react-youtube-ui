import styled from 'styled-components'

export const Wrapper = styled.div` 
  width: 31%;
  min-height: 240px;
  margin-bottom: 20px;
`
export const Image = styled.img` 
  width: 100%;
  height: 150px;
  object-fit: cover;
`
export const Info = styled.div`
  display: flex;
  margin-top: 10px;
`
export const InfoText = styled.div`
  margin-left: 5px;
`
export const Title = styled.p`
  color: ${props => props.theme.text};
  font-size: 0.85rem;
  margin-bottom: 5px;
  
`
export const Channel = styled.div`
  color: ${props => props.theme.textSoft};
  font-size: 0.75rem;
  margin-bottom: 5px;
`
export const Extra = styled.div`
  color: ${props => props.theme.textSoft};
  display: flex;
  align-items: center;
  gap: 5px;
`
export const Views = styled.span`
  font-size: 0.75rem;
  `
export const Time = styled.span`
  font-size: 0.75rem;
  `
export const Pic = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  object-fit: cover;

  
`