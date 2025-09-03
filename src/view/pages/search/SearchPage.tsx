/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import SearchHeader from "./components/SearchHeader";
import RecentSearchSection from "./components/RecentSearchSection";
import ProductGridSection from "./components/ProductGridSection";
import NavigationBar from "./components/NavigationBar";

const searchPageStyle = css`
  position: relative;
  width: 360px;
  height: 812px;
  overflow: hidden;
  background-color: white;
`;

const SearchPage = () => {
  return (
      <div css={searchPageStyle}>
        <SearchHeader />
        <RecentSearchSection />
        <ProductGridSection />
        <NavigationBar />
      </div>
  );
};

export default SearchPage;