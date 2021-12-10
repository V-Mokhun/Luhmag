import React from "react";
import { Formik, Form, Field } from "formik";
import MyInput from "../ui/MyInput";
import MyButton from "../ui/MyButton";
import { useDispatch } from "react-redux";
import { setEmail, setName } from "../store/user/userReducer";

const FeedbackForm = ({ className, openModal, ...props }) => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ name: "", email: "", message: "" }}
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

        if (!values.email) {
          errors.email = "Обязательно";
        } else if (
          !values.email.toLowerCase().match(
            // eslint-disable-next-line no-useless-escape
            /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
        ) {
          errors.email = "Введите верную почту";
        }

        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        dispatch(setName(values.name));
        dispatch(setEmail(values.email));

        resetForm({
          values: {
            name: "",
            email: "",
            message: "",
          },
        });

        openModal();
      }}
    >
      {({ isSubmitting, isValid }) => (
        <Form className={`form ${className ? className : ""}`} {...props}>
          <div className="form__control">
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
              <Field name="email">
                {({
                  field, // { name, value, onChange, onBlur }
                  meta,
                }) => (
                  <MyInput
                    labelClassName="email-label"
                    type="email"
                    placeholder="Введите e-mail"
                    error={meta.touched && meta.error ? meta.error : ""}
                    helpMessage={"* E-mail, на который будет отправлен ответ"}
                    {...field}
                  />
                )}
              </Field>
            </div>
          </div>
          <div className="form__checkboxes" role="group">
            <span className="label-help">Выберите ваш вопрос</span>
            <label className="form__checkboxes-label">
              <Field
                className="form__checkboxes-check"
                type="checkbox"
                name="checked"
                value="proposition"
              />
              <span className="form__checkboxes-text">
                Хочу предложить сотрудничество
              </span>
            </label>
            <label className="form__checkboxes-label">
              <Field
                className="form__checkboxes-check"
                type="checkbox"
                name="checked"
                value="order"
              />
              <span className="form__checkboxes-text">Вопрос по заказу</span>
            </label>
            <label className="form__checkboxes-label">
              <Field
                className="form__checkboxes-check"
                type="checkbox"
                name="checked"
                value="complain"
              />
              <span className="form__checkboxes-text">
                Оставить жалобу на сотрудника
              </span>
            </label>
            <label className="form__checkboxes-label">
              <Field
                className="form__checkboxes-check"
                type="checkbox"
                name="checked"
                value="question"
              />
              <span className="form__checkboxes-text">Другой вопрос</span>
            </label>
          </div>
          <div className="form__item form__item-textarea">
            <Field name="message">
              {({
                field, // { name, value, onChange, onBlur }
                meta,
              }) => (
                <MyInput
                  labelClassName="text-label"
                  isTextarea={true}
                  placeholder="Введите текст вашего сообщения"
                  error={meta.touched && meta.error ? meta.error : ""}
                  helpMessage={"*Ваше сообщение "}
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
  );
};

export default FeedbackForm;
