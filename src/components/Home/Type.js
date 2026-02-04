import React from "react";
import Typewriter from "typewriter-effect";
import { useTranslation } from "react-i18next"; // 1. Import

function Type() {
  const { t } = useTranslation(); // 2. Initialisation

  return (
    <Typewriter
      options={{
        strings: [
          t("type.software"),
          t("type.fullstack"),
          t("type.mern"),
          t("type.bpm"),
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;