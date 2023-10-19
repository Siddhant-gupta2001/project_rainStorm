import Prompt from '@models/prompt';
import { connectToDB } from "@utils/database";


export const GET = async (request) => {
    try{
        await connectToDB();

        const prompts= await Prompt.find({}).populate('creater');
        return new Response(JSON.stringify(prompts), {
            status:200
        })
    } catch (error) {
        return new Response("failed to fetch all prompts", {status: 500})
    }
}