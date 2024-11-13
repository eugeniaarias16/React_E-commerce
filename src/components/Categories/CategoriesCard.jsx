import { useNavigate } from 'react-router-dom';
import { CategoryCardLink} from './CategoriesStyles'

export const CategoriesCard = ({ name, endPoint }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/category/${endPoint}`);
  };

  const upperName = name.toUpperCase();

  return (
    <CategoryCardLink onClick={handleClick}>
      <img src="https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/1.png" alt="" />
      <h4>{upperName}</h4>
    </CategoryCardLink>
  );
};





