import { AddTaskOutlined, Home, ReplyOutlined, ThumbDownAltOutlined, ThumbUpOutlined } from '@mui/icons-material'
import Comments from '../comments/Comments'
import { ChannelDesc, ChannelInfo, ChannelLeft, ChannelProfile, ChannelTitle, Extra, Hr, Image, Info, Item, Options, Pic, Span, SubNum, Subscribe, Time, Title, VideoInfo, VideoInfoBottom, Views, Wrapper } from './videoMain.styles'

const VideoMain = () => {
  return (
    <Wrapper>
      <Image src='/images/img.jpg'/>
      <Info>
        <VideoInfo>
          <Title>
            Where Do Crows Come From
          </Title>
          <VideoInfoBottom>
            <Extra>
              <Views>
                350 views
              </Views>
              <Time>
                5 hours ago
              </Time>
            </Extra>
            <Options>
              <Item>
                <ThumbUpOutlined/>
                <Span>
                  Like
                </Span>
              </Item>
              <Item>
                <ThumbDownAltOutlined/>
                <Span>
                  Dislike
                </Span>
              </Item>
              <Item>
                <ReplyOutlined/>
                <Span>
                  Share
                </Span>
              </Item>
              <Item>
                <AddTaskOutlined/>
                <Span>
                  Save
                </Span>
              </Item>
            </Options>
          </VideoInfoBottom>
          
        </VideoInfo>

        <Hr/>

        <ChannelInfo>
          <ChannelLeft>
            <Pic src='/images/img.jpg'/>
            <ChannelProfile>
              <ChannelTitle>
                Janet Arthemopart
              </ChannelTitle>
              <SubNum>
                150k subscribers
              </SubNum>
              <ChannelDesc>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, minus.
              </ChannelDesc>
            </ChannelProfile>
          </ChannelLeft>
          <Subscribe>
            SUBSCRIBE
          </Subscribe>
        </ChannelInfo>

        <Hr/>

        <Comments/>

      </Info>
      
    </Wrapper>
  )
}

export default VideoMain 