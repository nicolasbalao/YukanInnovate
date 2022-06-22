import express, { Request, Response } from 'express'
import { createProject, deleteProjectById, getAllProject, getProjectById, updateProjectById } from '../controllers/project.controller';

const router = express.Router({ mergeParams: true });


//POST Create new Project
router.post("/", createProject);

// Get
router.get("/", getAllProject);
router.get("/:id", getProjectById);

// PUT update project by id
router.put("/:id", updateProjectById);

// DELETE delete project by id
router.delete("/:id", deleteProjectById);

export default router;