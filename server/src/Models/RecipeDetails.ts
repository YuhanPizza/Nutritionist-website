import mongoose from "mongoose";


const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const RecipeSchema = new Schema({
    name: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    tag: {
      type: [String], // An array of strings
      required: true,
    }
  });
  
  // Export the model
  const RecipeModel = mongoose.model("RecipeDetails", RecipeSchema);
  export default RecipeModel;