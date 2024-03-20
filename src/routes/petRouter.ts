import  express from 'express';
import PetController from '../controller/PetController';

const router = express.Router();  

const petController = new PetController();

router.post('/', petController.criaPet);

export default router;


//parei aqui na aula 07
