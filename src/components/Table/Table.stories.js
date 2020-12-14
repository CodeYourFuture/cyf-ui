import React from "react";
import {
  Table,
  TableHead,
  TableRow,
  TableRowWithDetails,
  TableColumn,
} from "./index";

export default {
  title: "Components/Table",
  component: Table,
};

const applicants = [
  {
    id: 1,
    check: "true",
    call: "true",
    emoji: "happy",
    name: "Applicant 1",
    progress: "tick",
    date: "2020-12-11",
  },
  {
    id: 2,
    check: "true",
    call: "true",
    emoji: "happy",
    name: "Applicant 2",
    progress: "tick",
    date: "2020-12-12",
  },
];

export const DefaultTable = () => {
  return (
    <Table>
      <thead>
        <TableRow>
          <TableHead>No</TableHead>
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
          <TableRow key={applicant.id}>
            <TableColumn>{applicant.id}</TableColumn>
            <TableColumn>{applicant.check}</TableColumn>
            <TableColumn>{applicant.call}</TableColumn>
            <TableColumn>{applicant.emoji}</TableColumn>
            <TableColumn>{applicant.name}</TableColumn>
            <TableColumn>{applicant.progress}</TableColumn>
            <TableColumn>{applicant.date}</TableColumn>
          </TableRow>
        ))}
      </tbody>
    </Table>
  );
};

export const TableWithItemDetailsRows = () => {
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
          <TableRowWithDetails colSpan="7" key={applicant.id}>
            <TableColumn>{applicant.id}</TableColumn>
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
