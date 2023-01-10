import data from './dataset.json'

export default function handler(_request, response) {   
    response.status(200).json(data);
}