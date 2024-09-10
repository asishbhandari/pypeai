# Next.js Landing Page with Contentful

This project is a landing page built with Next.js and integrated with Contentful as a headless CMS. 
The landing page includes various sections such as navigation, hero section, partner companies, and features. 
Each feature listed on the page has a dynamic route that provides more detailed information when clicked.

## Features

- **Next.js Framework**: Utilized for server-side rendering and dynamic routing.
- **Contentful CMS**: Used as the content management system to manage and deliver content for the landing page.
- **Responsive Design**: The landing page is fully responsive and works well across different screen sizes.
- **Dynamic Routes**: Each feature on the landing page links to a dynamically generated route that displays detailed content for that specific feature.

## Contentfull content modal

- **Navbar**: logoname(text) and logoImage(media)
- **Hero Section**: VideoUrl
- **Partner Companies**: companyName(text), companyImage(media)
- **Features**: id(integer), title(text), description(longText), media(image)

## Installation

To get started with the project, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/your-repo-name.git
   cd your-repo-name

2. Install dependencies:

   ```bash
   npm install

3.Set up Contentful:
   Create a .env.local file in the root of your project.
   Add your Contentful space ID and access token:

  CONTENTFUL_SPACE_ID=your_space_id
  CONTENTFUL_ACCESS_TOKEN=your_access_token

4. Run the development server:

   ```bash
   npm run dev

Open http://localhost:3000 with your browser to see the result.
