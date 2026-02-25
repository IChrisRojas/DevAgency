export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    return new Response("Static site is being generated", { status: 200 });
  },
};
