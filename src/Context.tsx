import React, { createContext, useContext, useState } from "react";

interface context {
	setData?: React.Dispatch<React.SetStateAction<any>>;
	data?: null | number;
}

interface prop {
	children: React.ReactNode;
}
export const navContext = createContext<context>({
	data: null,
	setData: () => {
		return null;
	},
});

export const useNavContext = () => {
	return useContext(navContext);
};

export const Context = ({ children }: prop) => {
	const [data, setData] = useState(null);

	return (
		<navContext.Provider value={{ data, setData }}>
			{children}
		</navContext.Provider>
	);
};
