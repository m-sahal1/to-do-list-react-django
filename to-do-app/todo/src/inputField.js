import { useState, useEffect } from 'react';
import axios from 'axios';
import './inputField.css';

function InputField() {
  const [inputFields, setInputFields] = useState([{ id: null, title: '' }]);
  const [errorMessage, setErrorMessage] = useState('');
  const [isModified, setIsModified] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/get/');

      const data = response.data;
      setInputFields(data);
    } catch (error) {
      setErrorMessage('Error fetching data');
      console.error('Error fetching data:', error);
    }
  };

  const handleAddField = () => {
    setInputFields([...inputFields, { id: null, title: '' }]);
  };

  const handleInputChange = (index, event) => {
    const newInputFields = [...inputFields];
    newInputFields[index] = { ...newInputFields[index], title: event.target.value };
    setInputFields(newInputFields);
    setIsModified(true);
  };

  const handleDeleteField = async (index) => {
    try {
      const fieldToDelete = inputFields[index];
      console.log(fieldToDelete.id)
      if (fieldToDelete.id) {
        
        // If the field has an ID (indicating it exists in the database), send a DELETE request
        await axios.delete(`http://127.0.0.1:8000/delete/${fieldToDelete.id}`);
      }

      const updatedFields = [...inputFields];
      updatedFields.splice(index, 1); // Remove the field from the array
      setInputFields(updatedFields);
    } catch (error) {
      setErrorMessage('Error deleting data');
      console.error('Error deleting data:', error);
    }
  };

  const handleSubmit = async () => {
    try {
      console.log(inputFields)
      const postData = inputFields.map((field) => ({id:field.id, title: field.title }));

      const response = await axios.post('http://127.0.0.1:8000/add/', postData);

      console.log('Data submitted successfully:', response.data);
      setIsModified(false)
    } catch (error) {
      setErrorMessage('Error submitting data');
      console.error('Error submitting data:', error);
    }
  };

  return (
    <div className="container">
      {inputFields.map((field, index) => (
        <div key={index} className="input-field-container">
          <input
            className="input-field"
            type="text"
            placeholder="Enter a value"
            value={field.title}
            onChange={(event) => handleInputChange(index, event)}
          />
          <button className="delete-button" onClick={() => handleDeleteField(index)}>
            Delete
          </button>
        </div>
      ))}
      <button className="add-button" onClick={handleAddField}>
        Add
      </button>
      <button className="submit-button" onClick={handleSubmit} disabled={!isModified}>
        Submit
      </button>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
    </div>
  );
}

export default InputField;
