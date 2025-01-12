export const validation = async (validationSchema, data) => {
  try {
    await validationSchema.validate(data, { abortEarly: false });

    return { valid: true, errors: null };
  } catch (error) {
    const errors = error.inner.reduce((acc, err) => {
      acc[err.path] = err.message;
      return acc;
    }, {});
    return { valid: false, errors };
  }
};
