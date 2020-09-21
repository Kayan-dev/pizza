import React from "react";
import { useSelector, useDispatch } from "react-redux";

const selectUser = (reduxState) => {
  return reduxState.user;
};

const selectPizzas = (reduxState) => {
  return reduxState.pizzas;
};

// const new_Pizza = (reduxState) = > {
//     return
// }

export default function PizzaList() {
  const user = useSelector(selectUser);
  const pizza = useSelector(selectPizzas);

  //   const addPizza = useDispatch(new_Pizza);

  const compare_Bought = (pizza_a, pizza_b) => {
    return pizza_b.bought - pizza_a.bought;
  };

  const sort_Pizzas = [...pizza].sort(compare_Bought);

  return (
    <div>
      <h1>Pizza Explorer</h1>
      <p>
        Welcome back, <strong>{user.name}</strong>! Your favorite pizzas:
        {sort_Pizzas.map((pizz, index) => {
          return (
            <ul>
              <li>
                {" "}
                <strong>{pizz.name}</strong>
                <br></br>
                <strong>Description: </strong> {pizz.description}
                <br></br>
                <strong>Amount bought: </strong> {pizz.bought}
              </li>
            </ul>
          );
        })}
      </p>
      <p>TODO: the list of pizzas</p>
    </div>
  );
}
