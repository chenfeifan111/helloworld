addEventListener("fetch", (event) => {
    event.respondWith(
        handleRequest(event).catch((err) => {
            return new Response(err.stack, { status: 500 })
        })
    )
})
async function handleRequest(event) {
    let t = await aaa.get('time')
    if(!t || +new Date() - t > 10000){
        await aaa.put('time',+new Date())
        return new Response('empty or too old')
    }else{
        return new Response(t)
    }
}