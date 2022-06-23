import { Request, Response } from 'express';
import Project, { ProjectInt } from '../models/project.model'


// POST ADD new Project to the DB
export const createProject = (req: Request, res: Response) => {
    const project = new Project(req.body);

    //mongoose method for saving data to the DB 
    project.save((err: Error, project: ProjectInt) => {
        if (err) {
            res.status(400).send(err);
        }
        res.status(201).json(project)
    })
}

//GET all project from the DB
export const getAllProject = (req: Request, res: Response) => {

    //mongoose method for get all item
    Project.find({}, (err: Error, projects: ProjectInt) => {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(projects);
    })
}

// GET specific project by id from the DB
export const getProjectById = (req: Request, res: Response) => {
    Project.findById(req.params.id, (err: Error, project: ProjectInt) => {
        if (err) {
            res.status(400).send(err);
        }

        res.status(200).json(project)
    })
}

// PUT update a project by Id to the DB
export const updateProjectById = (req: Request, res: Response) => {
    Project.findOneAndUpdate({ _id: req.params.id }, req.body, (err: Error, projectUpdate: ProjectInt) => {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(projectUpdate);
    })
}

//DELETE project by Id to the DB
export const deleteProjectById = (req: Request, res: Response) => {
    Project.findByIdAndDelete({ _id: req.params.id }, (err: Error, project: ProjectInt) => {
        if (err) {
            res.status(400).send(err);
        }
        res.status(200).json(project);
    })
}
