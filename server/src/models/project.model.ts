import mongoose from "mongoose";

export const projectSchema = new mongoose.Schema({
    title: { type: String, required: true },
    id: { type: Number, required: false },
    reference: { type: String, required: true },
    description: { type: String, required: true }
})

export interface ProjectInt extends mongoose.Document {
    title: string,
    id: number,
    reference: string,
    description: string,
}

const Project = mongoose.model<ProjectInt>('Project', projectSchema);

export default Project;