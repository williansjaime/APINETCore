import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

    
  async GET(url:string){
    try{        
        // const requestOptions = {
        //   method: 'GET',
        //   headers: { 
        //       'Content-Type': 'application/json',
        //       'Access-Control-Allow-Origin': '*' //
        //   },
        // };
        const data = await fetch(url)
            .then(response => response.json());
        return data;
      } catch (error) {
        return error;
      } 
  }

  async POST(url:string,dataJSON:any[])
  { 
    try{
        const requestOptions = {
          method: 'POST',
          headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:4200'
          },
          body: JSON.stringify(dataJSON)
        };
        const data = await fetch(url, requestOptions)
        .then(response => response.json());
        return data;
    } catch (error) {
      return error;
    }  
  } 

  async DELETE(url:string,dataJSON:any[])
  { 
    try{
        const requestOptions = {
          method: 'DELETE',
          headers: { 
              'Content-Type': 'application/json',
              'Access-Control-Allow-Origin': 'http://localhost:4200'
          },
          body: JSON.stringify(dataJSON)
        };
        const data = await fetch(url, requestOptions)
        .then(response => response.json());
        return data;
    } catch (error) {
      return error;
    }  
  } 
}
