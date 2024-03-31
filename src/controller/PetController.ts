import { Request, Response } from "express";

let listPet = [];

export default class PetController {
  criaPet(req: Request, res: Response) {
    const novoPet = req.body;
    listPet.push(novoPet);
    return res.status(201).json(novoPet);
  }
}
