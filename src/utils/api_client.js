const baseUrl = 'https://date.nager.at/api';
const responseModel = {
  code: 503,
  status: false,
  message: 'Network request failed',
  data: null,
};

export const sys_get = async ({auth = false, endpoint = ''}) => {
  const token = '';
  var resp = responseModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth ? 'Bearer ' + token : '',
      },
    });
    const data = await response.json();
    resp.code = response.status;
    resp.status = response.status == 200;
    resp.message = "success";
    resp.data = data;
    return resp;
  } catch (error) {
  }
};
export const sys_post = async ({auth = false, endpoint = '', body = {}}) => {
  const token = '';
  var resp = responseModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth ? 'Bearer ' + token : '',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    resp.code = response.status;
    resp.status = response.status == 200;
    resp.message = "success";
    resp.data = data;
    return resp;
  } catch (error) {}
};

export const sys_post_www_formdata_urlencoded = async ({
  auth = false,
  endpoint = '',
  body = {},
}) => {
  const token = '';
  var data_send = [];
  for (var props in body) {
    var encodedKey = encodeURIComponent(props);
    var encodedValue = encodeURIComponent(body[props]);
    data_send.push(encodedKey + '=' + encodedValue);
  }
  data_send = data_send.join("&");
  var resp = responseModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: auth ? 'Bearer ' + token : '',
      },
      body: data_send,
    });
    const data = await response.json();
    resp.code = response.status;
    resp.status = response.status == 200;
    resp.message = "success";
    resp.data = data;
    return resp;
  } catch (error) {
    console.log(error);
  }
};

export const sys_del = async ({auth = false, endpoint = ''}) => {
  const token = '';
  var resp = responseModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth ? 'Bearer ' + token : '',
      },
    });
    const data = await response.json();
    resp.code = response.status;
    resp.status = response.status == 200;
    resp.message = "success";
    resp.data = data;
    return resp;
  } catch (error) {}
};
export const sys_put = async ({auth = false, endpoint = '', body = {}}) => {
  const token = '';
  var resp = responseModel;
  try {
    const response = await fetch(baseUrl + endpoint, {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: auth ? 'Bearer ' + token : '',
      },
      body: JSON.stringify(body),
    });
    const data = await response.json();
    resp.code = response.status;
    resp.status = response.status == 200;
    resp.message = "success";
    resp.data = data;
    return resp;
  } catch (error) {}
};
