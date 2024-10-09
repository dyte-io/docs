import React from 'react';

export default function PHBanner() {
  return (
    <a
      href="https://www.producthunt.com/products/feta"
      target="_blank"
      className="hello-bar u-hflex-center-center w-inline-block"
    >
      <div className="hello_bar_contents u-hflex-center-center u-gap-10">
        <div className="ph_cat_nd_txt-wrapper u-hflex-left-center u-gap-10">
          <img
            src="https://cdn.prod.website-files.com/66323b0d8cbb65b15bf8550c/6703f2188ab1ea055e35b760_ph_cat.png"
            loading="lazy"
            alt=""
            className="ph_cat"
          />
          <div className="ph_banner_txt">
            We are launching our new product Feta on ProductHunt soon!
          </div>
        </div>
        <div className="banner_separator"></div>
        <div className="hello_bar_cta u-hflex-left-center u-gap-8">
          <div className="text-block-98">Subscribe &amp; Get 3 Months Free</div>
          <img
            src="https://cdn.prod.website-files.com/66323b0d8cbb65b15bf8550c/6703f48cc2268f2ff727de7b_Arrow%20Down%20Left.png"
            loading="lazy"
            alt=""
            className="image-213"
          />
        </div>
      </div>
    </a>
  );
}
