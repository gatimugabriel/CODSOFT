import {useSelector} from "react-redux";

const useAuth = () => {
    const {userInfo} = useSelector((state) => state.auth)

    const getUserInfo = () => {
        if (userInfo) return userInfo;
        return null;
    }

    return {userInfo: getUserInfo()}
}

export default useAuth