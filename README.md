## Prerequisites

To run the server, you need to have Node.js and TypeScript installed on your system. Additionally, you need to install the project dependencies by running the command:

```
npm install
```

you need to set the environment variable **PORT** to specify the port number where the server should listen. If **PORT** is not set, the server will default to port `8000`.

## Usage

To start the server, simply run the command `npm start`

## Usage

You can access the API documentation by visiting subfolder `docs/api_doc.md`

## Code Structure

The server code is organized into several modules, including:

- app.ts: the entry point of the Express server
- middlewares/: contains the middleware to perform common operations, such as authentication and error handling
- db/: contains the data entry
- routes/: contains the API route definitions
