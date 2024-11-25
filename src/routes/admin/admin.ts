import express, { Request, Response } from 'express'
import AdminController from '../../controllers/admin.controller'
import { authenticateAdmin, authenticateBoth } from '../../middlewares/auth.middleware'
import { responseWithStatus } from '../../utils/response.util'
import upload from '../../middlewares/multer.middleware'

const router = express.Router()

// router.post('/login', async (req: Request | any, res: Response) => {
//     const { email, password } = req.body;
//     const controller = new AdminController(req, res)
//     const response = await controller.login({ email, password });
//     const { status } = response;
//     return responseWithStatus(res, status, response)
// })

// router.get('/getAllUsers', authenticateBoth, async (req: Request | any, res: Response) => {
//     const { pageNumber, pageSize, filter, filterFor, exportCSV, roleId, sortOrder } = req.query;
//     const controller = new AdminController(req, res)
//     const response = await controller.getAllUsers(pageNumber, pageSize, filter, filterFor, exportCSV, roleId, sortOrder);
//     const { status } = response;
//     return responseWithStatus(res, status, exportCSV === 'true' ? response?.data : response)
// })

// router.get('/getDeletedUsers', authenticateBoth, async (req: Request | any, res: Response) => {
//     const { pageNumber, pageSize, filter, filterFor, exportCSV } = req.query;
//     const controller = new AdminController(req, res)
//     const response = await controller.getDeletedUsers(pageNumber, pageSize, filter, exportCSV);
//     const { status } = response;
//     return responseWithStatus(res, status, exportCSV === 'true' ? response?.data : response)
// })

module.exports = router;
