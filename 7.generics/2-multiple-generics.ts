interface Response2<Message, Extra> {
    type: string
    success: boolean,
    message: Message
    whatever?:Extra
}

let payload3: Response2<string, number> = {
    type: 'post',
    success: true,
    message: 'message'
}

let payload4: Response2<boolean, object> = {
    type: 'error',
    success: false,
    message: true
}