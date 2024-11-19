import styled from "styled-components";
import { colorTheme } from "../styles/colors";

export const CategoryBoxGrid = styled.div`
  display: flex;
  align-items: flex-start; /* Asegura que el contenido dentro del grid esté alineado al inicio */
  background-color: ${colorTheme.darkBlue};
  padding: 20px; /* Ajusta un poco el espacio */
`;

export const SideBar = styled.div`
  width: 350px;
  height: auto; /* Ajusta el alto según el contenido */
  padding: 20px;
  background-color: rgba(116, 179, 206, 0.1); /* Fondo sutil */
  border-right: 1px solid rgba(229, 229, 229, 0.35); /* Borde más suave */
  box-shadow: 0px 4px 12px rgba(80, 137, 145, 0.3); /* Sombra sutil */
  margin: 0 20px 20px 0; /* Márgenes para espaciado */
  border-radius: 15px; /* Bordes más suaves */
  overflow-y: auto; /* Scroll vertical si es necesario */
  
  h3 {
    text-align: center;
    font-size: 1.8rem;
    font-weight: bold;
    color: ${colorTheme.darkGreen};
    margin-bottom: 20px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  width: calc(100% - 370px); /* Ajusta para dejar espacio al SideBar */
  padding: 20px;
`;
