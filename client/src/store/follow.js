//create the follow fetches and actions
import Cookies from 'js-cookie';
export const GET_FOLLOW = 'slumblr/follow/GET_FOLLOW'

const gotFollow = follow => ({
	type: GET_FOLLOW,
	follow,
});

export const fetchFollow = () => async dispatch => {
    const res = await fetch('/api/follow');
    if(res.ok){
        const data = await res.json();
        dispatch(gotFollow(data))
    } else {
        console.log(res)
    }
}

export const createFollow = (followeeId, followerId) => async dispatch => {
	// console.log(body);
	const csrfToken = Cookies.get("XSRF-TOKEN");
	const res = await fetch('/api/follow', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			"X-CSRF-TOKEN": csrfToken,
		},
		body: JSON.stringify({followeeId, followerId}),
	});

	if (res.ok) {
		fetchFollow();
	} else {
		console.log(res);
	}
};

export default function reducer(state = [], action) {
	switch (action.type) {
		case GET_FOLLOW:
			return [...action.follow];

		default:
			return state;
	}
}