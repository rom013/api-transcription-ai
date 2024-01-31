import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploudVideoRoute } from "./routes/uploud-video"
import { createTranscriptionRoute } from "./routes/create-transcription"
import { generateAICompietionRoute } from "./routes/generate-ai-compietion"
import { fastifyCors } from "@fastify/cors"

const app = fastify()
app.register(fastifyCors, {
    origin: '*'
})

/* Routes */
app.register(getAllPromptsRoute)
app.register(uploudVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompietionRoute)

/* Start server in port 3333 */
app.listen({ port: 3333 }).then(() => console.log("server start"))