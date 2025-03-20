/**
 * 示例1 post get请求响应
 * {
 * "name": "zs"
 *  "age":18
 * }
 * https://helloworld-5lo.pages.dev/helloworld?name=zs
 * @param context
 * @returns {Promise<Response>}
 */
// export async function onRequest(context) {
//     // 确保处理 POST 请求
//     if (context.request.method === "POST") {
//         try {
//             // 解析 JSON 数据
//             const body = await context.request.json();
//             // const name = body.name;  // 获取 JSON 中的 user 字段
//
//             // 返回包含 user 参数的响应
//             return new Response(`Hello ${JSON.stringify(body)}`);
//         } catch (error) {
//             return new Response("Invalid JSON or Error parsing JSON", { status: 400 });
//         }
//     }else if (context.request.method === "GET") {
//         const url = new URL(context.request.url);  // 获取请求 URL
//         const name = url.searchParams.get('name');  // 提取查询参数 `name`
//
//         // 返回包含 user 参数的响应
//         if (name) {
//             return new Response(name);
//         } else {
//             return new Response("User parameter is missing", { status: 400 });
//         }
//     }
//
//     // 如果不是 POST 请求，返回方法不允许的响应
//     return new Response("Method Not Allowed", { status: 405 });
// }

import {AesManager} from "./aesManager";

/**
 * 示例2. aes加密效果
 * {"sCustomerId":"","sCustomerName":""}
 * @param context
 * @returns {Promise<Response>}
 */
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


/**
 * 原来的飞书测试
 */
// export function onRequest(context) {
//     return handleRequest(context)
// }
//
// async function handleRequest(context) {
//     try {
//         const response = await fetch('https://www.feishu.cn/flow/api/trigger-webhook/053dc9679ea562602cbe3c7e792d37ab', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json; charset=UTF-8',
//                 // 如果需要认证可添加
//                 // 'Authorization': 'Bearer your_token'
//             },
//             body: JSON.stringify({
//                 model: "order"
//             })
//         });
//         console.log(context.params)
//         // 检查HTTP状态码
//         if (!response.ok) {
//             throw new Error(`HTTP error! status: ${response.status}`);
//         }
//
//         // 解析响应数据
//         const data = await response.json();
//         console.log('Success:', data);
//         return data;
//
//     } catch (error) {
//         console.error('Error:', error);
//         // 处理错误逻辑
//         throw error;
//     }
// }
//



