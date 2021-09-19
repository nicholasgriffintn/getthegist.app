import type { NextApiRequest, NextApiResponse } from 'next';

import { getSession } from 'next-auth/client';
import { getToken } from 'next-auth/jwt';
const { Octokit } = require('@octokit/rest');

const api = (req: NextApiRequest, res: NextApiResponse) => {
  return new Promise(async (resolve, reject) => {
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
              res.statusCode = 200;
              res.end(
                JSON.stringify({
                  status: 'Success',
                  message: 'Retrieved!',
                  data: { ...data },
                }),
              );
              return resolve({});
            })
            .catch(err => {
              console.error(err);

              res.statusCode = 500;
              res.end(
                JSON.stringify({
                  status: 'Error',
                  message: 'Something went wrong',
                }),
              );
              return resolve({});
            });
        } else {
          res.statusCode = 400;
          res.end(
            JSON.stringify({
              status: 'Error',
              message: 'You must be signed in to use this API',
            }),
          );
          return resolve({});
        }
      } else {
        res.statusCode = 405;
        res.end(
          JSON.stringify({
            status: 'Error',
            message: 'Method Not Allowed',
          }),
        );
        return resolve({});
      }
    } else {
      res.statusCode = 400;
      res.end(
        JSON.stringify({
          status: 'Error',
          message: 'You must be signed in to use this API!',
        }),
      );
      return resolve({});
    }
  });
};

export default api;
