import { useNavigate } from 'react-router-dom';
import { CategoryCardLink } from './CategoriesStyles';
import { useItemsbyCategory } from '../../hooks';
import { useEffect, useState } from 'react';

export const CategoriesCard = ({ name, endPoint }) => {
  const navigate = useNavigate();
  const { items, loading, coverImage } = useItemsbyCategory(endPoint);
  const [imageToShow, setImageToShow] = useState(null);

  useEffect(() => {
    if (!loading && coverImage) {
      setImageToShow(coverImage);
    }
  }, [loading, coverImage]);

  const handleClick = () => {
    navigate(`/category/${endPoint}`);
  };

  const upperName = name.toUpperCase();

  return (
    <CategoryCardLink onClick={handleClick}>
      {imageToShow && <img src={imageToShow} alt={`${upperName} cover`} />}
      <h4>{upperName}</h4>
    </CategoryCardLink>
  );
};
