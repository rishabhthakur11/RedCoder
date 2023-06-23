import { atom } from "recoil";

type AuthModalState = {
	type: "login" | "register" | "forgotPassword";
};

const initalAuthModalState: AuthModalState = {
	type: "login",
};

export const authModalState = atom<AuthModalState>({
	key: "authModalState",
	default: initalAuthModalState,
});