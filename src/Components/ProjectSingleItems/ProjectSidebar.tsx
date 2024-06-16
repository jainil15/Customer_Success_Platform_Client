import React from "react";
import { ProjectDetail } from "../../pages/ProjectSingle.tsx";
type SelectButtonProps = {
  children: React.ReactNode;
  handleChangeDetail: (detail: ProjectDetail) => void;
  currentDetail: ProjectDetail;
  detail: ProjectDetail;
};
const SelectedButton = ({ children }) => {
  return (
    <button className="text-start px-3 py-[0.5rem] bg-blue-600 text-sm  text-gray-100 rounded-md">
      {children}
    </button>
  );
};
const Button = ({ children, handleChangeDetail, detail }) => {
  return (
    <button
      onClick={() => handleChangeDetail(detail)}
      className="text-start px-3 py-[0.5rem]  text-sm  text-gray-700 rounded-md"
    >
      {children}
    </button>
  );
};
const SelectButton = ({
  children,
  handleChangeDetail,
  currentDetail,
  detail,
}) => {
  return (
    <>
      {currentDetail === detail ? (
        <SelectedButton>{children}</SelectedButton>
      ) : (
        <Button handleChangeDetail={handleChangeDetail} detail={detail}>
          {children}
        </Button>
      )}
    </>
  );
};
export const ProjectSidebar = ({ handleChangeDetail, currentDetail }) => {
  return (
    <div className="py-3 flex flex-col min-w-[140px] max-w-[150px] justify-between  h-[480px] overflow-y-scroll">
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.PROJECT_OVERVIEW}
      >
        Project Overview
      </SelectButton>

      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.BUDGET}
      >
        Budget
      </SelectButton>
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.VERSION_HISTORY}
      >
        Version History
      </SelectButton>
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.STAKEHOLDERS}
      >
        Stakeholders
      </SelectButton>
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.MILESTONES}
      >
        Milestones
      </SelectButton>
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.SPRINTS}
      >
        Sprints
      </SelectButton>
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.TIMELINE}
      >
        Timeline
      </SelectButton>
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.MOM_OF_MEETINGS}
      >
        MoM of Meetings
      </SelectButton>
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.RESOURCES}
      >
        Resources
      </SelectButton>
      <SelectButton
        handleChangeDetail={handleChangeDetail}
        currentDetail={currentDetail}
        detail={ProjectDetail.CLIENT_FEEDBACKS}
      >
        Client Feedback
      </SelectButton>
    </div>
  );
};
