const axios = require('axios')
const qs = require('qs')

const {authConfig} = require('../config')

const getGoogleOauthToken = async ({code}) => {
    const rootURL = 'https://oauth2.googleapis.com/token'

    const options = {
        code,
        client_id: authConfig.google_client_id,
        client_secret: authConfig.google_client_secret,
        redirect_uri: authConfig.google_oauth_redirect,
        grant_type: 'authorization_code'
    }

    try {
        const {data} = await axios.post(
            rootURL,
            qs.stringify(options),
            {
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                }
            }
        )

        return data
    } catch (e) {
        console.log('Failed to fetch Google Oauth Tokens');
        throw new Error(err);
    }
}

const getGoogleUser = async ({id_token, access_token}) => {
    try {
        const {data} = await axios.get(
            `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
            {
                headers: {
                    Authorization: `Bearer ${id_token}`
                }
            }
        )

        return data
    } catch (e) {
        console.log(err);
        throw new Error(err);
    }
}

module.exports = {
    getGoogleOauthToken,
    getGoogleUser
}