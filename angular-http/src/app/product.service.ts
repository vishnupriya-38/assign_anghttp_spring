import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class ProductService {

    myURL ='http://localhost:8080/angularassignment/';

    constructor(private http: HttpClient){
        
    }
    postData(product){
        return this.http.post(`${this.myURL}addProduct`,product);
    }

    getData(){
        return this.http.get<any>(`${this.myURL}getAllProducts`);
    }

    deleteData(product){
        return this.http.delete<any>(`${this.myURL}deleteProduct/${product.productName}`);

    }

    updateData(product){
        return this.http.put<any>(`${this.myURL}updateProduct/${product.productName}`,product);
    }
}