import { Search, VideoCallOutlined } from '@mui/icons-material'
import styled from 'styled-components'

export const Wrapper = styled.div`
  background-color: ${props => props.theme.bgLighter};
  color: ${props => props.theme.text};
  height: 10vh;
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: 999;
`
export const Content = styled.div`
  width: 100%;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const Left = styled.div`
  display: flex;
  align-items: center;

`
export const Image = styled.img`
  width: 50px;
`
export const Logo = styled.h4`

`
export const Center = styled.div`

`
export const Searchbox = styled.div`
  height: 35px;
  width: 450px;
  border: 1px solid ${props => props.theme.textSoft};
  color:${props => props.theme.text};
  display: flex;
  align-items: center;
  padding: 0 10px;
`
export const Input = styled.input`
  width: 100%;
  height: 100%;
  background: transparent;
  outline: none;
  border: none;
  font-size: 0.8rem;
  color:${props => props.theme.text};
`
export const SearchIcon = styled(Search)`
  color: ${props => props.theme.textSoft};
  font-size: 0.9rem;
`
export const Right = styled.div`
  display: flex;
  align-items: center;
`
export const ProfileImg = styled.img`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  margin: 0 10px;
`
export const ProfileName = styled.h5`
  font-weight: 500;

`
export const VideoIcon = styled(VideoCallOutlined)`
  font-size: 0.9rem;
  color: ${props => props.theme.text};
`
