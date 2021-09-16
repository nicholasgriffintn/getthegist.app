import { getSession } from 'next-auth/client';
import type { NextApiRequest, NextApiResponse } from 'next';
const { Octokit } = require('@octokit/rest');

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const session = await getSession({ req });

    if (session) {
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
        });
    } else {
      res.status(403).json({
        message: 'You must be sign in to use this API',
      });
    }
  } else {
    res.status(405).json({
      message: 'Method Not Allowed',
    });
  }
};

export default api;
