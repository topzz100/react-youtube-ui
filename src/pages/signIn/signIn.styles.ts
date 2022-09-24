import styled from 'styled-components'

export const Wrapper = styled.div` 
  background: ${props => props.theme.bg};
  flex: 0.85;
  height: 90vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Content = styled.div`
  padding: 20px;
  width: 300px;
  background: ${props => props.theme.bgLighter};
`
export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const Heading = styled.p`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`
export const HeadingBold = styled.span`
  color: ${props => props.theme.text};
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 5px;
`
export const HeadingLight = styled.span`
  color: ${props => props.theme.text};
  font-size: 0.9rem;
`
export const Form = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Input = styled.input`
  width: 100%;
  border: 1px solid ${props => props.theme.soft};
  color: ${props => props.theme.text};
  height: 30px;
  padding: 5px;
  background-color: transparent;
  outline: none;
  margin-bottom: 10px;
`
export const Button = styled.button`
  color: ${props => props.theme.textSoft};
  font-size: 0.75rem;
  padding: 8px 15px;
  background-color: ${props => props.theme.soft};
  border: none;
  width: fit-content;
  margin: auto;
  font-weight: 600;
`
export const SpanOr = styled.div`
  color: ${props => props.theme.text};
  font-size: 1rem;
  margin: 10px 0;
` 
export const Extras = styled.div` 
  display: flex;
  justify-content: space-between;
  width: 300px;
  margin-top: 5px;
`
export const Lang = styled.span` 
  font-size: 0.7rem;
  color: ${props => props.theme.textSoft};
`
export const Options = styled.p` 
  font-size: 0.7rem;
  color: ${props => props.theme.textSoft};
  display: flex;
  gap: 10px;
`
export const Span = styled.span` 

`
