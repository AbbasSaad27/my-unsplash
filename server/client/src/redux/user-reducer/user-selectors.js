import { createSelector } from "reselect";

const getUser = (state) => state.user;

export const selectUsername = createSelector([getUser], (user) => user.name);

export const selectImages = createSelector([getUser], (user) => user.images);
