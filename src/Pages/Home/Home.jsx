import PopularCategories from "../PopularCategories/PopularCategories";
import { Brands } from "./Sections/Brands/Brands";
import Cards from "./Sections/Card/Cards";
import Recomend from "./Sections/Discount/Recomend";
import Gaget from "./Sections/Gagets/Gaget";
import Product from "./Sections/Products/Product";
function Home() {
  return (
    <>
      <Gaget />
      <PopularCategories />
      <Product />
      <Cards />
      <Recomend />
      <Brands />
    </>
  );
}
export default Home;
