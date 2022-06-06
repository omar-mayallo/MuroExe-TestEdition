import React, { useState } from "react";
import OptionList from "../../Components/Sections/USR-OptionList/OptionList";
import InfoList from "../../Components/Sections/USR-InfoList/InfoList";
import "./User.scss";

const User = () => {
  const [activeOption, setActiveOption] = useState(1);
  const changeActive = (idx) => {
    setActiveOption(idx);
  };

  return (
    <section className="user-page">
      <div className="container my-5">
        <div className="user-block">
          <div className="row">
            <aside className="options-block col-lg-3">
              <OptionList
                changeActive={changeActive}
                activeOption={activeOption}
              />
            </aside>
            <section className="info-block col-lg-9">
              <InfoList activeOption={activeOption} />
            </section>
          </div>
        </div>
      </div>
    </section>
  );
};

export default User;
