import React, { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import Select from "react-select";
import { makePrivateRequest, makeRequest } from "core/utils/request";
import BaseForm from "../../BaseForm";
import { useHistory, useParams } from "react-router-dom";
import { Category } from "core/types/Products";
import "./styles.scss";

type FormState = {
  name: string;
  price: string;
  description: string;
  imgUrl: string;
  categories: Category[];
};

type ParamsType = {
  productId: string;
};

const Form = () => {
  const {
    register,
    handleSubmit,
    errors,
    setValue,
    control,
  } = useForm<FormState>();
  const history = useHistory();
  const { productId } = useParams<ParamsType>();
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [categories, setCategories] = useState<Category[]>([]);
  const isEditing = productId !== "create";
  const formTitle = isEditing ? "EDITAR PRODUTO" : "CADASTRAR UM PRODUTO";

  useEffect(() => {
    if (isEditing) {
      makeRequest({ url: `/products/${productId}` }).then((response) => {
        setValue("name", response.data.name);
        setValue("price", response.data.price);
        setValue("description", response.data.description);
        setValue("imgUrl", response.data.imgUrl);
        setValue("categories", response.data.categories);
      });
    }
  }, [productId, isEditing, setValue]);

  useEffect(() => {
    setIsLoadingCategories(true);
    makeRequest({ url: "/categories" })
      .then((response) => {
        setCategories(response.data.content);
      })
      .finally(() => setIsLoadingCategories(false));
  }, []);

  const onSubmit = (data: FormState) => {
    makePrivateRequest({
      url: isEditing ? `/products/${productId}` : "/products",
      method: isEditing ? "PUT" : "POST",
      data,
    })
      .then(() => {
        toast.info("Produto salvo com sucesso!");
        history.push("/admin/products");
      })
      .catch(() => {
        toast.error("Erro ao salvar produto");
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseForm title={formTitle}>
          <div className='row'>
            <div className='col-6'>
              <div className='margin-bottom-30'>
                <input
                  ref={register({
                    required: "Campo obrigatório",
                    minLength: {
                      value: 5,
                      message: "O campo deve ter no mínimo 5 caracteres",
                    },
                    maxLength: {
                      value: 60,
                      message: "O campo deve ter no máximo 60 caracteres",
                    },
                  })}
                  type='text'
                  className='form-control input-base'
                  name='name'
                  placeholder='Nome do Produto'
                />
                {errors.name && (
                  <div className='invalid-feedback d-block'>
                    {errors.name.message}
                  </div>
                )}
              </div>
              <div className='margin-bottom-30'>
                <Controller
                  name='categories'
                  rules={{ required: true }}
                  control={control}
                  isLoading={isLoadingCategories}
                  as={Select}
                  options={categories}
                  getOptionLabel={(option: Category) => option.name}
                  getOptionValue={(option: Category) => String(option.id)}
                  isMulti
                  placeholder='Categorias'
                  classNamePrefix='categories-select'
                />
                {errors.categories && (
                  <div className='invalid-feedback d-block'>
                    Campo Obrigatório
                  </div>
                )}
              </div>
              <div className='margin-bottom-30'>
                <input
                  ref={register({ required: "Campo obrigatório" })}
                  type='number'
                  className='form-control input-base'
                  name='price'
                  placeholder='Preço'
                />
                {errors.price && (
                  <div className='invalid-feedback d-block'>
                    {errors.price.message}
                  </div>
                )}
              </div>
              <div className='margin-bottom-30'>
                <input
                  ref={register({ required: "Campo obrigatório" })}
                  type='text'
                  className='form-control input-base'
                  name='imgUrl'
                  placeholder='Imagem do produto'
                />
                {errors.imgUrl && (
                  <div className='invalid-feedback d-block'>
                    {errors.imgUrl.message}
                  </div>
                )}
              </div>
            </div>
            <div className='col-6'>
              <textarea
                ref={register({ required: "Campo obrigatório" })}
                placeholder='Descrição'
                className='form-control input-base'
                name='description'
                cols={30}
                rows={10}
              />
              {errors.description && (
                <div className='invalid-feedback d-block'>
                  {errors.description.message}
                </div>
              )}
            </div>
          </div>
        </BaseForm>
      </form>
    </div>
  );
};

export default Form;
