import {AesManager} from "./aesManager";

export async function onRequest(context) {
    if (context.request.method === "POST") {
        try {
            // 解析 JSON 数据
            const body = await context.request.json();
            // 返回包含 user 参数的响应
            const encrypted = AesManager.encrypt(body);
            return new Response(encrypted);
        } catch (error) {
            return new Response("Invalid JSON or Error parsing JSON", { status: 400 });
        }
    }
}