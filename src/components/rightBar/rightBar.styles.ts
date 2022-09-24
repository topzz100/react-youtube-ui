import styled from 'styled-components'

export const Wrapper = styled.div` 
  flex: 4;
;
`
export const Content = styled.div` 

`
export const VideoWrapper = styled.div` 
  display: flex;
  height: 90px;
  margin-bottom: 10px;
  gap: 5px;
`
export const Image = styled.img` 
  height: 100%;
  object-fit: cover;
  flex: 0.45; 
`
export const Info = styled.div` 
  width: 100%;
  flex: 0.55;
`
export const Title = styled.p` 
  color: ${props => props.theme.text};
  font-size: 0.8rem;
  margin-bottom: 5px;
`
export const Extra = styled.p` 
  display: flex;
  gap: 5px;
  font-size: 0.7rem;
  color: ${props => props.theme.textSoft};
`
export const Views = styled.span` 

`
export const Time = styled.span` 

`