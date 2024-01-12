import {GoogleLogin, GoogleOAuthProvider} from "@react-oauth/google";
export default function GoogleAuth() {
    const clientId = import.meta.env.VITE_GOOGLE_OAUTH2_CLIENT_ID

    const onSuccess = (res) => {
        console.log('SignIn successful. User : ', res.profileObj)
    }

    const onFailure = () => {
        console.log('SignIn failed!')
    }

    return (
        <GoogleOAuthProvider clientId={clientId}>
            <GoogleLogin
                onSuccess={onSuccess}
                onError={onFailure}
            />
        </GoogleOAuthProvider>
    );
}

