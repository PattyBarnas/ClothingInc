import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import ClothItem from "./ClothItem/ClothItem";
import { useEffect, useState } from "react";

const AvailableClothes = () => {
  const [clothes, setClothes] = useState([
    {
      id: 1,
      name: "Nike Long sleeve shirt",
      description: "Size Large 100% cotton",
      price: 29.99,
    },
    {
      id: 2,
      name: "Calvin klein Jeans",
      description: "Size: 32x32 made from polyester",
      price: 59.99,
    },
    {
      id: 3,
      name: "Nike SB shoes",
      description: "Size 10.5, Ishod Wair model",
      price: 89.99,
    },
    {
      id: 4,
      name: "Nike Hoodie",
      description: "Size Large, made with 50% polyester and 50% twill",
      price: 39.99,
    },
  ]);

  // const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // useEffect(() => {
  //   const fetchClothes = async () => {
  //     setIsLoading(true);
  //     const response = await fetch("http://localhost:3000/clothes");

  //     if (!response.ok) throw new Error("something went wrong!");

  //     const responseData = await response.json();

  //     //returns Object
  //     console.log(responseData);
  //     const loadedClothes = [];
  //     // Want an array instead of objects so we

  //     for (const key in responseData) {
  //       loadedClothes.push({
  //         //have to use responseData.key[].Name <--- Name capitalized in database
  //         id: key,
  //         name: responseData[key].name,
  //         description: responseData[key].description,
  //         price: responseData[key].price,
  //       });
  //       console.log(loadedClothes);
  //     }

  //     setClothes(loadedClothes);
  //     setIsLoading(false);
  //   };

  //   fetchClothes().catch((error) => {
  //     setIsLoading(false);
  //     setError(error.message);
  //   });
  // }, []);

  // if (isLoading) {
  //   return (
  //     <section className={classes.MealsLoading}>
  //       <p>We are fetching your data!</p>
  //     </section>
  //   );
  // }

  if (error) {
    return (
      <section className={classes.MealsError}>
        <p>Uh Oh! there was an error {error}</p>
      </section>
    );
  }

  const clothesList = clothes.map((clothing) => (
    <ClothItem
      key={clothing.id}
      id={clothing.id}
      name={clothing.name}
      description={clothing.description}
      price={clothing.price}
    ></ClothItem>
  ));
  return (
    <section className={classes.clothes}>
      <Card>
        <ul>{clothesList}</ul>
      </Card>
    </section>
  );
};

export default AvailableClothes;
