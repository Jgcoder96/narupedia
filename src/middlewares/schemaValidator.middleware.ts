import { AnyZodObject, ZodError } from 'zod';
import { Request, Response, NextFunction } from 'express';
import { MESSAGES } from '../libs/messages.libs';

export const schemaValidator =
  (schema: AnyZodObject) =>
  (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        return res
          .status(400)
          .json(error.issues.map((issue) => ({ message: issue.message })));
      }
      return res
        .status(500)
        .json({ res: false, message: MESSAGES.server.serverError });
    }
  };
