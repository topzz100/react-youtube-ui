import { ArticleOutlined, ExploreOutlined, FlagOutlined, HelpOutlineOutlined, HistoryOutlined, Home, LibraryMusicOutlined, LiveTvOutlined, MovieOutlined, Search, SettingsOutlined, SportsBasketballOutlined, SportsEsportsOutlined, SubscriptOutlined, VideoLibraryOutlined } from '@mui/icons-material'
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
          <ExploreOutlined/>
          <Span>
            Explore
          </Span>
        </Item>
        <Item>
          <SubscriptOutlined/>
          <Span>
            Subscriptions
          </Span>
        </Item>

        <Hr/>
        
        <Item>
          <VideoLibraryOutlined/>
          <Span>
            Library
          </Span>
        </Item>
        <Item>
          <HistoryOutlined/>
          <Span>
            History
          </Span>
        </Item>
        <Hr/>
        <Heading>
          BEST OF TOPZZTUBE
        </Heading>
        <Item>
          <LibraryMusicOutlined/>
          <Span>
            Music
          </Span>
        </Item>
        <Item>
          <SportsBasketballOutlined/>
          <Span>
            Sports
          </Span>
        </Item>
        <Item>
          <SportsEsportsOutlined/>
          <Span>
            Gaming
          </Span>
        </Item>
        <Item>
          <MovieOutlined/>
          <Span>
            Movies
          </Span>
        </Item>
        <Item>
          <ArticleOutlined/>
          <Span>
            News
          </Span>
        </Item>
        <Item>
          <LiveTvOutlined/>
          <Span>
            Live
          </Span>
        </Item>

        <Hr/>
        <Item>
          <SettingsOutlined/>
          <Span>
            Settings
          </Span>
        </Item>
        <Item>
          <FlagOutlined/>
          <Span>
            Report
          </Span>
        </Item>
        <Item>
          <HelpOutlineOutlined/>
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