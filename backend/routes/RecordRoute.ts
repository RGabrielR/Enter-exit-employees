import express from 'express';
import { handleRegisterEntry, handleRegisterExit } from '../controllers/RecordController.ts';

const router = express.Router();

router.post('/entry', handleRegisterEntry);
router.post('/exit', handleRegisterExit);

export default router;