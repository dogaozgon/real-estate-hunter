import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
	const { data } = await axios.get(url, {
		headers: {
			"X-RapidAPI-Host": "bayut.p.rapidapi.com",
			"X-RapidAPI-Key": "692e4d926fmsh13946ad4311cd50p16deeajsnc0b603937c00",
		},
	});

	return data;
};
