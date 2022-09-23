import React from 'react'
import { Channel, Extra, Image, Info, InfoText, Pic, Time, Title, Views, Wrapper } from './videoCard.styles'

const VideoCard = () => {
  return (
    <Wrapper>
      <Image src='/images/img.jpg'/>
      <Info>
        <Pic src='/images/img.jpg'/>
        <InfoText>
          <Title>
            The stuff of Legends
          </Title>
          <Channel>
            Jonathan Presley
          </Channel>
          <Extra>
            <Views>
              250 views
            </Views>
            <Time>
              3 houre ago
            </Time>
          </Extra>
        </InfoText>

      </Info>

    </Wrapper>
  )
}

export default VideoCard