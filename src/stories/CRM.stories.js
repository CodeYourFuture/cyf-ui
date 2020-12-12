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
// import { CallEmoji } from "../components/Emoji";

import applicants from "./applicants";

export default {
  title: "CRM Like Dashboard",
};

const CrmItemDetail = () => <div>CRM Item Detail</div>;

export const CRMLikeStory = () => {
  return (
    <Table width="100%">
      <thead>
        <TableRow>
          <TableHead>Nos</TableHead>
          <TableHead>check</TableHead>
          <TableHead>call</TableHead>
          <TableHead>emoji</TableHead>
          <TableHead>name</TableHead>
          <TableHead>progress</TableHead>
          <TableHead>date</TableHead>
        </TableRow>
      </thead>

      <tbody>
        {applicants.map((applicant) => (
          <TableRowWithDetails
            key={applicant.id}
            itemDetails={<CrmItemDetail />}
          >
            <TableColumn>
              <Checkbox />
            </TableColumn>
            <TableColumn>{applicant.check}</TableColumn>
            <TableColumn>{applicant.call}</TableColumn>
            <TableColumn>{applicant.emoji}</TableColumn>
            <TableColumn>{applicant.name}</TableColumn>
            <TableColumn>{applicant.progress}</TableColumn>
            <TableColumn>{applicant.date}</TableColumn>
          </TableRowWithDetails>
        ))}
      </tbody>
    </Table>
  );
};
