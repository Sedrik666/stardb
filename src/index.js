class SwapiService {
    _apiBase_ =  'https://swapi.co/api';

    async getResource(url) {
        const res = await fetch(`${this._apiBase_}${url}`);
        if(!res.ok){
            throw new Error(`Could not fetch ${url}` +
            ` received ${res.status}`)
        }
        const body = await res.json();
        return body;
    };

    async getAllPeople(){
        const res = await this.getResource(`/people/`);
        return res.results;
    }

    getPerson(id){
        return this.getResource(`/people/${id}`);
    }

    async getAllPlanets(){
        const res = await this.getResource(`/planet/`);
        return res.results;
    }

    getPlanet(id){
        return this.getResource(`/planet/${id}`);
    }

    async getAllStarship(){
        const res = await this.getResource(`/starships/`);
        return res.results;
    }

    getStarship(id){
        return this.getResource(`/starships/${id}`);
    }
}

const swapi = new SwapiService();

/*swapi.getAllPeople().then((people) => {
    people.forEach((p) => {console.log(p.name)});
});*/

swapi.getPerson(3).then((p) => {
   console.log(p.name);
});


/*
getResource('https://swapi.co/api/people/121212/')
    .then((body) => {
          console.log(body);
    })
    .catch((err) => {
        console.error('Could not fetch', err);
    });
  */
