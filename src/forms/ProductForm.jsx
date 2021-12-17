import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { setName, setPhone } from "../store/user/userReducer";
import MyButton from "../ui/MyButton";
import MyInput from "../ui/MyInput";
import PhoneInput from "../ui/PhoneInput";

const ProductForm = ({ className, isReview, onFormSubmit, ...props }) => {
  const dispatch = useDispatch();

  return (
    <div>
      <Formik
        initialValues={{ name: "", phone: "", message: "" }}
        validate={(values) => {
          const errors = {};
          if (!values.name) {
            errors.name = "Обязательно";
          } else if (/[0-9]/.test(values.name)) {
            errors.name = "Имя не может содержать цифры";
          }

          if (!values.message) {
            errors.message = "Обязательно";
          }

          if (!values.phone) {
            errors.phone = "Обязательно";
          } else if (
            !/^[+]?[\s./0-9]*[(]?[0-9]{1,4}[)]?[-\s./0-9]*$/g.test(values.phone)
          ) {
            errors.phone = "Введите верный номер телефона";
          }

          return errors;
        }}
        onSubmit={(values, { resetForm }) => {
          dispatch(setName(values.name));
          dispatch(setPhone(values.phone));

          resetForm({
            values: {
              name: "",
              phone: "",
              message: "",
            },
          });

          onFormSubmit();
        }}
      >
        {({ isSubmitting, isValid }) => (
          <Form className={`form ${className ? className : ""}`} {...props}>
            <div className="form__item">
              <Field name="name">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }) => (
                  <MyInput
                    labelClassName="name-label"
                    type="text"
                    placeholder="Введите имя"
                    error={meta.touched && meta.error ? meta.error : ""}
                    helpMessage={"* Ваше имя"}
                    {...field}
                  />
                )}
              </Field>
            </div>
            <div className="form__item">
              <Field name="phone">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }) => (
                  <PhoneInput
                    labelClassName="phone-label"
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    id={name}
                    error={meta.touched && meta.error ? meta.error : ""}
                    helpMessage={"* Ваш телефон"}
                    {...field}
                  />
                )}
              </Field>
            </div>
            <div className="form__item form__message">
              <Field name="message">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }) => (
                  <MyInput
                    labelClassName="text-label"
                    isTextarea={true}
                    placeholder={`Введите текст вашего ${
                      isReview ? "отзыва" : "вопроса"
                    }`}
                    helpMessage={`*${isReview ? "Ваш отзыв" : "Ваш вопрос"} `}
                    error={meta.touched && meta.error ? meta.error : ""}
                    {...field}
                  />
                )}
              </Field>
            </div>
            <div className="form__button-wrapper">
              <MyButton
                className="form__button"
                type="submit"
                disabled={isSubmitting || !isValid}
              >
                Отправить
              </MyButton>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default ProductForm;
