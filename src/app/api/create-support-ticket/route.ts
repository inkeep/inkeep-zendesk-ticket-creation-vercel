import { createConversationTicket } from "./createConversationTicket";
import { type CreateConversationRequestBody, CreateConversationRequestBodySchema, InvalidRequest } from "./requestSchemaValidation";
import { type NextRequest, NextResponse } from "next/server";

export const runtime = "edge"

// get access token
const getAccessToken = async () => {
  // This example uses Zendesk API token authentication mechanism
  const emailAddress = process.env.ZENDESK_EMAIL_ADDRESS;
  const apiToken = process.env.ZENDESK_API_TOKEN;
  const formattedString = `${emailAddress}/token:${apiToken}`;
  
  // Encode the string to base64 as per https://developer.zendesk.com/api-reference/introduction/security-and-auth/#api-token
  const encodedString = Buffer.from(formattedString).toString('base64');
  return encodedString;

};

const originHeaders = {
  "Access-Control-Allow-Origin": "*", // set specific to your clients
  "Access-Control-Allow-Methods": "OPTIONS, POST",
  "Access-Control-Allow-Headers": "Content-Type",
}

export async function OPTIONS(req: NextRequest) {
  return new NextResponse(null, {
    status: 200,
    headers: originHeaders
  });
}

export async function POST(req: NextRequest & CreateConversationRequestBody) {

  try {
    const validatedBody = CreateConversationRequestBodySchema.safeParse(await req.json());
    if (!validatedBody.success) {
      throw new InvalidRequest(`Request schema invalid: ${JSON.stringify(validatedBody.error)}`);
    }
    const body = validatedBody.data;

    const accessToken = await getAccessToken();

    // try creating conversation
    const response = await createConversationTicket(body, accessToken);

    // throw unsuccessful requests
    if (response.status !== 201) {
      throw response;
    }

    // Return success response
    return new NextResponse(null, {
      status: 200,
      statusText: "OK",
      headers: originHeaders
    });
  } catch (error) {
    // Check if user validation error
    if (error instanceof InvalidRequest) {
      return new NextResponse(JSON.stringify({
        error: {
          type: "InvalidRequest",
          message: error.message
        }
      }), {
        status: 400,
        statusText: "Bad Request",
        headers: {
          "Content-Type": "application/json",
          ...originHeaders
        },
      });
    }
    console.error(error);
    return new NextResponse(null, {
      status: 500,
      statusText: "Internal Server Error",
      headers: originHeaders
    });
  }
}
