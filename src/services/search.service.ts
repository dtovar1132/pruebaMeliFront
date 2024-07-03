import {
  ResponseListProduct,
  ResponseProduct,
} from "@/Models/Response.interface";
import { httpRequest } from "./httpRequest/HttpRequest";

export class SearchService {
  private urlBase = "http://localhost:3002/api/items";

  search = async (query: string) => {
    const response: ResponseListProduct = await httpRequest.get(
      `${this.urlBase}?q=${query}`
    );
    return response;
  };

  product = async (productId: string) => {
    try{
      const response: ResponseProduct = await httpRequest.get(
        `${this.urlBase}/${productId}`
      );
      return response;
    }catch(err){
      return {
        error: true
      }
    } 
    
  };
}
export const searchService = new SearchService();
