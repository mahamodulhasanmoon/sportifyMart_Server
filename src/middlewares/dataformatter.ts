import { RequestHandler } from 'express';

export const dataFormatter: RequestHandler = (req, _res, next) => {
  req.body = JSON.parse(req.body.data);
  next();
};
