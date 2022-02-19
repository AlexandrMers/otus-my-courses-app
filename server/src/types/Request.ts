import { Request } from 'express';
import * as core from 'express-serve-static-core';

export type ExtendedRequest<REQ_TYPE, RES_TYPE = any, PARAMS = core.ParamsDictionary> = Request<PARAMS, RES_TYPE, REQ_TYPE>;

export interface UserInterface {
  name: string;
  password: string;
  confirmedPassword: string;
  login: string;
  availableCourses: any[];
}
