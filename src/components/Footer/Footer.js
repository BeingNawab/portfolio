import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:9509100269">9509100269</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:nawab.arzoo862@gmail.com">
          nawab.arzoo862@gmail.com
          </LinkItem>
        </LinkColumn>
        
      </LinkList>
      <SocialIconsContainer>
        
        <SocialContainer>
          <SocialIcons href="https://github.com/BeingNawab">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/nawab-arzoo-080313148/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://medium.com/@beingnawab">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
