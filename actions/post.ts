export async function getPosts (query: URLSearchParams) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts?${query}`).then(res => res.json()).then(response => {
        return Promise.resolve(response);
    }).catch((e) => Promise.reject(e));
}

export async function getPostById (id: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/posts/${id}`).then(res => res.json()).then(response => {
        return Promise.resolve(response);
    }).catch((e) => Promise.reject(e));
}

export async function getPostCommentsById (id: string) {
    return await fetch(`${process.env.NEXT_PUBLIC_API_URL}/comments/post/${id}`).then(res => res.json()).then(response => {
        return Promise.resolve(response);
    }).catch((e) => Promise.reject(e));
}

