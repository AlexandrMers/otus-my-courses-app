import { Request } from 'express';
import * as core from 'express-serve-static-core';

import { User } from '../structure/models/schemas/User';

export type ExtendedRequest<
  REQ_TYPE,
  RES_TYPE = any,
  PARAMS = core.ParamsDictionary
> = Request<PARAMS, RES_TYPE, REQ_TYPE>;

export type RequestWithUser = Request & {
  user: User;
};
