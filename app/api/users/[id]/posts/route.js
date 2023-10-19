import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params}) => {
    try{
        await connectToDB();

       

        const prompts= await Prompt.find({
            creater: params.id
        }).populate('creater');
        return new Response(JSON.stringify(prompts), {
            status:200
        })
    } catch (error) {
        return new Response("failed to fetch all prompts", {status: 500})
    }
}