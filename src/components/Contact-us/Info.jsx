import React from "react";

const Info = ({t}) => {
  return (
    <div className="">
      <div className="">
        <div>
          <h2 className="contact-card">{t("title")}</h2>
          <p>{t("subtitle")}</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
