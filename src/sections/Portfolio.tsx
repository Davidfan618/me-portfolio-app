"use client";

import React, { useState, useEffect } from "react";
import _ from "lodash";

import SectionTitle from "@/components/SectionTitle";
import PortfolioItem from "@/components/PortfolioItem";
import Preloader from "@/components/Preloader";
import { filtersData } from "@/data/data";
import { PortfolioItemProps } from "@/constant/props";
import { paginate } from "@/utils/utils";
import Pagination from "@/components/Pagination";
import "./portfolio.css";

export default function Portfolio() {
  const [data, setData] = useState<PortfolioItemProps[]>([]);
  const [items, setItems] = useState<PortfolioItemProps[]>([]);
  const [filterdItems, setFilteredItems] = useState<PortfolioItemProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortOrder] = useState<{
    path: string;
    order: boolean;
  }>({
    path: "projectDate",
    order: true,
  });
  const pageSize = 9;

  const handleSortItems = (data?: PortfolioItemProps[]) => {
    const sortedItems = _.orderBy(
      data,
      [sortOrder.path],
      [sortOrder.order ? "desc" : "asc"]
    );
    return sortedItems;
  };

  const getPortfolioData = () => {
    fetch("https://dstudio-tech-app.herokuapp.com/api/portfolios")
      .then((res) => res.json())
      .then((portfolio) => handleSortItems(portfolio))
      .then((portfolio) => setData(portfolio))
      .catch((e) => console.log(e.message));
  };

  const handleOnPageChange = (page: number) => {
    setCurrentPage(page);
  };

  const handleFilterAcive = (id: number) => {
    filtersData.map((filter) => {
      filter.active = false;
      if (filter.id === id) filter.active = true;
    });
  };

  const handleFilterChange = (id: number, category: string) => {
    handleFilterAcive(id);
    setCurrentPage(1);
    if (category === "all") {
      setFilteredItems(data);
    } else {
      setFilteredItems(
        data.filter((item: { filter: string }) => item.filter === category)
      );
    }
  };

  useEffect(() => {
    getPortfolioData();
  }, []);

  useEffect(() => {
    setFilteredItems(data);
  }, [data]);

  useEffect(() => {
    console.log(filterdItems);
    setItems(paginate(filterdItems, currentPage, pageSize));
  }, [filterdItems, currentPage]);

  return (
    <>
      <section id="portfolio" className="portfolio section-bg">
        <div className="container">
          <SectionTitle
            item={{
              title: "Portfolio",
              description: `Browse my collection of web development projects, 
            showcasing my expertise in both front-end and back-end technologies. 
            Each project demonstrates my ability to create responsive, 
            user-friendly applications tailored to specific needs.`,
            }}
          />

          <div className="row" data-aos="fade-up">
            <div className="col-lg-12 d-flex justify-content-center">
              <ul id="portfolio-flters">
                {filtersData.map((filter) => (
                  <li
                    key={filter.id}
                    className={`${filter.active ? "filter-active" : undefined}`}
                    onClick={() =>
                      handleFilterChange(filter.id, filter.category)
                    }
                  >
                    {filter.name}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div
            className="row portfolio-container"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {items && items.length > 0 ? (
              items.map((item: PortfolioItemProps) => (
                <PortfolioItem key={item._id} item={item} />
              ))
            ) : (
              <Preloader />
            )}
          </div>

          <div className="row">
            <div className="col-lg-12 d-flex justify-content-center">
              <Pagination
                itemCount={filterdItems.length}
                pageSize={pageSize}
                currentPage={currentPage}
                onPageChange={handleOnPageChange}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
