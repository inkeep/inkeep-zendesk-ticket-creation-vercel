# Inkeep to Zendesk Create Ticket Example

## Getting Started

### From Scratch
Clone this repository:

```bash
git clone https://github.com/inkeep/inkeep-zendesk-ticket-creation-with-vercel
```

Setup dependencies:

```bash
npm install
```

Copy the example env file to make a `.env.development.local` for local development.

```bash
cp .env.example .env.development.local
```

### Add to an existing project

If you'd like to add an API route to an existing Next.js project:
1. Copy the files under `api/create-support-ticket` into your own API route.
2. Install deps via `pnpm add @vercel/edge-config zod`
3. Follow the rest of these instructions to get the .env variables you need

You will need to provide values for all env variables shown in .env.example:

```
INKEEP_CHAT_PREVIEW_ROOT="<INKEEP_CHAT_PREVIEW_ROOT>" # instructions below in README
ZENDESK_DOMAIN="<ZENDESK_DOMAIN>" # Your zendesk domain
ZENDESK_EMAIL_ADDRESS="<EMAIL_OF_VALID_USER_TO_SUBMIT_TICKETS" # needs to be a valid user
ZENDESK_API_TOKEN="<ZENDESK_API_TOKEN>" # See below for instructions on how to create an API token
```

### Create Zendesk API Token

#### How to Generate Zendesk API Token in Inkeep


#### Login to your Zendesk Dashboard
Usually you have a specific subdomain such as https://<your-company-name>.zendesk.com/


#### 1. Click on the Settings Gear icon (Admin)
![Step 1 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/b20da51d-69d4-4afc-8669-a5411a2de2ad/8cef8a63-36da-4a0d-8c85-e5975e692619.png?crop=focalpoint&fit=crop&fp-x=0.0292&fp-y=0.3881&fp-z=2.7109&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=10&mark-y=326&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xNzAmaD0xNTAmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


#### 2. Click on Go to Admin Center

API Tokens can only be created from within the Admin Center

![Step 2 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/12fab057-3ae6-4308-9e8d-a0fa7e8c7a0b/e8680be4-182d-4a08-aa65-aa74ededf1db.png?crop=focalpoint&fit=crop&fp-x=0.3594&fp-y=0.2095&fp-z=2.4084&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=434&mark-y=374&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zMzMmaD01NSZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


#### 3. Click on Apps and integrations
![Step 3 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/4ece5c1b-4d74-4464-a453-14d129239004/78317b76-bfce-41a0-bd15-3aa39709ae3a.png?crop=focalpoint&fit=crop&fp-x=0.1010&fp-y=0.5695&fp-z=2.0167&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=7&mark-y=346&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz00NzQmaD0xMTImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


#### 4. Click on Zendesk API
![Step 4 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/581eed33-787b-4977-b5b6-819062dcfeab/586ac00e-91f1-40be-8faf-e4154b08b300.png?crop=focalpoint&fit=crop&fp-x=0.1075&fp-y=0.7153&fp-z=2.2738&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=103&mark-y=362&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zODEmaD04MCZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


#### 5. Click on Add API token

If you don't see "Add API token" be sure to enable Token access via the toggle switch.

![Step 5 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/302a38bd-cde7-4821-993f-a958468cb78a/4b90a039-812c-4218-96f6-bfeab0d41d4c.png?crop=focalpoint&fit=crop&fp-x=0.8848&fp-y=0.5006&fp-z=2.8908&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=609&mark-y=348&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zODQmaD0xMDcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


#### 6. Give the API token a name you will remember such as "Inkeep Ticket Creation"
![Step 6 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/7f4c1a24-ec87-4967-9f1d-5dcf7cae713e/ba7a2fbd-46e5-4ed4-978d-e63462c50213.png?crop=focalpoint&fit=crop&fp-x=0.5952&fp-y=0.5936&fp-z=1.3925&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=76&mark-y=371&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0xMDQ3Jmg9NjImZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


#### 7. Click on Copy
![Step 7 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/cbe02d75-8980-4cb1-8b70-61104bc64c35/19732f6d-d979-46e7-a189-f62210a34790.png?crop=focalpoint&fit=crop&fp-x=0.5000&fp-y=0.5000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=1001&mark-y=566&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTQlMkNGRjc0NDImdz04OSZoPTQ0JmZpdD1jcm9wJmNvcm5lci1yYWRpdXM9MTA%3D)


#### 8. Make sure to copy and store this token. It won't be shown again after you click Save or leave this page.
![Step 8 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/ac3127b3-3278-41ef-95ba-4c8e4e8eb0b2/82ed5d4d-2179-41df-bebe-af2fa8736506.png?crop=focalpoint&fit=crop&fp-x=0.5561&fp-y=0.7755&fp-z=1.4300&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=162&mark-y=529&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz04NzYmaD0zMyZmaXQ9Y3JvcCZjb3JuZXItcmFkaXVzPTEw)


#### 9. Click on Save
![Step 9 screenshot](https://images.tango.us/workflows/b8be3acb-ff91-4ad0-b539-b8f5ec6a3c22/steps/5dde2a83-c258-4212-aab2-ef3d92d70b67/54efcbad-ac46-48f3-8c32-9f31979c565b.png?crop=focalpoint&fit=crop&fp-x=0.8721&fp-y=0.8588&fp-z=4.0000&w=1200&border=2%2CF4F2F7&border-radius=8%2C8%2C8%2C8&border-radius-inner=8%2C8%2C8%2C8&blend-align=bottom&blend-mode=normal&blend-x=0&blend-w=1200&blend64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL21hZGUtd2l0aC10YW5nby13YXRlcm1hcmstdjIucG5n&mark-x=425&mark-y=313&m64=aHR0cHM6Ly9pbWFnZXMudGFuZ28udXMvc3RhdGljL2JsYW5rLnBuZz9tYXNrPWNvcm5lcnMmYm9yZGVyPTYlMkNGRjc0NDImdz0zNTAmaD0xNzcmZml0PWNyb3AmY29ybmVyLXJhZGl1cz0xMA%3D%3D)


#### 10. Set the environment variable on your deployed Vercel function ZENDESK_API_TOKEN to the value you have just copied.

<br/>


## Inkeep Preview URL (optional)
If you'd like to attach a link to the Inkeep Dashboard view of the AI-chat for reference, then set the following:
```
INKEEP_CHAT_PREVIEW_ROOT=https://portal.inkeep.com/<ORG_ALIAS>/projects/<PROJECT_ID>/chat/sandbox
```
This will be added as an internal-facing note to the supprot conversation.

## Run locally
```
npm dev
```

## API Routes
`/api/create-support-ticket` - Create a new ticket in your inbox.

See the [Zendesk Tickets API](https://developer.zendesk.com/api-reference/ticketing/introduction/) for full customization.


### Example Request

Note that the request is generated by your client side, please validate that the types and request body align. 

There's an example Zod validation and types in `api/create-support-ticket/requestSchemaValidation.ts`. Validation should be optimistic.

```JSON
{
  "formDetails": {
    "firstName": "John",
    "email": "j@domain.com",
    "additionalDetails": "Would like to change my password, please."
  },
  "chatSession": {
    "messages": [
      {
        "role": "user",
        "content": "How do I change my password?"
      },
      {
        "role": "assistant",
        "content": "Sorry, I wasn't able to find information about that. Please reach out to support."
      }
    ],
    "chatSessionId": "12345"
  },
  "client": {
    "currentUrl": "https://example.com/help"
  }
}
```