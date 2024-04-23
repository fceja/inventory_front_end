import { useEffect } from "react";
import { useDispatch } from "react-redux";

import { cancelLogoutTimeout, resetLogoutTimer } from "@utils/store/LogoutUtils"

export const useLogoutTimeout = (isAuthd: boolean) => {
    const dispatch = useDispatch();

    const logoutTimeoutHandler = () => {
        resetLogoutTimer(dispatch);
    }

    useEffect(() => {
        if (!isAuthd) {
            cancelLogoutTimeout()
            return;
        }

        document.addEventListener('click', logoutTimeoutHandler);
        document.addEventListener('mousemove', logoutTimeoutHandler);
        document.addEventListener('keydown', logoutTimeoutHandler);

        logoutTimeoutHandler()

        return () => {
            document.removeEventListener('click', logoutTimeoutHandler);
            document.removeEventListener('mousemove', logoutTimeoutHandler);
            document.removeEventListener('keydown', logoutTimeoutHandler);
        }

    }, [isAuthd])
}
