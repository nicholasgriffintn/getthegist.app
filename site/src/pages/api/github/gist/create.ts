import { getSession } from 'next-auth/client';
import type { NextApiRequest, NextApiResponse } from 'next';
const { Octokit } = require('@octokit/rest');

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    const session = await getSession({ req });

    if (session && session.token) {
      const octokit = new Octokit({
        auth: `token ${session.token}`,
      });

      octokit.gists
        .create({
          files: req.body.files,
        })
        .then(({ data }) => {
          res.status(200).json({
            message: 'Success',
            data,
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
