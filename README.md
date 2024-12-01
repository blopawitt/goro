# Goró

"In Brazilian Portuguese, "goró" is a slang word used to refer to alcoholic beverages (usually vodka, whisky, beer, etc.), but can also mean specifically the "cachaça". It's gender is masculine, so if you want to say that you will have a drink, it could be said as:

Vou tomar um goró.

Or in the plural:

Vou tomar uns gorós."

Goró is a small website where you can choose a cocktail based on flavor and alcohol level. It includes an API for getting and putting drinks, with plans to add authentication and possibly implement ReactJS in the future. The website currently uses Bootstrap for styling.

![Preview Image](https://github.com/blopawitt/goro/blob/master/frontend/public/images/preview.png?raw=true)


## Project Structure
## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/goro.git
    cd goro
    ```

2. Install dependencies:
    ```sh
    npm install
    ```

### Running the Server

1. Start the server:
    ```sh
    node backend/server.js
    ```

2. Open your browser and navigate to `http://localhost:3000`.

## API Endpoints

### Get all drinks

- **URL:** `/api/drinks`
- **Method:** `GET`
- **Response:** JSON array of all drinks

### Get a drink by ID

- **URL:** `/api/drinks/:id`
- **Method:** `GET`
- **Response:** JSON object of the drink with the specified ID

### Add a new drink

- **URL:** `/api/drinks`
- **Method:** `POST`
- **Request Body:** JSON object with `name` and `ingredients`
- **Response:** JSON object of the newly added drink

### Update an existing drink

- **URL:** `/api/drinks/:id`
- **Method:** `PUT`
- **Request Body:** JSON object with `name` and `ingredients`
- **Response:** JSON object of the updated drink

### Delete a drink

- **URL:** `/api/drinks/:id`
- **Method:** `DELETE`
- **Response:** Status 204 if successful

## TODO

- Add authentication to the API
- Implement ReactJS for the frontend

## License

This project is licensed under the MIT License.
