/*
    Gets user information depending on parameter 'id'
*/

import React, { useState, useEffect } from "react";
import { IUser } from "../types";
import http from "../service/http";

const useUser = (id: string | null): IUser | null => {
	const [user, setUser] = useState<IUser | null>(null);

	useEffect(() => {
		// If any id given
		if (id && id.length > 0) {
			http
				.get("user", null, id)
				.then((data: IUser) => {
					setUser(data);
				})
				.catch((e: any) => console.error(e));
		}
	}, []);

	return user;
};

export default useUser;
