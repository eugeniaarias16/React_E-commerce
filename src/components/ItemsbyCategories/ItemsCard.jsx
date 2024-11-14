import { useNavigate } from 'react-router-dom';
import { CardBox, BoxInfo, Brand, Price } from './index';
import { Link } from '@chakra-ui/react';

export const ItemsCard = ({ item, endPoint }) => {  
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${endPoint}/${item.id}`);
  };

  return (
    <CardBox key={item.id} onClick={handleClick}>
      <img src={item.images[0]} alt={item.title} />
      <BoxInfo>
        <h4>{item.title}</h4>
        <Brand>{item.brand}</Brand>
        <Price>${item.price}</Price>
      </BoxInfo>
      <Link onClick={handleClick}>Ver más</Link>
    </CardBox>
  );
};
