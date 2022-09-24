import styled from 'styled-components'

export const Wrapper = styled.div` 
  flex: 8;
`
export const Image = styled.img` 
  width: 100%;
  height: 350px;
  object-fit: cover;

`
export const Info = styled.div` 

`
export const VideoInfo = styled.div` 
  margin-top: 10px;
`
export const Title = styled.p` 
  color: ${props => props.theme.text};
  font-size: 0.8;
  margin-bottom: 10px;
`
export const VideoInfoBottom = styled.div` 
  display: flex;
  justify-content: space-between;
  font-size: 0.75;
`
export const Extra = styled.div` 
  color: ${props => props.theme.textSoft};
  font-size: 0.75rem;
  display: flex;
  gap: 10px;
`
export const Views = styled.span` 

`
export const Time = styled.span` 

`
export const Options = styled.div` 
  display: flex;
  gap: 10px;
`
export const Item = styled.div` 
  color: ${props => props.theme.text};
  gap: 5px;
  font-size: 0.75rem;
  display: flex;
  align-items: center;
  .MuiSvgIcon-root{
    color: ${props => props.theme.text};
    font-size: 0.85rem;
  }
`
export const Span = styled.span` 

`
export const Hr = styled.hr` 
  border-bottom-width: 1px;
  border-color: ${props => props.theme.soft};
  border-top: none;
  margin: 10px 0;

`
export const ChannelInfo = styled.div` 
  display: flex;
  justify-content: space-between;
  gap: 15px;
`
export const ChannelLeft = styled.div` 
  display: flex;
  gap: 5px;
`
export const Pic = styled.img` 
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
export const ChannelProfile = styled.div` 

`
export const ChannelTitle = styled.p` 
  color: ${props => props.theme.text};
  font-size: 0.75rem;
  margin-bottom: 5px;

`
export const SubNum = styled.p` 
  color: ${props => props.theme.textSoft};
  font-size: 0.7rem;
  margin-bottom: 10px;
`
export const ChannelDesc = styled.p` 
  color: ${props => props.theme.text};
  font-size: 0.7rem;
`
export const Subscribe = styled.button` 
 height: fit-content;
 padding: 10px 20px;
  background-color: red;
  border: none;
  font-size: 0.75rem;
  color: white;
  font-weight: 600;
  
`
