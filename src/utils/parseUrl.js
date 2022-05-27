export default function(url) {
  let urlRequest = url.split('/')[4];
  if (!urlRequest.includes('https://www.instagram.com/tv')) {
    return {
      url: null,
      error: true
    };
  }

  return {
    url: urlRequest,
    error: false
  };
}
