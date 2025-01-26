export const selectNotices = (state) => state.notices.results;

export const selectNoticeById = (state) => state.notices.noticeById;

export const selectNoticesPage = (state) => state.notices.pages.page;

export const selectNoticesPerPage = (state) =>
  state.notices.pages.selectNoticesPerPage;

export const selectNoticesTotalPages = (state) =>
  state.notices.pages.totalPages;

export const selectNoticesKeyword = (state) => state.notices.keyword;

export const selectNoticesPagination = (state) => state.notices.pagination;

export const selectNoticesError = (state) => state.notices.error;

export const selectNoticesLoading = (state) => state.notices.loading;

export const selectNoticesCategories = (state) => state.notices.categories;

export const selectNoticesSex = (state) => state.notices.sex;

export const selectNoticesSpecies = (state) => state.notices.species;

export const selectNoticesFavoriteList = (state) => state.notices.favoriteList;
