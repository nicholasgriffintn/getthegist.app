import type { NextApiRequest, NextApiResponse } from 'next';

import { getSession } from 'next-auth/client';
import { getToken } from 'next-auth/jwt';
const { Octokit } = require('@octokit/rest');

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const secret = process.env.NEXT_JWT_AUTH_SECRET;
    const token = await getToken({ req, secret });
    const session = await getSession({ req });

    console.log(token);
    console.log(session);

    if (session && token && (token.accessToken || session.accessToken)) {
      const octokit = new Octokit({
        auth: `token ${session.token}`,
      });

      octokit.gists
        .list({
          gist_id: req.query.id,
          sha: 'e681e36206cbd6d51bd45ce8f1632ef7dc7fc0721d891a5c09b3cc5e6de83a89',
        })
        .then(({ data }) => {
          res.status(200).json({
            message: 'Success',
            data,
          });
        })
        .catch(err => {
          console.error(err);
          res.status(500).json({
            message: 'Something went wrong!',
          });
        });
    } else {
      res.status(403).json({
        message: 'You must be signed in to use this API',
      });
    }
  } else {
    res.status(405).json({
      message: 'Method Not Allowed',
    });
  }
};

export default api;
