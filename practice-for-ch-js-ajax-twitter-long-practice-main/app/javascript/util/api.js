const csrfToken = document.querySelector("meta[name=csrf-token]").content;

async function customFetch(url, options = {}) {
  options.headers = {
    // Your code here
    'X-CSRF-Token': csrfToken,
    ...options.headers
  };

  return await fetch(url, options);
}

export function followUser(id) {
  customFetch(`/users/${id}/follow`, {method: "POST"})
}

export function unFollowUser(id){
  customFetch(`/users/${id}/follow`, {method: "DELETE"})
}
export const foo = "bar";