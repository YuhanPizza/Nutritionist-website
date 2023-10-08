import React, { useState } from 'react';
import axios from 'axios';
import "../styles/Main.css";
import { ToastContainer, toast } from 'react-toastify';

interface FormData {
  name: string;
  images: File[];
  description: string;
  tag: string[];
}

const ArticleForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    images: [], // Change to an array
    description: '',
    tag: [],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const fileArray = Array.from(files); // Convert to array
      setFormData({ ...formData, images: [...formData.images, ...fileArray] }); // Append to images array
    }
  };

  const handleTagChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const tags = e.target.value.split(',').map(tag => tag.trim());
    console.log("Split and Trimmed Tags:", tags);
    setFormData({ ...formData, tag: tags });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData();
    for (const [key, value] of Object.entries(formData)) {
      if (key === 'images') {
        for (const image of value as File[]) {
          data.append(key, image);
        }
      } else {
        data.append(key, value);
      }
    }
    try {
      const response = await axios.post('https://FlavourOfHealth-api.onrender.com/addArticle', data, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      console.log('New Article added:', response.data);
      // success toast
      toast.success('Article added successfully', {
        position: 'bottom-right',
        autoClose: 3000,
      })
    } catch (error) {
      console.error('An error occurred:', error);
      // error toast
      toast.error('An error occurred while adding the Article', {
        position: 'bottom-right',
        autoClose: 3000, // Close the toast after
      })
    }
  };

  return (
    <section className="mt-4 d-flex justify-content-center" style={{ paddingBottom: '50px' }}>
      <div className="card w-50">
        <div className="card-body">
          <h3 className="text-center">Add New Article</h3>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" name="name" placeholder="Enter Article Title" onChange={handleChange} />
            </div>
            <div className="mb-3">
              <label htmlFor="image" className="form-label">Images</label>
              <input type="file" className="form-control" id="image" name="image" multiple onChange={handleImageChange} /> {/* Add 'multiple' attribute */}
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
              <button type="submit" className="btn btn-primary">Post Article</button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer /> {/* Toast Container */}
    </section>
  );
};

export default ArticleForm;