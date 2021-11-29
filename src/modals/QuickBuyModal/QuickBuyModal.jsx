import React from "react";
import QuickBuyForm from "../../forms/QuickBuyForm";
import MyTitle from "../../ui/MyTitle";
import Modal from "../Modal";

const QuickBuyModal = ({ product, close, ...props }) => {
  return (
    <Modal
      className="quick-buy-modal icon contact-icon"
      close={close}
      {...props}
    >
      <MyTitle Component="h3" className="quick-buy__title">
        Купить товар в 1 клик
      </MyTitle>
      <p className="quick-buy__description">
        Сделайте заказ и наш менеджер свяжется с Вами
        <span> в течение 3 минут</span>
      </p>
      <QuickBuyForm
        className="quick-buy__form"
        closeModal={close}
        product={product}
      />
    </Modal>
  );
};

export default QuickBuyModal;
