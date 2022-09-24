import styled from 'styled-components'

export const Wrapper = styled.div` 
 
`
export const InputWrapper = styled.div` 
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`
export const Image = styled.img` 
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;

`
export const Input = styled.input` 
  width: 100%;
  border: none;
  border-bottom: 1px solid ${props => props.theme.soft};
  background: transparent;
  color: ${props => props.theme.text};
  font-size: 0.8rem;
  outline: none;
`
export const Commentwrapper = styled.div` 
  display: flex;
  gap: 10px;
  margin-bottom: 15px;
`
export const Comment = styled.div` 

`
export const Pic = styled.img` 
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
`
export const Info = styled.div` 
  display: flex;
  gap: 10px;
  margin-bottom: 5px;
`
export const Name = styled.span` 
  color: ${props => props.theme.text};
  font-size: 0.7rem;
`
export const Time = styled.span` 
  color: ${props => props.theme.textSoft};
  font-size: 0.7rem;
`
export const Text = styled.p` 
  color: ${props => props.theme.text};
  font-size: 0.75rem;
`