

module.exports = {
    post: {
      tags: ["Cryptocurrency"], // operation's tag.
      description: "Get companies holding a specific cryptocurrency", // operation's desc.
      operationId: "getCompanies", // unique operation id
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              properties: {
                currency: {
                  type: "string",
                  description: "The cryptocurrency to get companies for (bitcoin or ethereum)",
                },
              },
              required: ["currency"],
            },
          },
        },
      },
      // expected responses
      responses: {
        // response code
        200: {
          description: "Successful retrieval", // response desc.
          content: {
            "application/json": {
              schema: {
                type: "object",
                properties: {
                  companies: {
                    type: "array",
                    items: { type: "string" },
                  },
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
  