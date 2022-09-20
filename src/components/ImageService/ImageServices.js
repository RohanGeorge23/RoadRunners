export class PhotoServices {

    getImagess() {
        return fetch('data/onetime.json').then(res => res.json())
                .then(d => d.data);
    }
}
    