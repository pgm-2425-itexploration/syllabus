---
title: "Accessibility in React"
synopsis: "This is an example tutorial. You can use this file as a template to create your own tutorials."
date: 2024-10-10
author:
  name: "Jarno Leuckx"
  avatarUrl: "/assets/avatars/jarno-leuckx.png"
  socials: # Add social media links -> If you don't have any, place an empty string ''
    website: ""
    linkedin: "https://www.linkedin.com/in/jarno-leuckx-a1572414a/"
    github: "https://github.com/JarnoLeuckx"
thumbnailUrl: "/assets/example-image.jpg"
head:
  - - meta
    - name: description
      content: "This is an example tutorial. You can use this file as a template to create your own tutorials." # Add a description of the article
  - - meta
    - name: keywords
      content: "Accessibility React" # Add keywords related to the article
---

# Accessibility in React: How to Build Inclusive Applications

Accessibility, often referred to as **a11y**, is a crucial aspect of modern web development. It enables us to create applications that are usable by everyone, including individuals with visual, motor, cognitive, or other impairments. Implementing accessibility in a React application requires a combination of good coding practices, tools, and intentional design choices.

In this article, we will explore what accessibility means in the context of React, how to set up and configure a project, and how to extend it with basic and advanced functionalities. We’ll also discuss best practices, future expectations, and relevant resources.

---

## Table of Contents

- [Accessibility in React: How to Build Inclusive Applications](#accessibility-in-react-how-to-build-inclusive-applications)
  - [Table of Contents](#table-of-contents)
  - [1. Introduction](#1-introduction)
  - [2. The Importance of Accessibility in React](#2-the-importance-of-accessibility-in-react)
  - [3. Setup and Installation](#3-setup-and-installation)
    - [Starting a React Application](#starting-a-react-application)
  - [4 Accessibility Configuration](#4-accessibility-configuration)
    - [Automated Testing with axe-core](#automated-testing-with-axe-core)
  - [5. Basic Principles of Accessibility](#5-basic-principles-of-accessibility)
  - [Advanced Techniques and Features](#advanced-techniques-and-features)
    - [Keyboard Navigation](#keyboard-navigation)
  - [7. Visualizations and Examples](#7-visualizations-and-examples)
    - [Diagrams](#diagrams)
  - [8. Best Practices](#8-best-practices)
  - [9. Future Updates and Developments](#9-future-updates-and-developments)
  - [10. Resources and References](#10-resources-and-references)

---

## 1. Introduction

Accessibility focuses on designing and developing products that cater to a wide range of users, regardless of their physical, motor, or cognitive abilities. For developers, this means ensuring our digital products comply with accessibility standards, such as the **Web Content Accessibility Guidelines (WCAG)**.

React is a popular JavaScript library for building complex user interfaces. While React doesn’t integrate accessibility by default, it provides powerful tools and a flexible structure for developers to design inclusive applications.

---

## 2. The Importance of Accessibility in React

Accessibility offers moral, practical, and legal benefits:

1. **Inclusion and Equality:** Ensures people with disabilities have equal access to information and services.
2. **Improved User Experience:** An accessible application often provides a better experience for everyone, not just users with disabilities.
3. **Legal Compliance:** Many countries, such as the United States (ADA) and the European Union (EN 301 549), have laws requiring digital products to be accessible.

Failing to follow accessibility guidelines can lead to lawsuits, as seen in cases involving major companies.

---

## 3. Setup and Installation

### Starting a React Application

To set up a new React project, you can use **Create React App**. This provides a starter template you can quickly build upon.

Steps:

1. Open a terminal and run the following command:

   ```bash
   npx create-react-app my-react-app
   cd my-react-app
   npm start
   ```

## 4 Accessibility Configuration

Linting for Accessibility
To detect accessibility issues early, add the eslint-plugin-jsx-a11y to your project. This linting tool warns you about poor accessibility practices.

```bash

  "plugins": ["jsx-a11y"],
  "extends": ["plugin:jsx-a11y/recommended"]

```

### Automated Testing with axe-core

To automate accessibility testing, you can use axe-core. This tool scans your application for accessibility issues and
provides a report on the findings.

```bash
npm install @axe-core/react --save-dev
```

Add this to your application to catch accessibility issues in development:

```bash
import React from "react";
import ReactDOM from "react-dom";
import { axe, toHaveNoViolations } from "@axe-core/react";

if (process.env.NODE_ENV !== "production") {
  axe(React, ReactDOM, 1000);
}
```

## 5. Basic Principles of Accessibility

**Use Semantic HTML**
Semantic HTML tags like **header,** **main**, **article**, and **button** have built-in accessibility benefits. React fully supports this.

## Advanced Techniques and Features

ARIA Attributes
ARIA (Accessible Rich Internet Applications) adds extra semantics to elements that are not accessible by default.

Example of an accessible tab system:

```bash
<div role="tablist" aria-label="Chapters">
  <button role="tab" aria-selected="true">Chapter 1</button>
  <button role="tab">Chapter 2</button>
</div>
```

### Keyboard Navigation

Supporting keyboard navigation is essential. Use the **onKeyDown** handler to manage navigation:

```bash
const handleKeyDown = (event) => {
  if (event.key === "ArrowRight") {
    focusNextTab();
  }
};
```

## 7. Visualizations and Examples

### Diagrams

* **React Accessibility Workflow:** A visual representation of how accessibility fits into a React project.
* **Contrast Check:** Illustrations of color palettes meeting WCAG standards.

## 8. Best Practices

1. **Test Early and Often:** Use tools like axe-core or Lighthouse to continuously check accessibility.
2. **Make Everything Keyboard Accessible:** Ensure all interactive elements are reachable via the keyboard.
3. **Ensure Good Color Contrast:** Use tools like Contrast Checker to verify text readability.
4. **Provide Clear Error Messages:** Assist users by offering specific error messages for invalid inputs.


## 9. Future Updates and Developments
React continues to evolve, and accessibility features are regularly improved. Notable developments include:
* **React 18:** Includes improved accessibility features, such as better support for ARIA attributes.
* **Concurrent Rendering:** Offers smoother user experiences and better support for screen readers.
* **React Server Components:** Improves loading times and enhances accessibility.

## 10. Resources and References
- [React Accessibility Documentation](https://reactnative.dev/docs/accessibility)
- [Making the Web work](https://www.w3.org/WAI/standards-guidelines/wcag/)