import type { NextApiRequest, NextApiResponse } from 'next';

import { getSession } from 'next-auth/client';
import { getToken } from 'next-auth/jwt';
const { Octokit } = require('@octokit/rest');

const api = async (req: NextApiRequest, res: NextApiResponse) => {
  const secret = process.env.NEXT_JWT_AUTH_SECRET;
  const token = await getToken({ req, secret });
  const session = await getSession({ req });

  const accessToken =
    token && token.accessToken
      ? token.accessToken
      : session && session.accessToken
      ? session.accessToken
      : null;

  if (accessToken) {
    const octokit = new Octokit(
      accessToken
        ? {
            auth: `token ${accessToken}`,
          }
        : {},
    );

    if (req.method === 'GET') {
      if (session && token && (token.accessToken || session.accessToken)) {
        octokit.rest.users
          .getAuthenticated()
          .then(({ data }) => {
            octokit.rest.users
              .getContextForUser({
                username: data?.login,
              })
              .then(context => {
                res.status(200).json({
                  status: 'Success',
                  message: 'Retrieved!',
                  data: { ...data, context: context.data },
                });
              })
              .catch(err => {
                console.error(err);
                res.status(200).json({
                  status: 'Success',
                  message: 'Retrieved!',
                  data: { ...data },
                });
              });
          })
          .catch(err => {
            console.error(err);
            res.status(500).json({
              status: 'Error',
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
        status: 'Error',
        message: 'Method Not Allowed',
      });
    }
  } else {
    res.status(400).json({
      status: 'Error',
      message: 'You must be signed in to use this API!',
    });
  }
};

export default api;