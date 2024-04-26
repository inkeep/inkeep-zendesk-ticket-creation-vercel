import {
  type CreateConversationRequestBody,
  type Message,
  InvalidRequest
} from "./requestSchemaValidation";

function formatItem(label: string, content: string | undefined | null): string {
  return content ? `
    <h4> ${label} </h4>
    <p> ${content} </p>
    <br/>
  ` : "";
}

function formatChatHistory(messages: Message[] | undefined | null): string {
  if (!messages) return "";

  let formattedHistory = "<h4 style='margin-bottom: .4rem;'><u> Chat History </u></h4>";

  for (const message of messages) {
    // Determine if the message is from User or AI Assistant
    if (message.role === "user") {
      formattedHistory += "<h6 style='font-size: .9rem;'> Question </h6>";
    } else {
      formattedHistory += "<h6 style='font-size: .9rem;'> Answer </h6>";
    }

    // Strip footnotes [^1] from the message content
    const cleanContent = message.content ? message.content.replace(/\[\^(\d+)\]/g, '') : '';
    formattedHistory += `<p> ${cleanContent} </p><br/>`;
  }

  return formattedHistory;
}

// Create a conversation with the Zendesk API
export async function createConversationTicket(
  body: CreateConversationRequestBody,
  accessToken: string
) {
  const { formDetails, chatSession, client } = body;

  const hasInitialMessage = chatSession && chatSession.messages.length > 0;
  const subject = hasInitialMessage ? chatSession?.messages[0].content : formDetails.additionalDetails  // subject of the conversation

  if (!subject) throw new InvalidRequest("Please provide at least one user message or additional details");
  const inkeepViewChatUrl = chatSession?.chatSessionId && process.env.INKEEP_CHAT_PREVIEW_ROOT
    ? `${process.env.INKEEP_CHAT_PREVIEW_ROOT}?chatId=${chatSession.chatSessionId}`
    : null;

  const data = JSON.stringify({
  ticket: {
    requester: {
      name: formDetails.firstName,
      email: formDetails.email,
    },
    comment: {
      html_body: `
        ${formatItem("Additional details", formDetails.additionalDetails)}
        ${formatChatHistory(chatSession?.messages)}
        ${formatItem("Inkeep Chat URL", inkeepViewChatUrl)}
        ${formatItem("Client (Interaction Point)", client.currentUrl)}
      `,
      public: false,
    },
    subject
  }
});

  const res = await fetch(`${process.env.ZENDESK_DOMAIN}/api/v2/tickets`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Basic ${accessToken}`, // Include Basic Auth header
    },
    body: data,
  });
  return res;
}