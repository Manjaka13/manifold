/*
    For doing REST API calls
*/

import axios from "axios";
import ws from "./ws";
import { IHttp } from "../types";
import { BASE_URL, AXIOS_HEADERS } from "../helpers/const";

// Create URL for API call
const _getUrl = (endpoint: string, id: any): string =>
	`${BASE_URL}/${ws[endpoint]}/${id || ""}`;

const http: IHttp = {
	// For 'GET' calls
	get: (endpoint = "", params = null, id = null): Promise<any> => {
		return new Promise((resolve, reject) => {
			if (endpoint.length > 0 && ws[endpoint]) {
				axios
					.get(_getUrl(endpoint, id), {
						params,
						headers: { ...AXIOS_HEADERS },
					})
					.then(({ data }) => resolve(data))
					.catch((e) => reject(e));
			} else reject("Unable to do GET request from unknown endpoint.");
		});
	},
	// For 'POST' calls
	post: (endpoint = "", params = null, id = null): Promise<any> => {
		return new Promise((resolve, reject) => {
			if (typeof endpoint === "string" && ws[endpoint]) {
				axios
					.post(_getUrl(endpoint, id), params, {
						headers: { ...AXIOS_HEADERS },
					})
					.then(({ data }) => resolve(data))
					.catch((e) => reject(e));
			} else reject("Unable to do POST request to unknown endpoint.");
		});
	},
};

export default http;
