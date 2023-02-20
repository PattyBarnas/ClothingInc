import ClothesSummary from "./ClothesSummary";
import AvailableClothes from "./AvailableClothes";
import { Fragment } from "react";
const Clothes = (props) => {
  return (
    <Fragment>
      <ClothesSummary></ClothesSummary>
      <AvailableClothes></AvailableClothes>
    </Fragment>
  );
};

export default Clothes;
