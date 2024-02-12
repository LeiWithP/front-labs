# Front Labs

Frontend project made with React and typescript of a Web App to manage reviews

## Features

- **React**: Utilizes the React library for building user interfaces.
- **TypeScript**: Adds static typing to JavaScript to enhance development experience and catch errors early.
- **Prettier**: Formats code automatically to maintain consistent coding styles.

## Getting Started

1. Clone the repository:

   ```bash
   git clone https://github.com/LeiWithP/front-labs.git
   ```

2. Navigate to the project directory:

   ```bash
   cd front-labs
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

   The application will be running at [http://localhost:5173](http://localhost:5173).

## Important Details

1. The project is setup to run in the local port 5173, in case of that port not being available the server will search for an available one. Check the returned port before opening it

2. The backend of the project is hardcoded in the file [src/hooks/useReviews.tsx] and can be edited just by changing the variable REVIEWS_URL at the top of the file. Check that the backend project is running in the same location as that variable

## Folder Structure

```
front-labs/
  ├── public/              # Static assets and HTML template
  ├── src/                 # Application source code
  │   ├── components/      # Reusable React components
  │   ├── hooks/           # Reusable React custom hooks
  │   ├── providers/       # Context Providers
  │   ├── App.css          # Main application styles
  │   ├── App.tsx          # Main application component  
  │   ├── index.css        # Styles for the entry point
  │   ├── main.tsx         # Entry point of the application  
  │   ├── types.d.ts       # Main TypeScript interface structures
  │   ├── vite-env.d.ts    # TypeScript declaration file for Vite
  ├── .eslintrc.cjs        # ESLint configuration
  ├── .gitignore           # Specifies intentionally untracked files to ignore
  ├── index.html           # Main HTML element
  ├── package-lock.json    # Dependency lock file
  ├── package.json         # Project dependencies and scripts
  ├── README.md            # Project documentation
  ├── tsconfig.json        # TypeScript configuration
  ├── tsconfig.node.json   # TypeScript configuration for Node.js
  └── vite.config.ts       # Vite configuration
```
