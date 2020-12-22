import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

export const Table = styled.table`
  position: relative;
  background: #ffffff;
  width: ${({ width }) => width || "auto"};
  border-collapse: collapse;
`;

export const TableHead = styled.th`
  border-collapse: collapse;
  padding: 5px;
  max-width: 100%;
  white-space: nowrap;
  height: 30px;
  text-align: left;
`;

export const TableColumn = styled.td`
  border-collapse: collapse;
  padding-left: 5px;
`;

export const TableRow = styled.tr`
  cursor: pointer;
  height: 40px;
  position: relative;

  &:hover {
    background-color: #f3f3f3;
  }
`;

export const Ul = styled.ul`
  list-style-type: none;
`;

const Div = styled.div`
  display: flex;
  flex-direction: row;
`;

const ItemDetails = () => {
  return (
    <Div>
      <div>
        <Ul>
          <li>City: London</li>
          <li>Age: 42</li>
          <li>Number: 07400123446</li>
        </Ul>
      </div>
      <div>
        <Ul>
          <li>Email: email@email.com</li>
          <li>Started: 2020-12-10</li>
          <li>Refugee: Yes</li>
        </Ul>
      </div>
    </Div>
  );
};

export const TableRowWithDetails = ({ detailComponentColSpan, children }) => {
  const [viewDetail, setViewDetail] = React.useState(false);
  const toggle = () => setViewDetail(!viewDetail);

  return (
    <>
      <TableRow onClick={toggle}>{children}</TableRow>
      {viewDetail ? (
        <TableRow colSpan={detailComponentColSpan}>
          <TableColumn colSpan={detailComponentColSpan}>
            <ItemDetails />
          </TableColumn>
        </TableRow>
      ) : null}
    </>
  );
};

TableRowWithDetails.propTypes = {
  detailComponentColSpan: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired,
};
