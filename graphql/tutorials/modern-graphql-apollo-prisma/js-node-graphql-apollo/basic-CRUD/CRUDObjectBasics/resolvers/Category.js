// we are having this here and not in Query bc we don't have categories' products in our typedef's Query, we have it in typedef's Category. therefore to get products from categories we must get it from the Category resolver.
exports.Category = {
  // this is invoked when we query for the Category.
  products: ({ id: categoryId }, { filter }, { db }) => {
    const categoryProducts = db.products.filter((product) => product.categoryId === categoryId);
    let filteredCategoryProducts = categoryProducts;

    if (filter) {
      if (filter.onSale === true) {
        filteredCategoryProducts = filteredCategoryProducts.filter((product) => {
          return product.onSale;
        });
      }
    }
    return filteredCategoryProducts;
  },
};
