import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import "../styles/Main.css";
import { Toast } from 'react-bootstrap';

interface FormData {
  name: string;
  image: File | null;
  description: string;
  tag: string[];
}

const RecipeForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    image: null,
    description: '',
    tag: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    setFormData({ ...formData, image: file });
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',');
    setFormData({ ...formData, tag: tags });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      data.append(key, value);
    }
    try {
      const response = await axios.post('https://FlavourOfHealth-api.onrender.com/addRecipe', data,{
        headers: { 'Content-Type': 'multipart/form-data'}
      });
      console.log('New Recipe added:', response.data);
      // Show a success toast
      toast.success('Recipe added successfully', {
        position: 'bottom-right',
        autoClose: 3000, // Close the toast after 3 seconds
      });
    } catch (error) {
      console.error('An error occurred:', error);
      //error toast
      toast.error('An error occured while adding the recipe',{
        position: 'bottom-right',
        autoClose: 3000, // Close the toast after
      })
    }
  };

  return (
    <section className="mt-4 d-flex justify-content-center" style={{ paddingBottom: '50px' }}>
      <div className="card w-50">
        <div className="card-body">
          <h3 className="text-center">Add New Recipe</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter Recipe Name" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Image URL</label>
              <input type="file" className="form-control" id="image" name="image" placeholder="Upload image" onChange={handleImageChange} />
            </div>
            <div className="mb-3 preserve-whitespace">
              <label htmlFor="description" className="form-label">Description</label>
              <textarea className="form-control" id="description" name="description" rows={5} placeholder="Enter description" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="tag" className="form-label">Tags</label>
              <input type="text" className="form-control" id="tag" name="tag" placeholder="Enter tags (comma-separated)" onChange={handleTagChange} />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary">Add Recipe</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer/> {/*This is where the toast is located */}
    </section>
  );
};

export default RecipeForm;