import React from "react";
import AnchorLink from "react-anchor-link-smooth-scroll";

//import { Rnd } from "react-rnd";
//import { motion } from "framer-motion";
//import DehazeIcon from "@material-ui/icons/Dehaze";
import "./MainLandingpage.css";

import HomeFooter from "components/footers/homeFooter";
//import login from "pages/Login";
import {Link} from "react-router-dom";


import { components } from "ComponentRenderer.js";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import {
  Container,
  Content2Xl,
  ContentWithVerticalPadding,
} from "components/misc/Layouts";
import tw from "twin.macro";
//import styled from "styled-components";
//import { css } from "styled-components/macro";
import { LogoLink } from "components/headers/light.js";
import { SectionHeading as HeadingBase } from "components/misc/Headings";
import { SectionDescription as DescriptionBase } from "components/misc/Typography";
import { PrimaryButton as PrimaryButtonBase } from "components/misc/Buttons.js";
import NiceSvg from "images/svgs/team.svg";
import NiceSvg1 from "images/svgs/data.svg";
//import NiceSvg2 from "images/svgs/finance.svg";
import NiceSvg3 from "images/svgs/invest.svg";
import TimelineIcon from '@material-ui/icons/Timeline';


import { ReactComponent as CheckboxIcon } from "feather-icons/dist/icons/check-circle.svg";

//import PhoneNav from "./components/PhoneNav/PhoneNav";
//import Login from "./pages/Login";
//import  Widget from "./components/features/widget";

//import logo from "images/logo.svg";
import logo1 from "images/logo.png";
//import useInView from "use-in-view";
//import Demo from "./components/PhoneNav/siDenav";


/* Hero */
const Row = tw.div`flex`;
const NavRow = tw(Row)`flex flex-col sm:flex sm:justify-start justify-center  justify-between`;


const HeroRow = tw(
  Row
)`flex-col lg:flex-row justify-between items-center py-20 lg:py-24 max-w-screen-2xl mx-auto sm:border-solid`;

const Column = tw.div``;
const TextColumn = tw(
  Column
)`mx-auto lg:mr-0 max-w-2xl lg:max-w-xl sm:flex-no-wrap xl:max-w-2xl flex-shrink-0`;
const Heading = tw(
  HeadingBase
)`text-center lg:text-left text-green-700 leading-snug mt-6 lg:text-sm md:text-base lg:mx-12`;
const Description = tw(
  DescriptionBase
)`mt-4 text-center lg:text-left lg:text-lg  sm:antialiased sm:text-3xl border p-2 shadow-sm flex text-gray-700 max-w-lg mx-auto lg:mx-0`;
const Actions = tw.div`flex flex-col sm:flex-row justify-center lg:justify-start`;
const ActionButton = tw(
  AnchorLink
)`px-8 py-3 font-bold rounded bg-primary-500 text-gray-100 hocus:bg-primary-700 hocus:text-gray-200 focus:shadow-outline focus:outline-none transition duration-300 mt-12 inline-block tracking-wide text-center px-10 py-4 font-semibold tracking-normal`;
const PrimaryButton = tw(ActionButton)`bg-green-500 sm:shadow-xl shadow sm:float-right `;
const SecondaryButton = tw(
  ActionButton
)`mt-6 sm:mt-12 sm:ml-8 bg-gray-300 text-gray-800 hocus:bg-gray-400 shadow hocus:text-gray-900  `;
const FeatureList = tw.ul`mt-6 leading-loose flex flex-wrap max-w-xl mx-auto lg:mx-0`;
const Feature = tw.li`mr-4  mb-4 flex items-center flex-shrink-0 w-full  p-2    sm:w-1/3 justify-center lg:justify-start`;
const FeatureIcon = tw(CheckboxIcon)`w-8 h-8  text-green-900`;
const FeatureText = tw.p`ml-8 text-xl font-medium  text-gray-700`;
const ImageColumn = tw(Column)`mx-auto lg:mr-0 relative mt-16 lg:mt-0 lg:ml-8`;
const ImageContainer = tw.div`mr-4`;
const Image = tw.img`max-w-full rounded-t p-4  sm:rounded`;

