addEventListener("fetch", (event: FetchEvent) => {
  const response = new Response('Hello, world!', {
    headers: {"content-type": "text/plain"}
  });

  event.respondWith(response);
});