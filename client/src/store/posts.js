import Cookies from 'js-cookie';
export const GET_POST = 'slumblr/posts/GET_POST'

const gotPost = posts => ({
	type: GET_POST,
	posts,
});

export const fetchPosts = () => async dispatch => {
    const res = await fetch('/api/posts');
    console.log(res)
    if(res.ok){
        console.log('this is the res from get post', res)
        const data = await res.json();
        console.log(data)
        dispatch(gotPost(data))
    } else {
        console.log(res)
    }
}

export const createPost = (title, url, description, userId) => async dispatch => {
	// console.log(body);
	const csrfToken = Cookies.get("XSRF-TOKEN");
	const res = await fetch('/api/posts', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			"X-CSRF-TOKEN": csrfToken,
		},
		body: JSON.stringify({title, url, description, userId}),
	});

	if (res.ok) {
		fetchPosts();
	} else {
		console.log(res);
	}
};

export default function reducer(state = [], action) {
	switch (action.type) {
		case GET_POST:
			return [...action.posts ];

		default:
			return state;
	}
}