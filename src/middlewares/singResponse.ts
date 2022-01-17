import express from 'express';
import dotenv from 'dotenv';
import mung from 'express-mung';

dotenv.config();

const AUTHOR_NAME = process.env.AUTHOR_NAME || '';
const AUTHOR_LASTNAME = process.env.AUTHOR_LASTNAME || '';

const singResponse = (body: any, req: any, res: any) => {
  body.author = { name: AUTHOR_NAME, lastname: AUTHOR_LASTNAME };
};

export default mung.json(singResponse);
