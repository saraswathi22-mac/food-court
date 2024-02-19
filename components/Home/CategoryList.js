import React, { useState } from "react";
import Data from "./../../Shared/Data";
import Image from "next/image";

const CategoryList = () => {
  const [categoryList, setCategoryList] = useState(Data.CategoryListData);
  return (
    <div>
      <h2 className="font-bold px-2">Select Food Type</h2>
      <div>
        {categoryList.map((item) => (
          <div>
            <Image src={item.icon} alt={item.name} width={40} height={40} />
            {item.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CategoryList;
