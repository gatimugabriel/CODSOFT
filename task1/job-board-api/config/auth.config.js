authConfig = {
    jwt_access_token_secret: process.env['JWT_SECRET_ACCESS_TOKEN'],
    jwt_refresh_token_secret: process.env['JWT_SECRET_REFRESH_TOKEN'],
    google_client_id: process.env['GOOGLE_OAUTH_CLIENT_ID'],
    google_client_secret: process.env['GOOGLE_OAUTH_CLIENT_ID_SECRET'],
    google_oauth_redirect: process.env['GOOGLE_OAUTH_REDIRECT_URL']
}

module.exports = authConfig