import { Router } from "express";
import AdminController from "../controllers/adminController.js";


const router = Router();
const adminController = new AdminController();

// bind garante que o "this" do controller continue correto ao chamar a função
router.get('/active', adminController.getActiveAdmins.bind(adminController));
router.get('/inactive', adminController.getInactiveAdmins.bind(adminController));
router.get('/:id', adminController.getAdminById.bind(adminController));
router.post('/', adminController.createAdmin.bind(adminController));
router.patch('/:id', adminController.updateAdmin.bind(adminController)); //todo -> JWT para validação do ID
//todo router.patch('/password/:id', adminController.updateAdminPassword.bind(adminController));
router.patch('/restore/:id', adminController.restoreAdmin.bind(adminController));
router.delete('/:id', adminController.deleteAdmin.bind(adminController));



export default router;