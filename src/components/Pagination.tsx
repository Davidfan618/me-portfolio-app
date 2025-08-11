"use client";

import React from "react";
import _ from "lodash";
import "./pagination.css";

export default function Pagination({
  itemCount,
  pageSize,
  currentPage,
  onPageChange,
}: {
  itemCount: number;
  pageSize: number;
  currentPage: number;
  onPageChange: Function;
}) {
  const pageCount = Math.ceil(itemCount / pageSize);

  if (pageCount <= 1) return null;

  const pages = _.range(1, pageCount + 1);

  return (
    <nav className="pagination-a">
      <ul className="pagination justify-content-end">
        <li
          className={`page-item ${currentPage === 1 ? "disabled" : undefined}`}
        >
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage - 1)}
          >
            <span className="bi bi-chevron-left"></span>
          </a>
        </li>
        {pages.map((page) => (
          <li
            key={page}
            className={`page-item ${
              currentPage === page ? "active" : undefined
            }`}
          >
            <a className="page-link" onClick={() => onPageChange(page)}>
              {page}
            </a>
          </li>
        ))}
        <li
          className={`page-item ${
            currentPage === pageCount ? "disabled" : undefined
          }`}
        >
          <a
            className="page-link"
            onClick={() => onPageChange(currentPage + 1)}
          >
            <span className="bi bi-chevron-right"></span>
          </a>
        </li>
      </ul>
    </nav>
  );
}
