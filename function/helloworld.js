export function onRequest(context) {
    return handleRequest()
}

async function handleRequest() {
    try {
        const response = await fetch('https://www.feishu.cn/flow/api/trigger-webhook/053dc9679ea562602cbe3c7e792d37ab', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=UTF-8',
                // 如果需要认证可添加
                // 'Authorization': 'Bearer your_token'
            },
            body: JSON.stringify({
                model: "order"
            })
        });

        // 检查HTTP状态码
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // 解析响应数据
        const data = await response.json();
        console.log('Success:', data);
        return data;

    } catch (error) {
        console.error('Error:', error);
        // 处理错误逻辑
        throw error;
    }
}