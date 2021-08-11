const errorHandler = (error) => {
  console.log('errorHandler interceptor error: ', error);
  return Promise.reject(error);
};

export default errorHandler;
