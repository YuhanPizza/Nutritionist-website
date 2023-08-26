import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import RecipeModel from "./Models/RecipeDetails";
import multer from 'multer';
import streamifier from "streamifier";

const upload = multer();

interface ResultType {
    secure_url: string;
    // other fields you expect to get
}

const streamUpload = (req: Request) => {
    return new Promise((resolve, reject) => {
        let stream = cloudinary.v2.uploader.upload_stream((error, result) => {
            if (result) {
                resolve(result);
            } else {
                reject(error);
            }
        });
        if (req.file && req.file.buffer) {
            streamifier.createReadStream(req.file.buffer).pipe(stream);
        }
    });
};

dotenv.config();
cloudinary.v2.config({
    cloud_name: "dusfrwsg5",
    api_key: "213224212869577",
    api_secret: "_m0gWsKSCmTZADZl90nZkXkGj30"
});
const app = express();
const PORT = 5000;

// Middleware for parsing JSON data
app.use(cors());
app.use(express.json());

//Adding a Recipe 
app.post("/addRecipe", upload.single('image'), async (req: Request, res: Response) => {
    try {
        const { name, description, tag } = req.body;

        if (!name || !description || !tag) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (req.file) {
            const result = await streamUpload(req);
            const image = (result as ResultType).secure_url;

            const newRecipe = new RecipeModel({
                name,
                image,
                description,
                tag,
            });

            await newRecipe.save();
            res.status(201).json(newRecipe);
        } else {
            res.status(400).send("No file uploaded");
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
// Endpoint to get a List of Recipes
app.get('/recipes', async (req: Request, res: Response) => {
    try {
      const recipes = await RecipeModel.find();
      res.status(200).json(recipes);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
// Endpoint to get a single recipe by ID
app.get('/recipe/:id', async (req: Request, res: Response) => {
    try {
      const recipe = await RecipeModel.findById(req.params.id);
      if (recipe) {
        res.status(200).json(recipe);
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
  });
mongoose.connect('mongodb+srv://candacecheung9637:J1W8AXW2wiU1VKP7@cluster0.uxfb0nz.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});