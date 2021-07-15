interface PostI {
    id: number
}

interface NoteI extends PostI {
    message: string
}

interface ColoredNoteI extends NoteI {
    color: string
}

interface PhotoI extends PostI {
    url: string
}

interface VideoI extends PhotoI {
    duration: number
}

//HTTP POST/upload
function upload2<Publication2 extends PostI, Extra2>(p: Publication2, e?: Extra2): Publication2 {
    return p;
}

let post2: NoteI = { id:0, message: 'hello world'}
let y = upload(post2)