const SectionContainer = tw(ContentWithVerticalPadding)``;
const SectionHeading = tw(HeadingBase)`text-green-600 text-sm lg:text-xs`;
const SectionDescription = tw(
  DescriptionBase
)`text-center mx-auto text-gray-600 max-w-4xl border p-2`;
const MainloginPage= tw(PrimaryButtonBase)`float-right mt--8`;
const LogoImage = tw.img` `;


//const PreviewCard = tw(motion.a)`block rounded-lg shadow-raised`;
//const PreviewCardImageContainer = tw.div`rounded-t-lg border-0 border-b-0`;
//const PreviewCardImage = styled(motion.div)`
 // ${(props) => css`background-image: url("${props.imageSrc}");`}
 // ${tw`h-128 md:h-144 bg-cover bg-left-top`}
//`;
//const PreviewButton = tw(
 // PrimaryButtonBase
//)`w-full rounded-b-lg rounded-t-none py-5 font-semibold`;

//const ComponentsContainer = tw.div`mt-24`;
// const ComponentsType = tw.h3`text-4xl font-black text-primary-500 border-b-4 border-primary-500 inline-block`;
// const Components = tw.div``;
//const Component = tw.div`mt-12 border rounded-lg bg-white`;
//const ComponentHeading = tw.div`px-8 py-5 border-b flex flex-col sm:flex-row justify-between items-center`;
//const ComponentName = tw.h6`text-lg`;
//const ComponentPreviewLink = tw.a`mt-4 sm:mt-0 text-primary-500 hocus:text-primary-900 transition duration-300 font-semibold flex items-center`;
//const ComponentContent = tw.div`flex justify-between overflow-hidden rounded-b-lg bg-gray-600 relative`;
//const ResizableBox = styled(Rnd)`
 // ${tw`relative! bg-white pr-4`}
 // .resizeHandleWrapper > div {
  //  ${tw`w-4! right-0!`}
  //}
