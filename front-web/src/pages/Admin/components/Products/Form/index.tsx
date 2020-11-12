import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { makePrivateRequest } from "core/utils/request";
import BaseForm from "../../BaseForm";
import "./styles.scss";

type FormState = {
  name: string;
  price: string;
  imageUrl: string;
  description: string;
};

const Form = () => {
  const { register, handleSubmit, errors } = useForm<FormState>();

  const onSubmit = (data: FormState) => {
    makePrivateRequest({ url: "/products", method: "POST", data });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <BaseForm title='CADASTRAR UM PRODUTO'>
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
                  name='imageUrl'
                  placeholder='Imagem do produto'
                />
                {errors.imageUrl && (
                  <div className='invalid-feedback d-block'>
                    {errors.imageUrl.message}
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
