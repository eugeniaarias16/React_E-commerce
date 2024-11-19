import { Container, Link, Box } from "@chakra-ui/react";
import styled from "styled-components";
import { colorTheme } from "../../styles/colors";

export const SectionCategdBox = styled(Box)`
  width: 90%;
  margin: 100px auto;
  min-height: min-content;
  overflow-x: auto;
  scrollbar-color: ${colorTheme.darkGreen} ${colorTheme.tealGreen};
  scrollbar-width: thin;
  scroll-behavior: smooth;

  h2 {
    position: sticky; /* Fija el h2 con respecto al scroll horizontal */
    left: 50%; /* Centra el h2 en el contenedor */
    transform: translateX(-50%); /* Ajusta la posición para centrar */
    top: 0; /* Mantiene la posición en el eje Y del contenedor */
    font-size: 30px;
    color: ${colorTheme.lightBlue};
    text-transform: uppercase;
    font-weight: bold;
    padding: 20px 40px;
    text-align: center;
    background-color: rgba(0, 67, 70, 0.6); /* Fondo oscuro translúcido */
    border-radius: 15px;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.3); /* Sombra sutil */
    width: auto;
    display: inline-block;
    z-index: 1; /* Asegura que el h2 quede sobre otros elementos dentro del contenedor */
  }
`;



export const CategoriesContainer = styled(Container)`
  margin: auto;
  width: max-content;
  padding: 50px;
  display: flex;
  gap: 20px;
  overflow-x: auto;
  height: 100%;
`;

export const CategoryCardLink = styled(Link)`
  width: 300px;
  height: 200px;
  background-color: ${colorTheme.platinum};
  border-radius: 20px;
  border: solid 1px ${colorTheme.tealGreen};
  box-shadow: -4px 6px 12px rgba(0, 0, 0, 0.15); 
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: scale(1.05);
    box-shadow: -4px 8px 16px rgba(0, 0, 0, 0.3); 
  }

  img {
    height: 90%;
    aspect-ratio: 1/1;
    transition: opacity 0.3s ease;
    z-index: 1;
  }

  h4 {
    color: ${colorTheme.tealGreen};
    font-size: 28px;
    font-weight: 300;
    text-align: center;
    width: 80%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    opacity: 0;
    z-index: 2;
    transition: opacity 0.3s ease;
  }

  &:hover {
    img {
      opacity: 0.2; 
    }

    h4 {
      opacity: 1; 
    }
  }
`;

export const FiltersWrapper = styled.div`
  width: 100%;
  padding: 1.5rem;
  background-color: ${colorTheme.platinum};
  border-radius: 15px;
  box-shadow: 0px 2px 8px rgba(0, 0, 0, 0.1); /* Sombra ligera */
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

export const FilterSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  .range-labels {
    display: flex;
    gap: 1rem;
    align-items: center;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  font-size: 1rem;
  color: ${colorTheme.darkGreen80};
`;

export const Input = styled.input`
  width: ${(props) => (props.type === "number" ? "80px" : "auto")};
  padding: 0.5rem 1rem;
  border: 1px solid ${colorTheme.tealGreen};
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: rgba(229, 229, 229, 0.5);
  outline: none;

  &:focus {
    border-color: ${colorTheme.darkGreen};
    box-shadow: 0 0 4px rgba(0, 67, 70, 0.6);
  }
`;

export const Select = styled.select`
  width: 100%;
  padding: 0.5rem 1rem;
  border: 1px solid ${colorTheme.tealGreen};
  border-radius: 8px;
  font-size: 0.9rem;
  background-color: rgba(229, 229, 229, 0.5);
  outline: none;

  &:focus {
    border-color: ${colorTheme.darkGreen};
    box-shadow: 0 0 4px rgba(0, 67, 70, 0.6);
  }
`;

export const ApplyButton = styled.button`
  width: 100%;
  padding: 0.75rem;
  background-color: ${colorTheme.green};
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colorTheme.darkGreen};
  }

  &:active {
    background-color: ${colorTheme.darkGreen80};
  }
`;
