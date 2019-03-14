export const API_REQUEST = 'API_REQUEST';
export const API_SUCCESS = 'API_SUCCESS';
export const API_ERROR = 'API_ERROR';

export const apiRequest = ({
  feature, body, method = 'GET', url, ...rest
}) => ({
  type: `${feature} ${API_REQUEST}`,
  payload: body,
  meta: {
    method, url, feature, ...rest,
  },
});

export const apiSuccess = ({ response, feature, ...others }) => ({
  type: `${feature} ${API_SUCCESS}`,
  payload: response,
  meta: { feature, ...others },
});

export const apiError = ({ error, feature }) => ({
  type: `${feature} ${API_ERROR}`,
  payload: error,
  meta: { feature },
});
