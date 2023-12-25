import { useEffect, useState } from "react";
import { api } from "../../services/api/axios/axiosConfig";

import { Container, OrderItems } from "./styles";

import { useOrders } from "../../hooks/useOrders";

export function OrderAndPay() {
  const { orders, handleRemoveOrder } = useOrders();
  const [total, setTotal] = useState();

  function handleRemove(id) {
    handleRemoveOrder(id);
  }

  useEffect(() => {
    console.log("OrderAndPay");
    console.log(orders);

    const totalValue = orders.reduce((acc, order) => {
      return acc + order.total;
    }, 0);

    const totalValueIntl = new Intl.NumberFormat("pt-BR", {
      style: "currency",
      currency: "BRL",
    }).format(totalValue);

    setTotal(totalValueIntl);
  }, [orders]);

  return (
    <Container>
      <h1>Meus pedidos</h1>
      {orders.map((order) => (
        <OrderItems key={order.id}>
          <img
            src={`${api.defaults.baseURL}/image/${order.image}`}
            alt="Prato"
          />
          <div>
            <div>
              <h2>
                {order.quantity} x {order.name}
              </h2>
              <span>R$ {order.total}</span>
            </div>
            <button onClick={() => handleRemove(order.id)}>Excluir</button>
          </div>
        </OrderItems>
      ))}
      {orders.length > 0 ? (
        <h2>Total: R$ {total}</h2>
      ) : (
        <h2>Lista de pedidos vazia!</h2>
      )}
    </Container>
  );
}
