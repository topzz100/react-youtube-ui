import styled from 'styled-components'

export const Wrapper = styled.div`
  flex: 0.8;
  background: ${props => props.theme.bg};
  padding: 20px 50px;
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`
