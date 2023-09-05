import { connectToDatabase } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
  try {
    await connectToDatabase();

    const prompt = await Prompt.find({ tag: params.tag }).populate("creator");

    if (!prompt) return new Response("Prompt not found", { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch prompts", { status: 500 });
  }
};
