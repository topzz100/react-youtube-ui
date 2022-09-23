import { Home, Search } from '@mui/icons-material'
import React from 'react'
import { Content, Heading, Hr, Item, Span, Wrapper } from './leftBar.styles'

type props = {
  lightMode : boolean,
  setLightMode: any
}

const LeftBar: React.FC<props> = ({lightMode, setLightMode}) => {

  return (
    <Wrapper>
      <Content>
        <Item>
          <Home/>
          <Span>
            Home
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            Explore
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            Subscriptions
          </Span>
        </Item>

        <Hr/>
        
        <Item>
          <Home/>
          <Span>
            Library
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            History
          </Span>
        </Item>
        <Hr/>
        <Heading>
          BEST OF TOPZZTUBE
        </Heading>
        <Item>
          <Home/>
          <Span>
            Music
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            Sports
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            Gaming
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            Movies
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            News
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            Live
          </Span>
        </Item>

        <Hr/>
        <Item>
          <Home/>
          <Span>
            Settings
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            Report
          </Span>
        </Item>
        <Item>
          <Home/>
          <Span>
            Help
          </Span>
        </Item>
        <Item onClick={() => setLightMode(!lightMode)}>
          <Home/>
          {
            lightMode?
            <Span>
              Dark Mode
            </Span>:
            <Span>
              Light Mode
            </Span>

          }
        </Item>

      </Content>
      
    </Wrapper>
  )
}

export default LeftBar