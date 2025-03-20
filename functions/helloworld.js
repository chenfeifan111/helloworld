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



export function onRequest(context) {
    return handleRequest(context)
}

async function handleRequest(context) {
    return new Response(`Hello ${context.params}`);
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
}