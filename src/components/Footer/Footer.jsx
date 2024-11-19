// Footer.jsx
import React from 'react';
import { colorTheme } from '../../styles/colors';
import { Box, Container, Stack, Text, Link } from '@chakra-ui/react';
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa';
import { MyFooter,FooterContainer, FooterSection, ListHeader, UnstyledLink,SocialIcons } from './FooterStyles';

export const Footer = () => {
  return (
    <MyFooter>
      <FooterContainer maxW="1200px">
        <FooterSection>
          <ListHeader>Compañía</ListHeader>
          <UnstyledLink href="#">Sobre Nosotros</UnstyledLink>
          <UnstyledLink href="#">Blog</UnstyledLink>
          <UnstyledLink href="#">Carreras</UnstyledLink>
          <UnstyledLink href="#">Contáctanos</UnstyledLink>
        </FooterSection>

        <FooterSection>
          <ListHeader>Soporte</ListHeader>
          <UnstyledLink href="#">Centro de Ayuda</UnstyledLink>
          <UnstyledLink href="#">Centro de Seguridad</UnstyledLink>
          <UnstyledLink href="#">Directrices de la Comunidad</UnstyledLink>
        </FooterSection>

        <FooterSection>
          <ListHeader>Legal</ListHeader>
          <UnstyledLink href="#">Política de Cookies</UnstyledLink>
          <UnstyledLink href="#">Política de Privacidad</UnstyledLink>
          <UnstyledLink href="#">Términos de Servicio</UnstyledLink>
          <UnstyledLink href="#">Cumplimiento Legal</UnstyledLink>
        </FooterSection>

        <FooterSection>
          <ListHeader>Descargar App</ListHeader>
          <UnstyledLink href="#">App Store</UnstyledLink>
          <UnstyledLink href="#">Google Play</UnstyledLink>
        </FooterSection>

        <FooterSection>
          <ListHeader>Síguenos</ListHeader>
          <SocialIcons>
            <Link href="#">
              <FaTwitter />
            </Link>
            <Link href="#">
              <FaYoutube />
            </Link>
            <Link href="#">
              <FaInstagram />
            </Link>
          </SocialIcons>
        </FooterSection>
      </FooterContainer>

      <Box textAlign="center" mt={10}>
        <Text color={colorTheme.platinum}>© 2023 Tu Empresa. Todos los derechos reservados</Text>
      </Box>
    </MyFooter>
  );
};

