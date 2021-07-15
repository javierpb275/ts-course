type Note = {message: string}
type ColoredNote = Note & {color: string}
type Photo = {url: string}
type Video = Photo & {duration: number}

type Publication = Note | ColoredNote | Photo | Video;

//HTTP POST/upload
function upload<Publication, Extra>(p: Publication, e?: Extra): Publication {
    return p;
}

let post: Note = {message: 'hello world'}
let x = upload(post);