import React from 'react'
import { Center, Content, Image, Input, Left, Logo, ProfileImg, ProfileName, Right, Searchbox, SearchIcon, VideoIcon, Wrapper } from './navbar.styles'

const Navbar = () => {
  return (
    <Wrapper>
      <Content>
        <Left>
          <Image src='https://www.iconpacks.net/icons/2/free-youtube-logo-icon-2431-thumb.png'/>
          <Logo>
            TopzzTube
          </Logo>
        </Left>
        <Center>
          <Searchbox>
            <Input placeholder='search'/>
            <SearchIcon/>
          </Searchbox>
        </Center>
        <Right>
          <VideoIcon/>
          <ProfileImg src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWQ2QobXwosj_esiqUwoeomdFbsWQO4hcGkA&usqp=CAU'/>
          <ProfileName>
            topzz
          </ProfileName>
        </Right>
      </Content>
    </Wrapper>
  )
}

export default Navbar