//`;
//const ResizeHandleButton = tw.button`cursor-col-resize focus:outline-none w-4 border-l bg-gray-100 absolute right-0 inset-y-0`;
export default ({
  features = null,
  primaryButtonUrl = "",
  primaryButtonText = "Start trading ",
  secondaryButtonUrl = "Secure",
  secondaryButtonText = "View services",
  primourl1="Signup",
  promourl3="Login",
  buttonRoundedCss = "",
  landingPages = components.landingPages,
  innerPages = components.innerPages,
  blocks = components.blocks
}) => {
  // const previewImageAnimationVariants = {
  //   rest: {
  //     backgroundPositionY: "0%",
  //   },
  //   hover: {
  //     backgroundPositionY: "100%",
  //     transition: { type: "tween", ease: "linear", duration: 5 },
  //   }
  // };

  const noOfLandingPages = Object.keys(landingPages).length;
 // const noOfInnerPages = Object.keys(innerPages).length;
  //const noOfComponentBlocks = Object.values(blocks).reduce(
  //   (acc, block) => acc + Object.keys(block.elements).length,
  //   0
  // );

  features = features || [
    ` Earn`,
    ` Trade`,
    `Be secure`,
   
  ];
 const Search = () => {
    //const [showResults, setShowResults] = React.useState(false)
    //const onClick = () => setShowResults(true);
    //const Close = () => showResults(false);
    return (
      <Link to="/pages/Login">
       <MainloginPage>
        
       Login Or Signup
        </MainloginPage>
        </Link>
       
    );
   
  }




//end navsvg-decorator-blob-3
  return (
    <div>
   
 
   <AnimationRevealPage disabled>
      <Container tw="bg-gray-100 -mx-8 -mt-8 pt-8 px-8">
        <Content2Xl>
          <NavRow>
            <LogoLink href="/">
              <LogoImage src={logo1} alt="" />
             
            </LogoLink>
           
            
            <Search />
         
          </NavRow>
          <HeroRow>
            <TextColumn>
           
              <Heading> INVEST AND EARN, SAFE WHILE AT HOME
              
              </Heading>
              <Description>
              Get investing insight from the top league forex traders in Africa. They do the analysis, you trade. Get exclusive webinar interviews from such traders and investors. Get to know how they do it as we prepare for our official launch. Get invite to our community
                
              </Description>
             
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <TimelineIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
              <Actions>
              
                <PrimaryButton>
                <Link to="/pages/Login"> {promourl3}</Link>
                </PrimaryButton>
                <SecondaryButton href={secondaryButtonUrl}>
                 <Link to="/pages/Signup" >{primourl1}</Link>
                </SecondaryButton>
              </Actions>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={NiceSvg} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>
         <HeroRow>
          <ImageColumn>
              <ImageContainer>
                <Image src={NiceSvg1} />
                </ImageContainer>
            </ImageColumn>
            <TextColumn>
              <Heading>Earn 
              </Heading>
              <Description>
             They do the analysis, you trade. Get exclusive webinar interviews from such traders and investors. 
              </Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
              <Actions>
                <PrimaryButton href={primaryButtonUrl} css={buttonRoundedCss}>
                  {primaryButtonText}
                </PrimaryButton>
                <SecondaryButton href={secondaryButtonUrl}>
                  {secondaryButtonText}
                </SecondaryButton>
              </Actions>
            </TextColumn>  
          </HeroRow>
          <HeroRow>
            <TextColumn>
              <Heading> Safe trading 
              </Heading>
              <ImageColumn>
            <ImageContainer>
                </ImageContainer>
              </ImageColumn>
              <Description>
             Get to know how they do it as we prepare for our official launch. Get invite to our community
              </Description>
              <FeatureList>
                {features.map((feature, index) => (
                  <Feature key={index}>
                    <FeatureIcon />
                    <FeatureText>{feature}</FeatureText>
                  </Feature>
                ))}
              </FeatureList>
            </TextColumn>
            <ImageColumn>
              <ImageContainer>
                <Image src={NiceSvg3} />
              </ImageContainer>
            </ImageColumn>
          </HeroRow>



          <SectionContainer id="landingPageDemos">
            <SectionHeading>
              Elit cillum anim sint cillum ut nisi excepteur minim ipsum non.
            </SectionHeading>
            <SectionDescription>
              Lorem50 {noOfLandingPages}Dolor laboris pariatur laborum commodo.
              Id quis ad tempor quis labore dolor anim. Velit aliquip magna
              labore qui ex sint pariatur laborum dolore magna incididunt
              pariatur ea occaecat. Reprehenderit anim nulla commodo consequat
              irure veniam occaecat. Quis dolor nulla nostrud id.
            </SectionDescription>
          </SectionContainer>
        </Content2Xl>
      </Container>
      <HomeFooter/>
    </AnimationRevealPage>
   
    
    </div>
    
  
  );
};

// const BlocksRenderer = ({ blocks }) => {
//   const [lastVisibleBlockIndex, setLastVisibleBlockIndex] = useState(0);

//   const updateLastVisibleBlockIndex = (index) => {
//     console.log("LAST WAS ", lastVisibleBlockIndex);
//     if (index > lastVisibleBlockIndex) setLastVisibleBlockIndex(index);
//   };

//   return <div></div>;
// };

// const Block = ({ notifyIsVisible, components }) => {
//   const offset = 30;
//   const [ref, inView] = useInView(offset);

//   useEffect(() => {
//     if (inView) notifyIsVisible();
//   }, [inView, notifyIsVisible]);

//   //const ResizeHandle = <div></div>;

 // const componentBlockRefs = {};

//   const updateComponentBlockIframeHeight = (iframe) => {
//     iframe.style.height = "auto";
//     iframe.style.height =
//       iframe.contentWindow.document.body.scrollHeight + "px";
//   };

//   return (
//     <div ref={ref} tw="mt-32">
//       <ComponentsType>{components.type}</ComponentsType>
//       <Components></Components>
//     </div>
//   );
// };
