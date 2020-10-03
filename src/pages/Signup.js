import React from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import { Container as ContainerBase } from "components/misc/Layouts";
import tw from "twin.macro";
import {NavLink} from "react-router-dom";
import styled from "styled-components";
//import { css } from "styled-components/macro"; //eslint-disable-line
import illustration from "images/svgs/signup.svg";
import logo from "images/logo.png";
import googleIconImageSrc from "images/google-icon.png";
import twitterIconImageSrc from "images/twitter-icon.png";
import { ReactComponent as SignUpIcon } from "feather-icons/dist/icons/user-plus.svg";

const Container = tw(ContainerBase)`max-h-full bg-gray-100 text-white font-medium sm:grid-cols-1 flex justify-center -m-1 max-h-full w-full`;
const Content = tw.div`max-w-screen-xl m-0 sm:mx-1  sm:w-full sm:flex sm:my-1 bg-gray-100 text-gray-900 shadow sm:rounded-lg flex justify-center flex-1 `;
const MainContainer = tw.div`lg:w-1/2 xl:w-5/12 p-6 sm:p-12`;
//const LogoLink = tw.a``;
const LogoImage = tw.img`h-12 mx-auto`;
const MainContent = tw.div`mt-12 flex flex-col items-center sm:w-full`;
const Heading = tw.h1`text-2xl xl:text-3xl font-extrabold`;
const FormContainer = tw.div`w-full flex-1 mt-8 sm:w-full `;

// const SocialButtonsContainer = tw.div`flex flex-col items-center`;
// const SocialButton = styled.a`
//   ${tw`w-full max-w-xs font-semibold rounded-lg py-3 border text-gray-900 bg-gray-100 hocus:bg-gray-200 hocus:border-gray-400 flex items-center justify-center transition-all duration-300 focus:outline-none focus:shadow-outline text-sm mt-5 first:mt-0`}
//   .iconContainer {
//     ${tw`bg-white p-2 rounded-full`}
//   }
//   .icon {
//     ${tw`w-4`}
//   }
//   .text {
//     ${tw`ml-4`}
//   }
// `;

const DividerTextContainer = tw.div`my-12 border-b text-center relative`;
//const DividerText = tw.div`leading-none px-2 inline-block text-sm text-gray-600 tracking-wide font-medium bg-white transform -translate-y-1/2 absolute inset-x-0 top-1/2 bg-transparent`;

const Form = tw.form`mx-auto max-w-xs`;
const Input = tw.input`w-full px-8 py-4 rounded-lg font-medium bg-gray-100 border border-gray-200 placeholder-gray-500 text-sm focus:outline-none focus:border-gray-400 focus:bg-white mt-5 first:mt-0`;
const SubmitButton = styled.button`
  ${tw`mt-5 tracking-wide font-semibold bg-green-500 text-gray-100 w-full py-4 rounded-lg hover:bg-primary-900 transition-all duration-1000 ease-in-out flex items-center justify-center focus:shadow-outline focus:outline-none`}
  .icon {
    ${tw`w-6 h-6 -ml-2`}
  }
  .text {
    ${tw`ml-3`}
  }
`;
const IllustrationContainer = tw.div`sm:rounded-r-lg flex-1 bg-purple-100 text-center hidden lg:flex justify-center`;
const IllustrationImage = styled.div`
  ${props => `background-image: url("${props.imageSrc}");`}
  ${tw`m-12 xl:m-16 w-full max-w-lg bg-contain bg-center bg-no-repeat`}
`;

export default ({
  logoLinkUrl = "#",
  illustrationImageSrc = illustration,
  headingText = "Sign Up to Tradity",
  socialButtons = [
    {
      iconImageSrc: googleIconImageSrc,
      text: "Sign Up With Google",
      url: "https://google.com"
    },
    {
      iconImageSrc: twitterIconImageSrc,
      text: "Sign Up With Twitter",
      url: "https://twitter.com"
    }
  ],
  submitButtonText = "Sign Up",
  SubmitButtonIcon = SignUpIcon,
  tosUrl = "#",
 
}) => (
  <AnimationRevealPage>
    <Container>
      <Content>
        <MainContainer>
          <NavLink to='/'>
            <LogoImage src={logo} />
          </NavLink>
          <MainContent>
            <Heading>{headingText}</Heading>
            <FormContainer>
              <DividerTextContainer></DividerTextContainer>
              <Form>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <SubmitButton type="submit">
                Tradity &nbsp;<SubmitButtonIcon className="icon" />
                  <span className="text">{submitButtonText}</span>
                </SubmitButton>
                <p tw="mt-6 text-xl text-gray-600 border-black p-20 w-full text-center m-5">
                 I agree to abide by tradity's 
                  <a href={tosUrl} tw="border-b border-black border-dotted">
                    {""} Terms of Service 
               {""} and its Privacy Policy <input type="checkbox"  />
                  </a>
                </p>

                <p tw="mt-8 text-sm text-gray-600 text-center">
                  Already have an account?{" "}
                  <NavLink to="/pages/Login"
                  activeStyle={{
                    fontWeight:"bold",
                    color:"red"
                  }}>
                    Sign In
                
                  </NavLink>
                </p>
              </Form>
            </FormContainer>
          </MainContent>
        </MainContainer>
        <IllustrationContainer>
          <IllustrationImage imageSrc={illustrationImageSrc} />
        </IllustrationContainer>
      </Content>
    </Container>
  </AnimationRevealPage>
);
