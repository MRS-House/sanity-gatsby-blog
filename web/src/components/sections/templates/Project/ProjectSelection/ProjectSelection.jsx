import React, { useCallback } from "react";
import { useTrackedState } from "../../../../../context/store";
import "./project-selection.scss";
import { toRubleFormat } from "../../../../../lib/helpers";

const ProjectSelection = ({ project }) => {
  const state = useTrackedState();

  const totalPrice = useCallback(() => {
    let total = project.price;
    if (state.selectedProject.foundation) {
      total = total + state.selectedProject.foundation.cost;
    }
    return toRubleFormat(total);
  }, [project.price, state.selectedProject.foundation]);

  return (
    <div className="project-selection">
      <div className="container project-selection__container">
        <div className="project-selection__price">{totalPrice()}</div>
      </div>
    </div>
  );
};

export default ProjectSelection;
