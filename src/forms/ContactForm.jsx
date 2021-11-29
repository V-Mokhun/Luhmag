import React from "react";
import { Formik, Form, Field } from "formik";
import MyInput from "../ui/MyInput";
import MyButton from "../ui/MyButton";
import PhoneInput from "../ui/PhoneInput";
import { useDispatch } from "react-redux";
import { setName, setPhone } from "../store/user/userReducer";
import { useNavigate } from "react-router";
import { THANK_CONTACT_ROUTE } from "../routes/routes";

const ContactForm = ({ className, closeModal, buttonText, ...props }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <Formik
      initialValues={{ name: "", phone: "" }}
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

        resetForm({
          values: {
            name: "",
            phone: "",
          },
        });

        if (closeModal) {
          closeModal();
        }

        navigate(THANK_CONTACT_ROUTE);
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
              {buttonText ? buttonText : "Позвонить мне"}
            </MyButton>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
