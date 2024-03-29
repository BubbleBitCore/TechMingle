# TechMingle 

This repository contains the frontend codebase for TechMingle, a platform that includes features like podcasts, articles, books, jobs, etc.

## Table of Contents

- [Getting Started](#getting-started)
- [Folder Structure](#folder-structure)
  - [Assets](#1-assets)
  - [App](#2-app)
  - [Constants](#3-constants)
  - [Components](#4-components)
  - [Pages](#5-pages)
  - [Api](#5-apis)
- [Contributing](#contributing)
- [License](#license)

## Getting Started

Install and Include any prerequisites or dependencies that need to be installed beforehand.

To run the project locally, follow these steps:

1. Install all prerequesites:

```bash
npm install
```
2. Run Project:

```bash
npm start
```

``Note:`` Environment variables in future will be stored in <span style="font-weight:bold;color:deepskyblue;">.env</span> file. Ask the administrator to furnish the contents of the .env file.

## Folder Structure

```
TechMingle/
│
├── index.js
│
│
├── App.jsx
│
src/
├── api/
| ├── auth.js
| ├── podcast.js
├── app/
| ├── store.js
├── assets/
| ├── images/
| ├── other_assets/
  .
├── components/
| ├── Podcast/
| |  ├── SkeletonList.js
| ├── AppWrapper.jsx
| ├── MobileSidebar.jsx
| ├── Navigation.jsx
  .
  .
├── constants/
| ├── homeSection.js
| ├── navigation.js
  .
  .
├── pages/
| ├── Articles.jsx
| ├── Books.jsx
| ├── Clubs.jsx
| ├── Gaming.jsx
| ├── Home.jsx
| ├── Jobs.jsx
| ├── Podcasts.jsx
  .
  .
├── slices/
| ├── auth.js/
| ├── podcast.js/
```

### 1. Assets
   - Contains folders for images and other assets used throughout the project.

### 2. App
   - Contains the main store configuration file (`store.js`) where all reducers are declared.

### 3. Constants
   - Contains files defining constants used in the project, such as navigation constants and home section constants.

### 4. Components
   - Contains reusable React components used across different pages.
   - `AppWrapper/` is a basic template for all pages.

### 5. Pages
   - Contains page-level components, each representing a different section of the application.
   - Example pages include `Home/`, `Article/`, etc.

### 6. Apis
   - Contains all apis regarding pages.


## Contributing

We Encourage you to contribute to our project. Following are the guidelines to contribute.

1. Fork the project
2. Create New Branch (`git branch -b new_feature`)
3. Write/Edit Code
4. Stage Changes (`git add filepath`)
5. Commit your changes (`git commit -m 'Added some AmazingFeature'`)
6. Push to the feature branch (`git push origin new_feature`)
7. Open a pull request
8. Wait for review and code merge
9. After Successfull merge , always pull the latest updates/changes from the original repo (`git pull`)

## License

This project is licensed under the [MIT License](#).
