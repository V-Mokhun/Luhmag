import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
import { HOME_ROUTE } from "../routes/routes";

const ThankContact = () => {
  const name = useSelector((state) => state.user.name);
  const phone = useSelector((state) => state.user.phone);

  if (!name || !phone) {
    return <Navigate to={HOME_ROUTE} />;
  }

  return (
    <div>
      Thank call
      {name}
      {phone}
    </div>
  );
};

export default ThankContact;
