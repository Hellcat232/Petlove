const transformStateToQueryParams = (data) => {
  if (!data) return null;
  return {
    keyword: data.keyword?.toLowerCase() || "",
    category: data.category?.toLowerCase() || "",
    species: data.types?.toLowerCase() || "",
    locationId: data.locations?.toLowerCase() || "",
    byPrice: data.cheap || data.expensive ? data.cheap : null,
    byPopularity: data.popular || data.unpopular ? data.unpopular : null,
    page: data.page || 1,
    limit: data.limit || 6,
    sex: data.gender?.toLowerCase() || "",
  };
};

export default transformStateToQueryParams;
