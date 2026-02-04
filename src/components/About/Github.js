import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";
import { useTranslation } from "react-i18next"; // Import du hook

function Github() {
  const { t } = useTranslation(); // Initialisation

  // Optionnel : Traduction des étiquettes du calendrier (Moins / Plus)
  const calendarLabels = {
    totalCount: t("github.contributions", { count: "{{count}}" }),
    legend: {
      less: t("github.less", "Less"),
      more: t("github.more", "More"),
    }
  };

  return (
    <Row
      style={{
        justifyContent: "center",
        paddingBottom: "10px",
        color: "white",
      }}
    >
      <h1 className="project-heading pb-4" style={{ paddingBottom: "20px" }}>
        {t("github.days")} <strong className="purple">{t("github.code")}</strong>
      </h1>
      <GitHubCalendar
        username="AMINEELMEDNAOUI"
        blockSize={30}
        blockMargin={10}
        color="#c084f5"
        fontSize={20}
        labels={calendarLabels} // Applique les traductions au calendrier lui-même
      />
    </Row>
  );
}

export default Github;