const consumeApiDummy = async page => {
  const baseUrl = 'https://dev-dummy-api.jelantah.org';

  const myHeader = new Headers();
  myHeader.append('Content-Type', 'application/json;charset=UTF-8');
  myHeader.append('Accept', 'application/json;charset=UTF-8');

  const response = await fetch(`${baseUrl}/api/foods/get?page=${page}`, {
    method: 'GET',
    headers: myHeader,
  });
  const responseJson = await response.json();
  return responseJson;
};

export default consumeApiDummy;
