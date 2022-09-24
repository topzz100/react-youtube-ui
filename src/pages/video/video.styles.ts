import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex: 0.85;
  width: 100%;
  padding: 20px 50px;
  gap: 20px;
  background: ${props => props.theme.bg};
`