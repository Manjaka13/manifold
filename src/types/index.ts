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
	callingName: string;
	carNumber: string;
}

// Http service object type
export interface IHttp {
	get: Function;
	post: Function;
}

/*
	Props types
*/

export interface IPropsInput {
	defaultValue?: string | null | undefined;
	name?: string | undefined;
	type?: string | undefined;
	placeholder?: string | undefined;
	label?: string | undefined;
	required?: boolean | undefined;
	atInput?: Function | undefined;
	list?: Array<string> | undefined;
}

export interface IPropsCar {
	callingName?: string | undefined;
}
