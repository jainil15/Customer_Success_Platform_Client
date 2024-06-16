import React, { Children } from "react";
import { Link } from "react-router-dom";
const HeadCell = ({ children }) => {
  return (
    <th className="p-2 px-4  border-r-[0.1rem] border-gray-100">{children}</th>
  );
};
const TableCell = ({ children }) => {
  return <td className="p-2 px-4 border-t-2 border-r-2 border-x-gray-200">{children}</td>;
};
export const ProjectTable = ({ projects }) => {
  return (
    <div className="mt-3 ms-2 bg-white w-full overflow-auto" >
      <table className="w-full min-w-[1000px]">
        <tr className="text-left text-gray-600 ">
          <HeadCell>Project Name</HeadCell>
          <HeadCell>Started On</HeadCell>
          <HeadCell>Status</HeadCell>
          <HeadCell>Project Manager</HeadCell>
          <HeadCell>Members</HeadCell>
          <HeadCell>Action</HeadCell>
        </tr>
        {projects.users &&
          projects.users.projects.map((project, index) => (
            <tr>
              <td className="p-2 px-4 border-t-2 border-r-2 border-x-gray-200">{project.name}</td>
              <TableCell>
                {new Date(project.startDate).toDateString()}
              </TableCell>

              <TableCell>{project.status}</TableCell>

              <TableCell>{project.manager.name}</TableCell>

              <TableCell>{project.members}</TableCell>

              <td className="p-2 px-4 border-t-2 border-l-2">
                <Link to={`/project/${[project.id]}`} className="text-sm px-3 py-[0.2rem] bg-blue-600 text-white rounded-md" >
                  View Details
                </Link>
              </td>
            </tr>
          ))}
      </table>
    </div>
  );
};
