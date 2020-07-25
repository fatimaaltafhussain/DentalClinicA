import { Injectable } from '@angular/core'; 
import { HttpClient } from '@angular/common/http';  
@Injectable({   
  providedIn: 'root' }) 

export class ApiService {    
  constructor(private httpClient: HttpClient) { 

  } 
signup(data){
  return this.httpClient.post('http://localhost:3000/patients/insert',data);
} 
signin(data){
  return this.httpClient.post('http://localhost:3000/users/signin',data);
} 
appointment(data){
  return this.httpClient.post('http://localhost:3000/users/signin',data);
} 
}


// import { Injectable } from '@angular/core';
 
// @Injectable({
//   providedIn: 'root'
// })
// export class ApiService {

//   constructor() { }
// }
