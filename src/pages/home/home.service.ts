import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class Data {

    jsonData: any;

    constructor() {

        this.jsonData = [
            { "id": 1, "label": "vue", "name": "Prithivi", "age": 25 },
            { "id": 2, "label": "vue1", "name": "Abimanyu", "age": 35 },
            { "id": 3, "label": "vue2", "name": "malliga", "age": 18 },
            { "id": 3, "label": "vue2", "name": "Gowdaman", "age": 20 },
            { "id": 3, "label": "vue2", "name": "Neethi", "age": 45 },
            { "id": 3, "label": "vue2", "name": "abirami1", "age": 24 },
            { "id": 3, "label": "vue2", "name": "abirami2", "age": 37 },
            { "id": 3, "label": "vue2", "name": "Harrish", "age": 21 },
            { "id": 3, "label": "vue2", "name": "Lokesh", "age": 46 },
            { "id": 3, "label": "vue2", "name": "Deepak", "age": 65 },
            { "id": 3, "label": "vue2", "name": "malliga", "age": 57 },
            { "id": 3, "label": "vue2", "name": "malliga", "age": 41 }

        ];
console.log(this.jsonData);
    }

    filterItems(searchTerm) {

        return this.jsonData.filter((item) => {
            return item.name.toLowerCase().includes(searchTerm.toLowerCase());
           
        });

    }

    filterAge(searchAge) {

        return this.jsonData.filter((item) => {
            return item.age;
        
        });

    }

}