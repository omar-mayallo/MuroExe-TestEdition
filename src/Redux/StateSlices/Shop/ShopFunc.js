// export const getDepartData = (shopDataArr, department) => {
//   return shopDataArr.find((dep) => dep.id === department);
// };
// import { createSelector } from "reselect";

// const selectShop = (state) => state.shopData;

// export const selectCollections = createSelector(
//   [selectShop],
//   (shop) => shop.collections
// );

// export const selectCollectionsForPreview = createSelector(
//   [selectCollections],
//   (collections) => Object.keys(collections).map((key) => collections[key])
// );

// export const selectCollection = (collectionUrlParam) =>
//   createSelector([selectCollections], (collections) =>
//     collections.find((collection) => collection.id === collectionUrlParam)
//   );
