import React from 'react'
import { Button, Content, Extras, Form, FormWrapper, Heading, HeadingBold, HeadingLight, Input, Lang, Options, Span, SpanOr, Wrapper } from './signIn.styles'
const SignIn = () => {
  return (
    <Wrapper>
      <Content>
        <FormWrapper>
          <Heading>
            <HeadingBold>
              Sign In
            </HeadingBold>
            <HeadingLight>
              to continue to TopzzTube
            </HeadingLight>
          </Heading>
          <Form>
            <Input placeholder='username'/>
            <Input placeholder='password'/>
            <Button type='submit'>
              Sign in
            </Button>
          </Form>
          <SpanOr>
            Or
          </SpanOr>
          <Button type='submit'>
            Sign in with Google
          </Button>
          <SpanOr>
            Or
          </SpanOr>
          <Form>
            <Input placeholder='username'/>
            <Input placeholder='email' type='email'/>
            <Input placeholder='password'/>
            <Button type='submit'>
              Sign up
            </Button>
          </Form>
        </FormWrapper>
      </Content>
      <Extras>
        <Lang>
          English(USA)
        </Lang>
        <Options>
          <Span>
            Help
          </Span>
           <Span>
            Privacy
          </Span>
           <Span>
            Terms
          </Span>
        </Options>
      </Extras>
      
    </Wrapper>
  )
}

export default SignIn 