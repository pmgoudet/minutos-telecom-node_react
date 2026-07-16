import { Router } from "express";
import ClientController from "../controllers/clientController.js";
import { sanitizeClientData, sanitizeUpdatedClientData } from "../middlewares/sanitizeClients.js";

const router = Router();
const clientController = new ClientController();

// bind garante que o "this" do controller continue correto ao chamar a função
router.get('/active', clientController.getActiveClients.bind(clientController));
router.get('/inactive', clientController.getInactiveClients.bind(clientController));
router.get('/:id', clientController.getClientById.bind(clientController));
router.post('/', sanitizeClientData, clientController.createClient.bind(clientController));
router.patch('/:id', sanitizeUpdatedClientData, clientController.updateClient.bind(clientController)); //todo -> JWT para validação do ID + talvez middlwares
// router.patch('/password/:id', clientController.updateClientPassword.bind(clientController));
router.patch('/restore/:id', clientController.restoreClient.bind(clientController)); //todo sanitizeUpdated? a ver
router.delete('/:id', clientController.deleteClient.bind(clientController));



export default router;
