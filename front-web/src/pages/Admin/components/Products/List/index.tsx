import React, { useEffect, useState, useCallback } from "react";
import { useHistory } from "react-router-dom";
import { ProductsResponse } from "core/types/Products";
import { makePrivateRequest, makeRequest } from "core/utils/request";
import Card from "../Card";
import Pagination from "core/components/Pagination";
import { toast } from "react-toastify";
import swal from "@sweetalert/with-react";

const List = () => {
  const [productsResponse, setProductsReponse] = useState<ProductsResponse>();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [isLoading, setIsLoading] = useState(false);
  const [activePage, setActivePage] = useState(0);
  const history = useHistory();

  const getProducts = useCallback(() => {
    const params = {
      page: activePage,
      linesPerPage: 4,
      direction: "DESC",
      orderBy: "id",
    };
    setIsLoading(true);
    makeRequest({ url: "/products", params })
      .then((response) => setProductsReponse(response.data))
      .finally(() => {
        setIsLoading(false);
      });
  }, [activePage]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleCreate = () => {
    history.push("/admin/products/create");
  };

  const onRemove = (productId: number) => {
    swal({
      title: "Você tem certeza que quer remover esse produto ?",
      text: "Ao deletar o produto, você não poderá recuperá-lo depois!",
      icon: "warning",
      buttons: ["NÃO!", "SIM!"],
      dangerMode: true,
    }).then((willDelete: any) => {
      if (willDelete) {
        makePrivateRequest({ url: `/products/${productId}`, method: "DELETE" })
          .then(() => {
            toast.info("Produto removido com sucesso");
            getProducts();
          })
          .catch(() => {
            toast.error("Erro ao remover produto");
          });
      } else {
        swal({ title: "Produto mantido!", icon: "success" });
      }
    });
  };

  return (
    <div className='admin-products-list'>
      <button className='btn btn-primary btn-lg' onClick={handleCreate}>
        ADICIONAR
      </button>
      <div className='admin-list-container'>
        {productsResponse?.content.map((product) => (
          <Card key={product.id} product={product} onRemove={onRemove} />
        ))}
        {productsResponse && (
          <Pagination
            totalPages={productsResponse.totalPages}
            activePage={activePage}
            onChange={(page) => setActivePage(page)}
          />
        )}
      </div>
    </div>
  );
};

export default List;
