import { Router } from "express";
import AdminController from "../controllers/adminController.js";
import { sanitizeAdminData, sanitizeUpdatedAdminData, sanitizeUpdatedPasswordAdmin } from "../middlewares/sanitizeAdmin.js";
import { authMiddleware } from "../middlewares/authorization.js";

const router = Router();
const adminController = new AdminController();

// bind garante que o "this" do controller continue correto ao chamar a função
router.get('/active', adminController.getActiveAdmins.bind(adminController));
router.get('/inactive', adminController.getInactiveAdmins.bind(adminController));
router.get('/:id', adminController.getAdminById.bind(adminController));
router.post('/', sanitizeAdminData, adminController.createAdmin.bind(adminController));
router.patch('/:id', sanitizeUpdatedAdminData, adminController.updateAdmin.bind(adminController)); //todo -> JWT para validação do ID
//todo router.patch('/password/:id', adminController.updateAdminPassword.bind(adminController));
router.patch('/restore/:id', adminController.restoreAdmin.bind(adminController));  //todo sanitizeUpdated? a ver
router.delete('/:id', adminController.deleteAdmin.bind(adminController));

router.post('/login', adminController.loginAdmin.bind(adminController));


//!TESTES

router.post('/test-password', sanitizeUpdatedPasswordAdmin, (req, res) => res.status(200).json(req.newAdminPassword))


export default router;