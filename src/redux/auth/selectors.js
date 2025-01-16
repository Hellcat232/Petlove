export const selectAuthIsUser = (state) => state.auth.user;

export const selectAuthIsLogged = (state) => state.auth.isLogged;

export const selectAuthIsRefreshing = (state) => state.auth.isRefreshing;

export const selectAuthNoticesFavorites = (state) =>
  state.auth.noticesFavorites;

export const selectAuthNoticesViewed = (state) => state.auth.noticesViewed;

export const selectAuthPets = (state) => state.auth.pets;

export const selectAuthId = (state) => state.auth._id;

export const selectAuthError = (state) => state.auth.error;

export const selectAuthLoading = (state) => state.auth.loading;
