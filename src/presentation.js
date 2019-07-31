// Import React
import React from 'react';

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Quote,
  Slide,
  Text,
  Notes,
  CodePane,
  Code
} from 'spectacle';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

//Import images
import nameLogo from './assets/logo-w-name.png';
import secrets from './assets/keepyoursecrets.jpg';

//Import icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, 
         faTwitter,
         faDev } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: 'white',
    secondary: '#1F2022',
    tertiary: '#0074AD',
    quaternary: '#CECECE',
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica',
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={['zoom', 'slide']}
        transitionDuration={500}
        theme={theme}
        progress={'bar'}
        showFullscreenControl={false}
        controls={false}
      >
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            POUR
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={1} fit bold>
            Perceivable, Operable, Understandable, Robust
          </Text>
          <Notes>
            <List>
              <ListItem>Kayla Sween</ListItem>
              <ListItem>Powerlifter</ListItem>
              <ListItem>friendly neighborhood accessibility person</ListItem>
              <ListItem>Developer</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <CodePane lang="js" source={require("./assets/a11y.txt")}></CodePane>
          <Notes>
            Couple things to note before we get started:
            <List>
              <ListItem>a11y - accessibility</ListItem>
              <ListItem>weba11y - designing and developing for everyone</ListItem>
              <ListItem>WCAG - set of guidleines for devs and designers to follow to help make their content more accessible.</ListItem>
              <ListItem>all/most WCAG guidelines fit into POUR</ListItem>
              <ListItem>Domino's pizza, Queen Bey</ListItem>
              <ListItem>Important, not a "nice to have"</ListItem>
              <ListItem>Lawsuits aside, goodness of heart</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            Perceivable
          </Heading>
          <Text size={6} textColor="primary">
            Your application can be perceived.
          </Text>
          <Notes>
            <List>
              <ListItem>Insightful, I know.</ListItem>
              <ListItem>when building app, usually assume have all 5 senses. (sight, touch, hear most applicable)</ListItem>
              <ListItem>Not true. could have part or all of a sense taken away</ListItem>
              <ListItem>Make sure content can be perceived via multiple senses</ListItem>
              <ListItem>How many watch videos with captions on if in noisy area?</ListItem>
              <ListItem>Also applies to content structure and elements used</ListItem>
              <ListItem>Navs usually uls styled for a reason: if css not load, intent still comes across</ListItem>
              <ListItem>Make sure your users use websites to</ListItem>
              <ListItems>These kind of flow between POUR principles</ListItems>
            </List>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            Operable
          </Heading>
          <Text size={6} textColor="primary">
            Your application can be operated.
          </Text>
          <Notes>
            <List>
              <ListItem>usable via multiple input methods (mouse, keyboard, voice control)</ListItem>
              <ListItem>also includes search functionality to have multiple ways to get to content</ListItem>
              <ListItem>Get to all elements, get away from them (especially via keyboard)</ListItem>
              <ListItem>clickable/tappable targets large enough</ListItem>
              <ListItem>Time limits inhibit user from operating</ListItem>
              <ListItem>Enough time to read and use content</ListItem>
              <ListItem>Error handling - recover from mistakes</ListItem>
              <ListItem>confirmation screen</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            Understandable
          </Heading>
          <Text size={6} textColor="primary">
            Your application can be understood.
          </Text>
          <Notes>
            <List>
              <ListItems>Comprehend content and operation</ListItems>
              <ListItem>page language</ListItem>
              <ListItems>Jargon/abbrev defined</ListItems>
              <ListItems>Reading level (rec?)</ListItems>
              <ListItem>Goes with perceivable (alt, captions, etc)</ListItem>
              <ListItem>Operation understandable as well</ListItem>
              <ListItem>Nav consistent and predictable</ListItem>
              <ListItem>Form elements consistent behavior and clearly labeled</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary">
          <Heading size={2} textColor="primary" caps>
            Robust
          </Heading>
          <Text size={6} textColor="primary">
            Your application needs to "just work!"&trade;
          </Text>
          <Notes>
            <List>
              <ListItem>Should work in many different environments</ListItem>
              <ListItem>Don't know what users are going to use</ListItem>
              <ListItem>Test in multiple browsers, not saying develop for IE6</ListItem>
              <ListItem>Responsive</ListItem>
              <ListItem>Free of errors</ListItem>
              <ListItem>Semantic HTML</ListItem>
              <ListItem>Validate code: Make sure closing tags</ListItem>
              <ListItem>IDEs do for you, but make sure</ListItem>
              <ListItem>Make sure utilize best practices and conform to specs</ListItem>
            </List>
          </Notes>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary" caps>
            As developers, we create things for our users.
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Heading size={4} textColor="primary" caps>
            Care about your users.
          </Heading>
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src={secrets} height={'20em'}
                 alt="Meme. Still of Frodo Baggins from Lord of the Rings that says *no alt text or image description.* visually impaired people: all right, then. keep your secrets." />
        </Slide>

        <Slide transition={['fade']} bgColor="secondary" textColor="primary">
          <Image src={nameLogo} alt="Kayla Sween logo with owl" padding={10} />
          <Text size={6} textColor="primary" padding={10}>
            <FontAwesomeIcon icon={faTwitter} alt="Twitter" /> @_KaylaSween
          </Text>
          <Text size={6} textColor="primary" padding={10}>
            <FontAwesomeIcon icon={faGithub} alt="GitHub" /> kaylasween
          </Text>
          <Text size={6} textColor="primary" padding={10}>
            <FontAwesomeIcon icon={faDev} alt="Dev community" />  kaylasween
          </Text>
          <Text size={6} textColor="primary" padding={10}>
            <FontAwesomeIcon icon={faEnvelope}/> kayla@kaylasween.com
          </Text>
        </Slide>
      </Deck>
    );
  }
}
