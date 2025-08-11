import Note from "../models/Note.js";

export async function getAllNotes(req, res){
    try {
        const notes= await Note.find().sort({createdAt:-1})
        res.status(200).json(notes)
    } catch (error) {
        console.error("Error in GetAllNotes")
        res.status(500).json({message: "Interval server error"})

    }
}
export async function getNote(req, res){
    try {
        const note= await Note.findById(req.params.id)
        if(!note) return res.status(404).json({message: "Note not found!"})
        res.status(200).json(note)
    } catch (error) {
        console.error("Error in Note")
        res.status(500).json({message: "Interval server error"})

    }
}
export async function createNote(req, res){
    try{
        const {title, content}= req.body
        const note= new Note({title, content})
        const savedNote= await note.save()
        res.status(201).json(savedNote);
    } catch(error){
        console.error("Error in Creating Note")
        res.status(500).json({message: "Interval server error"})

    }
}
export async function updateNote(req, res){
    try{
        const {title, content}=req.body
        const noteUpdate =await Note.findByIdAndUpdate(req.params.id, {title,content},{ new:true})
        if(!noteUpdate) return res.status(404).json({message: "Note not found!"})
        res.status(201).json({message: "Note Updated successfully!"});
    }catch(error){
        console.error("Error in Updating Note", error)
        res.status(500).json({message: "Interval server error"})
    }
}
export async function deleteNote(req, res){
    try{
        const {title, content}=req.body
        const delNote= await Note.findByIdAndDelete(req.params.id)
        if(!delNote) return res.status(404).json({message: "Note not found!"})
        res.status(201).json({message: "Deleted Note successfully!"});
    }catch(error){
        console.error("Error in Deleting Note", error)
        res.status(500).json({message: "Interval server error"})
    }
    
}