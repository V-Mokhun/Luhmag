import React from "react";
import { Formik, Form, Field } from "formik";
import MyInput from "../ui/MyInput";
import MyButton from "../ui/MyButton";
import PhoneInput from "../ui/PhoneInput";
import MyCounter from "../ui/MyCounter";
import { useNavigate } from "react-router";
import { HOME_ROUTE, THANK_ORDER_ROUTE } from "../routes/routes";
import { useDispatch } from "react-redux";
import { setName, setOrderPrice, setPhone } from "../store/user/userReducer";

const QuickBuyForm = ({ className, closeModal, product, ...props }) => {
  const { image, title: name, price } = product;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "",
        count: 1,
        totalPrice: price,
      }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Обязательно";
        } else if (/[0-9]/.test(values.name)) {
          errors.name = "Имя не может содержать цифры";
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
        dispatch(setOrderPrice(values.totalPrice));

        resetForm({
          values: {
            name: "",
            phone: "",
            count: 1,
            totalPrice: price,
          },
        });

        closeModal();
        navigate(THANK_ORDER_ROUTE);
      }}
    >
      {({ isSubmitting, isValid, values, setValues }) => (
        <Form className={`form ${className ? className : ""}`} {...props}>
          <div className="quick-buy__product">
            <div className="quick-buy__image">
              <img src={image} alt={name} />
            </div>
            <h4 className="quick-buy__name">{name}</h4>
            <MyCounter
              className="quick-buy__counter"
              total={values.count}
              onDecrease={() => {
                if (values.count <= 1) {
                  setValues({
                    ...values,
                    count: 1,
                    totalPrice: price,
                  });
                } else {
                  setValues({
                    ...values,
                    count: values.count - 1,
                    totalPrice: (values.count - 1) * price,
                  });
                }
              }}
              onIncrease={() =>
                setValues({
                  ...values,
                  count: values.count + 1,
                  totalPrice: (values.count + 1) * price,
                })
              }
            />
            <div className="quick-buy__price">{values.totalPrice}₽</div>
          </div>
          <div className="form__item">
            <Field name="name">
              {({
                field, // { name, value, onChange, onBlur }
                meta,
              }) => (
                <MyInput
                  labelClassName="name-label"
                  type="text"
                  placeholder="Имя"
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
          <div className="form__button-wrapper">
            <MyButton
              className="form__button"
              type="submit"
              disabled={isSubmitting || !isValid}
            >
              Оформить заказ
            </MyButton>
            <MyButton
              className="form__button button--secondary"
              type="button"
              onClick={() => {
                closeModal();
                navigate(HOME_ROUTE);
              }}
            >
              Вернуться на сайт
            </MyButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default QuickBuyForm;
