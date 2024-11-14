import { DetailBox, ImagesBox, ItemBox } from './ItemDetailsStyle';
import { Carousel, InfoProducts} from '../components';
import { useById } from '../hooks';
import { useParams } from 'react-router';



export const ItemDetails = () => {
  
  const { idProduct } = useParams(); 
  console.log('El id es: ',idProduct);
  const { product, loading, error } = useById( idProduct );
  console.log('El producto Seleccionado es: ',product);


  if (loading) return <p>Cargando...</p>;
  if (error) return <p>Error al cargar el producto: {error.message}</p>;

   // Verificación de imágenes disponibles
  const Images= Array.isArray(product?.images)? product.images:[];
  if(Images.length===0){return (<p>No hay imagenes dispinbles para este producto</p>)};
  
  
  return (
    <ItemBox>
      <ImagesBox>
        <Carousel item={{ images: product.images }} />
      </ImagesBox>

      <DetailBox>
        <InfoProducts item={product}/>
      </DetailBox>



    </ItemBox>
  );
};


