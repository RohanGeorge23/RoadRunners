export class finalService {

    getImages() {
        return fetch('data/finalphotos.json').then(res => res.json())
                .then(d => d.data);
    }
}
    