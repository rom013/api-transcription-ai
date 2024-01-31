import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { uploudVideoRoute } from "./routes/uploud-video"

const app = fastify()

/* Routes */
app.register(getAllPromptsRoute)
app.register(uploudVideoRoute)

/* Start server in port 3333 */
app.listen({ port: 3333 }).then(()=>console.log("server start"))