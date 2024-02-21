

module.exports = {
    post: {
      tags: ["Cryptocurrency"], // operation's tag.
      description: "Convert cryptocurrencies", // operation's desc.
      operationId: "convertCryptocurrencies", // unique operation id
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                fromCurrency: {
                  type: "string",
                  description: "The cryptocurrency to convert from (e.g., bitcoin)",
                },
                toCurrency: {
                  type: "string",
                  description: "The cryptocurrency to convert to (e.g., ethereum)",
                },
                date: {
                  type: "string",
                  description: "The date for which the conversion rate is requested (format: 'YYYY-MM-DD')",
                },
              },
              required: ["fromCurrency", "toCurrency", "date"],
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "Successful conversion", // response desc.
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  fromCurrency: { type: "string" },
                  toCurrency: { type: "string" },
                  date: { type: "string" },
                  priceInToCurrency: { type: "number" },
                },
              },
            },
          },
        },
        500: {
          description: "Internal Server Error", // response desc.
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  error: { type: "string" },
                },
              },
            },
          },
        },
      },
    },
  };
  