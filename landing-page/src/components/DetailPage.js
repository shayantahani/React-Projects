import React from "react";
import { useParams } from "react-router-dom";
const DetailPage = () => {
  const params = useParams();
  return (
    <div>
      <h2>detail page-{params.id}</h2>
    </div>
  );
};

export default DetailPage;
