import express, { Request, Response } from "express";
import mongoose from "mongoose";
import cors from "cors";
import cloudinary from 'cloudinary';
import dotenv from 'dotenv';
import RecipeModel from "./Models/RecipeDetails";
import ArticleModel from "./Models/ArticleDetails";
import multer from 'multer';
import streamifier from "streamifier";
import path from 'path';


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
const app = express(); //express setup 
const HTTP_PORT = process.env.PORT || 5020; //PORT SETUP
const jwt = require("jsonwebtoken");


// Middleware for parsing JSON data
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '..', 'client')));

//Catch all
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'));
  });

//admin Login
app.post('/adminLogin', (req, res) => {
    const { username, password } = req.body;
  
    if (username === 'Potato1234' && password === 'Potato6969#') {
      const token = jwt.sign({ role: 'owner', username }, 'myHardcodedSecretKey123!', { expiresIn: "1h" });
      res.json({ token });
    } else {
      res.status(401).json({ error: 'Invalid credentials' });
    }
});

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
//Adding Article
app.post("/addArticle", upload.single('image'), async (req: Request, res: Response) => {
    try {
        const { name, description, tag } = req.body;

        if (!name || !description || !tag) {
            return res.status(400).json({ message: "All fields are required" });
        }

        if (req.file) {
            const result = await streamUpload(req);
            const image = (result as ResultType).secure_url;

            const newArticle = new ArticleModel({
                name,
                image,
                description,
                tag,
            });

            await newArticle.save();
            res.status(201).json(newArticle);
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
// All Articles
app.get('/articles', async (req: Request, res: Response) => {
    try {
        const articles = await ArticleModel.find();
        res.status(200).json(articles);
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
//Article by Id
app.get('/article/:id', async (req: Request, res: Response) => {
    try {
      const article = await ArticleModel.findById(req.params.id);
      if (article) {
        res.status(200).json(article);
      } else {
        res.status(404).json({ message: "Recipe not found" });
      }
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: "Internal Server Error" });
    }
});
// Search for recipes with the same tag, case-insensitive
app.get('/searchRecipes', async (req: Request, res: Response) => {
    try {
        const tagQuery = req.query.tag;
        console.log("Query Tag:", tagQuery); // Debug log

        if (tagQuery === undefined || tagQuery === null) {
            return res.status(400).json({ message: "Tag is required for searching" });
        }

        const tagArray: string[] = Array.isArray(tagQuery) ? (tagQuery as string[]) : [tagQuery as string];
        //console.log("Tag Array:", tagArray); // Debug log

        // Convert tags to lowercase and build regex patterns
        const regexTags = tagArray.map(tag => new RegExp(`\\b${tag.toLowerCase()}\\b`, 'i'));
        console.log("Regex Tags:", regexTags); // Debug log

        // Search in the MongoDB database, case-insensitive
        const recipes = await RecipeModel.find({
            tag: { $in: regexTags }
        });

        console.log("Found Recipes:", recipes); // Debug log

        res.status(200).json(recipes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});

// Search for articles with the same tag, case-insensitive
app.get('/searchArticles', async (req: Request, res: Response) => {
    try {
        const tagQuery = req.query.tag;
        console.log("Query Tag:", tagQuery); // Debug log

        if (tagQuery === undefined || tagQuery === null) {
            return res.status(400).json({ message: "Tag is required for searching" });
        }

        const tagArray: string[] = Array.isArray(tagQuery) ? (tagQuery as string[]) : [tagQuery as string];
        //console.log("Tag Array:", tagArray); // Debug log

        // Convert tags to lowercase and build regex patterns
        const regexTags = tagArray.map(tag => new RegExp(`\\b${tag.toLowerCase()}\\b`, 'i'));
        console.log("Regex Tags:", regexTags); // Debug log

        // Search in the MongoDB database, case-insensitive
        const articles = await ArticleModel.find({
            tag: { $in: regexTags }
        });

        console.log("Found Articles:", articles); // Debug log

        res.status(200).json(articles);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal Server Error" });
    }
});
mongoose.connect('mongodb+srv://candacecheung9637:test123@cluster0.uxfb0nz.mongodb.net/?retryWrites=true&w=majority').then(() => {
    app.listen(HTTP_PORT, () => {
        console.log(`Server is running on port ${HTTP_PORT}`);
    });
});