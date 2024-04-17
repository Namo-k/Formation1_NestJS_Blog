import { Request, Response, NextFunction } from "express";

export function localData(req : any, res :Response, next  : NextFunction)  {

  console.log(req);
  res.locals.connected = req.session.connected
  res.locals.user = req.session.user

  next()
}