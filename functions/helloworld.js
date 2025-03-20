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



// export function onRequest(context) {
//     return handleRequest(context)
// }

// async function handleRequest(context) {
    // try {
    //     const response = await fetch('https://www.feishu.cn/flow/api/trigger-webhook/053dc9679ea562602cbe3c7e792d37ab', {
    //         method: 'POST',
    //         headers: {
    //             'Content-Type': 'application/json; charset=UTF-8',
    //             // 如果需要认证可添加
    //             // 'Authorization': 'Bearer your_token'
    //         },
    //         body: JSON.stringify({
    //             model: "order"
    //         })
    //     });
    //
    //
    //     // 检查HTTP状态码
    //     if (!response.ok) {
    //         throw new Error(`HTTP error! status: ${response.status}`);
    //     }
    //
    //     // 解析飞书响应数据
    //     const data = await response.json();
    //     console.log('Success:', data);
    //
    //     // 返回一个 Cloudflare Worker 响应，包含飞书的响应内容
    //     return new Response(JSON.stringify({ message: JSON.stringify(context.params) }), {
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    //
    // } catch (error) {
    //     console.error('Error:', error);
    //     // 处理错误逻辑并返回错误信息
    //     return new Response(JSON.stringify({ success: false, message: error.message }), {
    //         status: 500,
    //         headers: { 'Content-Type': 'application/json' },
    //     });
    // }
// }


export async function onRequest(context) {
    // 确保处理 POST 请求
    if (context.request.method === "POST") {
        try {
            // 解析 JSON 数据
            const body = await context.request.json();
            const user = body.user;  // 获取 JSON 中的 user 字段

            // 返回包含 user 参数的响应
            return new Response(`Hello ${user}`);
        } catch (error) {
            return new Response("Invalid JSON or Error parsing JSON", { status: 400 });
        }
    }

    // 如果不是 POST 请求，返回方法不允许的响应
    return new Response("Method Not Allowed", { status: 405 });
}