import Dexie from 'dexie';

const db = new Dexie('get_the_gist');

db.version(1).stores({
  user: 'id, email, followers, following, created_at, updated_at, hireable, bio, twitter_username, public_repos, public_gists, login, avarar_url, url, html_url, type, site_admin, name, company, blog, location',
  notes:
    'id,public, created_at, updated_at, description, comments, owner, truncated, forks, history, metadata, files',
});

export default db;
