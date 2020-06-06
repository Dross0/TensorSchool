
class Dataset{
    constructor(params){
        this.options = {
            host: params.host,
            service: params.service
        }
    }

    query(queryPath, params){
        const url = new URL(this.options.host);
        url.pathname += queryPath;
        return fetch(url, params);
    }

    readByID(id){
        return this.query(
            `${this.options.service}/${id}`,
            {method: 'GET'}
        );
    }
}

export default Dataset;