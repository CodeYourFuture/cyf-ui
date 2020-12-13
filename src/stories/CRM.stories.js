import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableRowWithDetails,
  TableColumn,
} from "../components/Table";

// import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { CallEmoji, SmileEmoji } from "../components/Emoji";
import { ProgressTick } from "../components/ProgressCol/stories/Progress.stories";

import applicants from "./applicants";

export default {
  title: "CRM Like Dashboard",
};

// const CrmItemDetail = () => <div>CRM Item Detail</div>;

export const CRMLikeStory = () => {
  return (
    <Table width="100%">
      <thead>
        <TableRow>
          <TableHead />
          <TableHead />
          <TableHead />
          <TableHead />
          <TableHead>Name</TableHead>
          <TableHead>Steps</TableHead>
          <TableHead>Start date</TableHead>
        </TableRow>
      </thead>

      <tbody>
        {applicants.map((applicant) => (
          <TableRowWithDetails key={applicant.id}>
            <TableColumn>{applicant.id}</TableColumn>
            <TableColumn>
              <Checkbox />
            </TableColumn>
            <TableColumn>
              <CallEmoji color="#3455DB" />
            </TableColumn>
            <TableColumn>
              <SmileEmoji color="#28A228" />
            </TableColumn>
            <TableColumn>{applicant.name}</TableColumn>
            <TableColumn>
              <ProgressTick />
              <ProgressTick />
              <ProgressTick />
            </TableColumn>
            <TableColumn>{applicant.date}</TableColumn>
          </TableRowWithDetails>
        ))}
      </tbody>
    </Table>
  );
};
