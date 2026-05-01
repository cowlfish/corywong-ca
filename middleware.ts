export default function middleware(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get('host') || '';

  if (host === 'realestate.corywong.ca' || host === 're.corywong.ca') {
    url.pathname = '/realestate/';
    return fetch(new Request(url.toString(), request));
  }
}

export const config = {
  matcher: '/',
};
