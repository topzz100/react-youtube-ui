import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.bgLighter};  
  flex: 0.15;
  position: sticky;
  top: 10vh;
  height: 90vh;
`
export const Content = styled.div`
  padding: 0 20px;
`
export const Item = styled.div`
  color: ${props => props.theme.text};
  padding: 7px 0;
  display: flex;
  align-items: center;
  .MuiSvgIcon-root{
    color: ${props => props.theme.text};
    margin-right: 10px;
    font-size: 0.9rem;
  }

`
export const Span = styled.span`
  font-size: 0.8rem;
  font-weight: 600;
`
export const Hr = styled.hr`
  border-bottom-width: 1px;
  border-color: ${props => props.theme.soft};
  border-top: none;
  margin: 10px 0;
`
export const Heading = styled.h4`
  color: ${props => props.theme.textSoft};
  font-size: 0.75rem;
  font-weight: 600;
  margin-bottom: 10px;
`
