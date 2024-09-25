import { ShopContext } from "../Components/Context/ShopContext";
import { useParams } from "react-router-dom";
import BreadCrums from "../Components/Breadcrums/BreadCrums";
import { useContext } from "react";
import Productdisplay from "../Components/Productdisplay/Productdisplay";
import DescriptionBox from "../Components/DescriptionBox/DescriptionBox";
import Related from "../Components/RelatedFolder/Related";

const Product = () => {
  const { all_product } = useContext(ShopContext);
  const { productId } = useParams();

  const Product = all_product.find((e) => e.id === Number(productId));
  return (
    <div>
      <BreadCrums Product={Product} />
      <Productdisplay Product={Product}/>
      <DescriptionBox/>
      <Related/>
    </div>
  );
};

export default Product;
