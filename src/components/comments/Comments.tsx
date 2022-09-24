import React from 'react'
import { Comment, Commentwrapper, Image, Info, Input, InputWrapper, Name, Pic, Text, Time, Wrapper } from './comments.style'

const Comments = () => {
  return (
    <Wrapper>
      <InputWrapper>
        <Image src='/images/img.jpg'/>
        <Input placeholder='Add a comment...'/>
      </InputWrapper>
      <Commentwrapper>
        <Pic src='/images/img.jpg'/>
        <Comment>
          <Info>
            <Name>
              Julit brown
            </Name>
            <Time>
              4 days ago
            </Time>
          </Info>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam modi, deleniti est minima doloremque repellendus doloribus culpa reprehenderit blanditiis fugit?
          </Text>
      </Comment>
      </Commentwrapper>
      <Commentwrapper>
        <Pic src='/images/img.jpg'/>
        <Comment>
          <Info>
            <Name>
              Julit brown
            </Name>
            <Time>
              4 days ago
            </Time>
          </Info>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam modi, deleniti est minima doloremque repellendus doloribus culpa reprehenderit blanditiis fugit?
          </Text>
      </Comment>
      </Commentwrapper>
      <Commentwrapper>
        <Pic src='/images/img.jpg'/>
        <Comment>
          <Info>
            <Name>
              Julit brown
            </Name>
            <Time>
              4 days ago
            </Time>
          </Info>
          <Text>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quibusdam modi, deleniti est minima doloremque repellendus doloribus culpa reprehenderit blanditiis fugit?
          </Text>
      </Comment>
      </Commentwrapper>
      
    </Wrapper>
  )
}

export default Comments