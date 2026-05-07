export default function middleware(request: Request) {
  const url = new URL(request.url);
  const host = request.headers.get('host') || '';

  if (host === 'realestate.corywong.ca' || host === 're.corywong.ca') {
    url.pathname = '/realestate' + url.pathname;
    return fetch(new Request(url.toString(), request));
  }

  if (host === 'portal.corywong.ca') {
    url.pathname = '/portal/';
    return fetch(new Request(url.toString(), request));
  }
}

export const config = {
  matcher: '/((?!_astro|favicon).*)',
};
