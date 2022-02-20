import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';

export type JwtServiceType = typeof jwt;
export type BcryptServiceType = typeof bcrypt;
