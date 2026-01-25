import React, { useState, useRef } from 'react';

function AddVehicle() {
  const [formData, setFormData] = useState({
    name: '',
    images: [],
    rate: '',
    type: '',
    seatingCapacity: '',
    ac: false,
    airbag: false,
    fuelType: '',
    luggageCapacity: '',
    description: '',
    available: true,
  });
  const [previewImages, setPreviewImages] = useState([]);
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length === 0) return;

    setIsUploading(true);
    
    // Create previews
    const newPreviews = [];
    const newBase64Images = [];
    
    let processed = 0;
    files.forEach((file, index) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        newPreviews.push(reader.result);
        processed++;
        
        if (processed === files.length) {
          setPreviewImages(prev => [...prev, ...newPreviews]);
          setIsUploading(false);
        }
      };
      reader.readAsDataURL(file);

      // Convert to Base64
      const fileReader = new FileReader();
      fileReader.onload = () => {
        newBase64Images.push(fileReader.result);
        if (newBase64Images.length === files.length) {
          setFormData(prev => ({
            ...prev,
            images: [...prev.images, ...newBase64Images]
          }));
        }
      };
      fileReader.readAsDataURL(file);
    });
  };

  const removeImage = (index) => {
    const newPreviews = [...previewImages];
    newPreviews.splice(index, 1);
    setPreviewImages(newPreviews);

    const newImages = [...formData.images];
    newImages.splice(index, 1);
    setFormData(prev => ({
      ...prev,
      images: newImages
    }));
  };

  const triggerFileInput = () => {
    fileInputRef.current.click();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data:', formData);
    // Add your submit logic here (e.g., API call)
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Gradient Header */}
        <div className="bg-gradient-to-r from-blue-500 to-cyan-400 p-6 text-white">
          <h1 className="text-3xl font-bold">Add New Vehicle</h1>
          <p className="opacity-90 mt-1">Fill in the details of your vehicle</p>
        </div>
        
        <div className="p-8">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Image Upload with Preview */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Vehicle Images
                <span className="ml-2 text-xs font-normal text-blue-600">
                  {previewImages.length} uploaded
                </span>
              </label>
              
              {/* Image Preview Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
                {previewImages.map((image, index) => (
                  <div key={index} className="relative group">
                    <img 
                      src={image} 
                      alt={`Preview ${index}`}
                      className="w-full h-32 object-cover rounded-lg shadow-sm border border-gray-200"
                    />
                    <button
                      type="button"
                      onClick={() => removeImage(index)}
                      className="absolute top-1 right-1 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition duration-300"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                      </svg>
                    </button>
                  </div>
                ))}
                
                {/* Upload Button */}
                <div 
                  onClick={triggerFileInput}
                  className={`relative w-full h-32 rounded-lg border-2 border-dashed ${previewImages.length > 0 ? 'border-blue-300' : 'border-gray-300'} flex items-center justify-center cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-md hover:border-blue-400 bg-gray-50 group`}
                >
                  <div className="text-center p-4">
                    <svg
                      className="mx-auto h-10 w-10 text-gray-400 group-hover:text-blue-500 transition duration-300"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                      />
                    </svg>
                    <span className="mt-2 block text-sm text-gray-600 group-hover:text-blue-600 transition duration-300">
                      Add Images
                    </span>
                  </div>
                  {isUploading && (
                    <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                    </div>
                  )}
                </div>
              </div>
              
              <input
                type="file"
                ref={fileInputRef}
                onChange={handleImageChange}
                accept="image/*"
                className="hidden"
                multiple
              />
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={triggerFileInput}
                  className="px-4 py-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition duration-300 shadow-sm border border-blue-200"
                >
                  {previewImages.length > 0 ? 'Add More Images' : 'Upload Images'}
                </button>
                <p className="text-xs text-gray-500">
                  PNG, JPG up to 5MB each
                </p>
              </div>
            </div>

            {/* Name */}
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Vehicle Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm hover:border-blue-400"
                placeholder="e.g., Toyota Innova"
                required
              />
            </div>

            {/* Rate */}
            <div>
              <label htmlFor="rate" className="block text-sm font-medium text-gray-700 mb-1">
                Rate (per hour)
              </label>
              <div className="relative mt-1">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <span className="text-gray-500">$</span>
                </div>
                <input
                  type="number"
                  id="rate"
                  name="rate"
                  value={formData.rate}
                  onChange={handleChange}
                  className="pl-8 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm hover:border-blue-400"
                  placeholder="0.00"
                  min="0"
                  step="0.01"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Type */}
              <div>
                <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-1">
                  Vehicle Type
                </label>
                <select
                  id="type"
                  name="type"
                  value={formData.type}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm hover:border-blue-400 appearance-none bg-white"
                  required
                >
                  <option value="" disabled>Select Type</option>
                  <option value="SUV">SUV</option>
                  <option value="Sedan">Sedan</option>
                  <option value="Hatchback">Hatchback</option>
                  <option value="Van">Van</option>
                  <option value="Truck">Truck</option>
                  <option value="Luxury">Luxury</option>
                  <option value="Sports">Sports</option>
                </select>
              </div>

              {/* Seating Capacity */}
              <div>
                <label htmlFor="seatingCapacity" className="block text-sm font-medium text-gray-700 mb-1">
                  Seating Capacity
                </label>
                <input
                  type="number"
                  id="seatingCapacity"
                  name="seatingCapacity"
                  value={formData.seatingCapacity}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm hover:border-blue-400"
                  placeholder="e.g., 7"
                  min="1"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Fuel Type */}
              <div>
                <label htmlFor="fuelType" className="block text-sm font-medium text-gray-700 mb-1">
                  Fuel Type
                </label>
                <select
                  id="fuelType"
                  name="fuelType"
                  value={formData.fuelType}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm hover:border-blue-400 appearance-none bg-white"
                  required
                >
                  <option value="" disabled>Select Fuel Type</option>
                  <option value="Petrol">Petrol</option>
                  <option value="Diesel">Diesel</option>
                  <option value="Electric">Electric</option>
                  <option value="Hybrid">Hybrid</option>
                  <option value="CNG">CNG</option>
                </select>
              </div>

              {/* Luggage Capacity */}
              <div>
                <label htmlFor="luggageCapacity" className="block text-sm font-medium text-gray-700 mb-1">
                  Luggage Capacity (bags)
                </label>
                <input
                  type="number"
                  id="luggageCapacity"
                  name="luggageCapacity"
                  value={formData.luggageCapacity}
                  onChange={handleChange}
                  className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm hover:border-blue-400"
                  placeholder="e.g., 4"
                  min="0"
                  required
                />
              </div>
            </div>

            {/* Feature Checkboxes */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className={`flex items-center p-3 rounded-lg transition duration-300 ${formData.ac ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'}`}>
                <input
                  type="checkbox"
                  id="ac"
                  name="ac"
                  checked={formData.ac}
                  onChange={handleChange}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="ac" className="ml-2 text-sm font-medium text-gray-700">
                  Air Conditioning
                </label>
              </div>

              <div className={`flex items-center p-3 rounded-lg transition duration-300 ${formData.airbag ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'}`}>
                <input
                  type="checkbox"
                  id="airbag"
                  name="airbag"
                  checked={formData.airbag}
                  onChange={handleChange}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="airbag" className="ml-2 text-sm font-medium text-gray-700">
                  Airbag Safety
                </label>
              </div>

              <div className={`flex items-center p-3 rounded-lg transition duration-300 ${formData.available ? 'bg-blue-50 border border-blue-200' : 'bg-gray-50 border border-gray-200'}`}>
                <input
                  type="checkbox"
                  id="available"
                  name="available"
                  checked={formData.available}
                  onChange={handleChange}
                  className="h-5 w-5 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <label htmlFor="available" className="ml-2 text-sm font-medium text-gray-700">
                  Available for Rent
                </label>
              </div>
            </div>

            {/* Description */}
            <div>
              <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                Description
              </label>
              <textarea
                id="description"
                name="description"
                value={formData.description}
                onChange={handleChange}
                rows="4"
                className="mt-1 w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 focus:outline-none transition duration-300 shadow-sm hover:border-blue-400"
                placeholder="e.g., Spacious and comfortable ride ideal for family travel with advanced safety features."
                required
              ></textarea>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white py-3 rounded-lg hover:opacity-90 transition duration-300 shadow-lg transform hover:scale-[1.01] active:scale-[0.99] font-medium text-lg"
              >
                Add Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddVehicle;