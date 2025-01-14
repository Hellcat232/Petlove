export const selectNews = (state) => state.news.results;

export const selectNewsKeyword = (state) => state.news.keyword;

export const selectNewsPage = (state) => state.news.pages.page;

export const selectNewsPerPage = (state) => state.news.pages.perPage;

export const selectNewsTotalPages = (state) => state.news.pages.totalPages;

export const selectNewsLoading = (state) => state.news.loading;

export const selectNewsError = (state) => state.news.error;
