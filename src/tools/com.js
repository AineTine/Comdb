// 渲染器和主进程通信封装

// 向主进程发送消息，不接受返回（仅渲染器可用）
function send2MS(data) {

}
// 向主进程发送消息，等待接受其返回（仅渲染器可用）
function send2M(data, func) {

}
// 向渲染器发送消息，不接受返回（仅主线程可用）
function send2ES(data) {

}
// 向渲染器发送消息，等待接受其返回（仅主线程可用）
function send2E(data, func) {

}
// 向外开放接口
export default {
    send2E,
    send2ES,
    send2M,
    send2MS
}