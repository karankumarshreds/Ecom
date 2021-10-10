import React from 'react';
import Men from '../../../../assets/menCategory.jpg';
import Women from '../../../../assets/womenCategory.jpg';

const Category = () => {
  return (
    <div className="Category">
      <div className="Category__women">
        <div
          className="img_div"
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${Women})`,
          }}></div>
        <a>Shop Womens</a>
      </div>
      <div className="Category__men">
        <div
          className="img_div"
          style={{
            width: '100%',
            height: '100%',
            backgroundImage: `url(${Men})`,
          }}></div>
        <a>Shop Mens</a>
      </div>
    </div>
  );
};

export default Category;
