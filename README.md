# Cryptocurrency Conversion API

This API allows users to convert between different cryptocurrencies and retrieve a list of companies holding specific cryptocurrencies.

## Installation

1. Clone the repository:

```bash
git clone https://github.com/hari134/koinx.git
```

2. Install dependencies:

```bash
cd koinx
npm install
```

3. Start the server:

```bash
npm start
```

The server will start running at `http://localhost:3000`.

**Note:** You need to replace the MongoDB URL in `config/config.json` with your MongoDB Atlas URL.

## API Endpoints

### 1. Convert Cryptocurrencies

#### Request

- **URL:** `/convert`
- **Method:** `POST`
- **Body:**

```json
{
  "fromCurrency": "bitcoin",
  "toCurrency": "ethereum",
  "date": "2024-02-21"
}
```

#### Response

```json
{
  "fromCurrency": "bitcoin",
  "toCurrency": "ethereum",
  "date": "2024-02-21",
  "priceInToCurrency": 10.5
}
```

### 2. Get Companies Holding Cryptocurrency

#### Request

- **URL:** `/getCompanies`
- **Method:** `POST`
- **Body:**

```json
{
  "currency": "bitcoin"
}
```

#### Response

```json
{
  "companies": ["MicroStrategy Inc.", "Galaxy Digital Holdings"]
}
```

## Swagger Documentation

The API endpoints are documented using Swagger. You can access the Swagger UI at `/api-docs` when the server is running.

## Hosting Information

The application is hosted on Amazon EC2 and hosted MongoDB Atlas database is used.

Hosted Server URL - http://54.146.146.197:3000/

## Technologies Used

- Node.js
- Express.js
- Axios
- Swagger

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
