import { fastify } from "fastify"
import { getAllPromptsRoute } from "./routes/get-all-prompts"

const app = fastify()

/* Routes */
app.register(getAllPromptsRoute)

/* Start server in port 3333 */
app.listen({ port: 3333 }).then(()=>console.log("server start"))