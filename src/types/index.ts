/*
    Export TS types from here
*/

// For axios header object
export interface IAxiosHeaders {
	Accept: string;
	"Content-Type": string;
}

// User
export interface IUser {
	name: string;
}

// Http service object type
export interface IHttp {
	get: Function;
	post: Function;
}
