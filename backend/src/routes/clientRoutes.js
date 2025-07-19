import { Router } from "express";
import ClientController from "../controllers/clientController.js";


const router = Router();
const clientController = new ClientController();

// bind garante que o "this" do controller continue correto ao chamar a função
router.get('/active', clientController.getActiveClients.bind(clientController));
router.get('/inactive', clientController.getInactiveClients.bind(clientController));
router.get('/:id', clientController.getClientById.bind(clientController));
router.post('/', clientController.createClient.bind(clientController));
// router.patch('/:id', clientController.updateClient.bind(clientController)); //todo -> JWT para validação do ID
// router.delete('/:id', clientController.deleteClient.bind(clientController));



export default router;