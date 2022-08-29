import React from 'react';
import { Icon } from '@components/icons';
import { socialMedia, sourceRepository } from '@config';
import { Anchor, Footer, Text } from 'grommet';

const FooterComponent = () => (
  <Footer background="light-4" justify="center" pad="small">
    <Text textAlign="center " size="small">
      Built by Spencer Lepine
    </Text>
    <Text textAlign="center" size="small">
      <Anchor href={sourceRepository}>Source Code</Anchor>
    </Text>

    <Text textAlign="center" size="small">
      {socialMedia.map(social => (
        <Anchor href={social.url} key={social.name}>
          <Icon name={social.name}></Icon>
        </Anchor>
      ))}
    </Text>
  </Footer>
);

export default FooterComponent;
