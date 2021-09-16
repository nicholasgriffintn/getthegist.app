# Get the Gist?

Welcome to my new app for taking and managing notes through the GitHub Gists service.

This is just a side project from myself at the moment, it's really just a starter at this point, I'll be updating this soon :).

Progress on launching the app:

[![Launch the App](https://img.shields.io/github/milestones/progress/nicholasgriffintn/getthegist.app/1?label=Launch%20the%20App%21)](https://github.com/nicholasgriffintn/getthegist.app/milestone/1)

## APIs

### Auth

_Sign In_

`GET`: https://getthegist.app/api/auth/signin

Displays all sign in options.

`GET` https://getthegist.app/api/auth/signin/:provider

Starts the sign-in flow for the specified provider.

`GET/POST`: https://getthegist.app/api/auth/callback/:provider

The callback URL that an authentication provider will redirect you to after completing a sign in flow.

`GET`: https://getthegist.app/api/auth/signout

Displays a page for signing out

`POST`: https://getthegist.app/api/auth/signout

Starts the sign out process automatically.

`GET`: https://getthegist.app/api/auth/session

Get the session details for the currently signed in user.

`GET`: https://getthegist.app/api/auth/csrf

Returns the CSRF token.

`GET`: https://getthegist.app/api/auth/providers

Returns the list of available providers.
