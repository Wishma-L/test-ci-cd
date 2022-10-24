import React from 'react';
import type { PageProps } from "gatsby"
// best way to build hard-coded page
type CustomPageProps = {}

const CustomPage = ({}: CustomPageProps) => {
    return (
      <>
        <h1>React TS FC Component</h1>
        <div>List</div>
      </>
    )
  };

export default CustomPage
