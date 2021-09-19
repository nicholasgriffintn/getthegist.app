# Get the Gist?

Welcome to my new app for taking and managing notes through the GitHub Gists service.

This is just a side project from myself at the moment, it's really just a starter at this point, I'll be updating this soon :).

Progress on launching the app:

[![Launch the App](https://img.shields.io/github/milestones/progress/nicholasgriffintn/getthegist.app/1?label=Launch%20the%20App%21)](https://github.com/nicholasgriffintn/getthegist.app/milestone/1)

## Notes structure

Each note that has been stored on GitHub Gists should contain a metadata.json file, this file will be used in order to categorise the note and add extra information that we can use in our app for now or in the future.

Here's an initial example of `metadata.json`:

```
{
  "title": "Get the Gist note test",
  "description": "This is just a test",
  "public": true,
  "created_at": "2021-03-15T20:19:36Z",
  "updated_at": "2021-03-15T20:19:36Z",
  "folder": "Test",
  "favorited": false,
  "pinned": false,
  "color": "#666",
  "Tags": ["test"]
}
```

For the content, we require a file called `content.md`, this should be a markdown file with the contents of the note.

Alongside that, we will show other files that have been added below the note, if the Gist does not comply with this, we should do our best to still make it work within the app, at least viewable.

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

### GitHub Gists - must be signed in

`GET` https://getthegist.app/api/github/gists

Get all of the user's gists

`GET` https://getthegist.app/api/github/gists/starred

Get all of the user's starred gists

`GET` https://getthegist.app/api/github/gists/gist/[id]

Get a gist

`GET` https://getthegist.app/api/github/gists/gist/[id]/revision

Get a gist's revision

`GET` https://getthegist.app/api/github/gists/gist/[id]/forks

Get a gist's forks

`GET` https://getthegist.app/api/github/gists/gist/[id]/starred-status

Check if a gist is starred

`POST` https://getthegist.app/api/github/gists/gist/[id]/star

Star a gist

`POST` https://getthegist.app/api/github/gists/gist/[id]/unstar

Unstar a gist

`POST` https://getthegist.app/api/github/gists/gist/create

Create a gist

`PUT` https://getthegist.app/api/github/gists/gist/update

Update a gist

`GET` https://getthegist.app/api/github/gists/gist/[id]/comments

Get all comments on a gist

`GET` https://getthegist.app/api/github/gists/gist/[id]/comments/[comment]

Get a comment on a gist

`POST` https://getthegist.app/api/github/gists/gist/[id]/comments/post

Create a comment against a gist

`POST` https://getthegist.app/api/github/gists/gist/[id]/comments/[comment]/delete

Delete a comment against a gist

`PUT` https://getthegist.app/api/github/gists/gist/[id]/comments/[comment]/update

Update a comment against a gist

`GET` https://getthegist.app/api/github/gists/gist/[id]/commits

Get all commits on a gist
