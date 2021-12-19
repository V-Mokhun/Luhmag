import React, { Suspense } from "react";
import { Formik, Form, Field } from "formik";
import MyInput from "../ui/MyInput";
import MyButton from "../ui/MyButton";
import PhoneInput from "../ui/PhoneInput";
import { useDispatch } from "react-redux";
import { setName, setOrderPrice, setPhone } from "../store/user/userReducer";
import { useNavigate } from "react-router";
import { HOME_ROUTE, THANK_ORDER_ROUTE } from "../routes/routes";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";
import { clearCart } from "../store/cart/cartReducer";
import MyLoader from "../ui/MyLoader";
const CityModal = React.lazy(() => import("../modals/CityModal/CityModal"));

const OrderForm = ({ className, ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const city = useSelector((state) => state.user.city);
  const orderPrice = useSelector((state) => state.cart.totalPrice);
  const [modal, setModal] = useState(false);

  return (
    <Formik
      initialValues={{ name: "", phone: "", message: "", address: "" }}
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Обязательно";
        } else if (/[0-9]/.test(values.name)) {
          errors.name = "Имя не может содержать цифры";
        }

        if (!values.address) {
          errors.address = "Обязательно";
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
        dispatch(setOrderPrice(orderPrice));

        resetForm({
          values: {
            name: "",
            phone: "",
            message: "",
            address: "",
          },
        });
        dispatch(clearCart());

        navigate(THANK_ORDER_ROUTE);
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form className={`form ${className ? className : ""}`} {...props}>
          <div className="form__control form__radios" role="group">
            <span className="label-help">Способ доставки</span>
            <label className="form__radios-label">
              <Field
                className="form__radios-input"
                type="radio"
                name="method"
                value="pickup"
                checked
              />
              <span className="form__radios-text">Самовывоз</span>
            </label>
            <label className="form__radios-label">
              <Field
                className="form__radios-input"
                type="radio"
                name="method"
                value="courier"
              />
              <span className="form__radios-text">Курьерская доставка</span>
            </label>
            <label className="form__radios-label">
              <Field
                className="form__radios-input"
                type="radio"
                name="method"
                value="region"
              />
              <span className="form__radios-text">
                Доставка по области/краю
              </span>
            </label>
          </div>
          <div className="form__control form__delivery">
            <div className="form__city form__item">
              <span className="label-help">Выберите город:</span>
              <button
                type="button"
                className="form__city-button dropdown-link"
                onClick={() => setModal(true)}
              >
                {city}
              </button>
              <Suspense fallback={<MyLoader className={"fallback__loader"} />}>
                <CityModal show={modal} close={() => setModal(false)} />
              </Suspense>
            </div>
            <div className="form__address form__item">
              <Field name="address">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }) => (
                  <MyInput
                    labelClassName="search-label"
                    type="text"
                    placeholder="Адрес"
                    error={meta.touched && meta.error ? meta.error : ""}
                    helpMessage={"* Адрес доставки"}
                    {...field}
                  />
                )}
              </Field>
            </div>
          </div>
          <div className="form__control form__about">
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
          </div>
          <div className="form__control form__message">
            <Field name="message">
              {({
                field, // { name, value, onChange, onBlur }
              }) => (
                <MyInput
                  labelClassName="text-label"
                  isTextarea={true}
                  placeholder="Введите текст вашего примечания"
                  helpMessage={"Примечание "}
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
              type="submit"
              Component={Link}
              to={HOME_ROUTE}
            >
              Вернуться на сайт
            </MyButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
