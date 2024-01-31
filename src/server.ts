import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploudVideoRoute } from "./routes/uploud-video"
import { createTranscriptionRoute } from "./routes/create-transcription"

const app = fastify()

/* Routes */
app.register(getAllPromptsRoute)
app.register(uploudVideoRoute)
app.register(createTranscriptionRoute)

/* Start server in port 3333 */
app.listen({ port: 3333 }).then(()=>console.log("server start"))