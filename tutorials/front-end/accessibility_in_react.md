---
title: 'Accessibility in React'
synopsis: 'This is an example tutorial. You can use this file as a template to create your own tutorials.'
date: 2024-10-10
author:
  name: 'Jarno Leuckx'
  avatarUrl: '/assets/avatars/john-doe.png'
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: ''
    linkedin: 'https://www.linkedin.com/in/jarno-leuckx-a1572414a/'
    github: 'https://github.com/JarnoLeuckx'
thumbnailUrl: '/assets/example-image.jpg'
head:
  - - meta
    - name: description
      content: 'This is an example tutorial. You can use this file as a template to create your own tutorials.' # Add a description of the article
  - - meta
    - name: keywords
      content: 'Accessibility React' # Add keywords related to the article
---

#  Building an Accessibility-Focused Project in React

## Introduction
In this tutorial, we’ll build a React project focused on accessibility by using semantic HTML and ensuring good practices. This approach will help us create components that are more accessible to all users, including those using screen readers.

### Setting Up the Project

Follow these steps to create a new React project:

1 Create a new React project
```bash
npx create-react-app accessibility-project
```
2 Navigate to the project directory
```bash
cd accessible-react-app
```
3 start the app 
```bash
npm start
```
4 Open your browser and navigate to `http://localhost:3000`

5 Create a components folder: Inside src, create a new folder named components for reusable components.

### Accessible Modal Component
Create a new file called `AccessibleModal.jsx` inside the components folder.
copy this code:
```bash
import React from 'react';

const AccessibleModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div style={{ padding: '20px', backgroundColor: 'white', position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
      <h2>Modal Title</h2>
      <p>This is a simple modal.</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default AccessibleModal;
```
### Accessible Form Component
Create a new file called `AccessibleForm.jsx` inside the components folder.
copy this code:
```bash
import React, { useState } from 'react';

const AccessibleForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name:</label>
      <input id="name" name="name" onChange={handleChange} required />
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" onChange={handleChange} required />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AccessibleForm;
```
### Portfolio Component
Finally, let’s bring everything together in a `Portfolio.jsx` component to display each accessible feature.
```bash 
import React, { useState } from 'react';
import AccessibleButton from './AccessibleButton';
import AccessibleModal from './AccessibleModal';
import AccessibleForm from './AccessibleForm';

const Portfolio = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div>
      <h1>Accessibility in React Portfolio</h1>
      <AccessibleButton label="Open Modal" onClick={() => setModalOpen(true)} />
      <AccessibleModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
      <AccessibleForm />
    </div>
  );
};

export default Portfolio;
```
#### Conclusion

You now have a solid foundation for an accessibility-focused React project using semantic HTML and good practices! You’ve learned how to create accessible buttons, modals, and forms without relying on ARIA attributes. This approach ensures a better user experience for all, particularly for users with assistive technologies.