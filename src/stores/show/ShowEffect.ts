import { AxiosResponse } from 'axios';
import environment from 'environment';
import ShowResponseModel from './models/show/ShowResponseModel';
import HttpErrorResponseModel from '../../models/HttpErrorResponseModel';
import HttpUtility from '../../utilities/HttpUtility';
import ShowModel from './models/ShowModel';
import EpisodeModel from './models/EpisodeModel';
import CastModel from './models/CastModel';

export default class ShowEffect {
  private static _http = new HttpUtility();

  public static async requestShow(showId: string): Promise<ShowModel | HttpErrorResponseModel> {
    const endpoint: string = environment.api.shows.replace('{showId}', showId);
    const response: AxiosResponse | HttpErrorResponseModel = await ShowEffect._http.get(endpoint);

    if (response instanceof HttpErrorResponseModel) {
      return response;
    }

    return new ShowModel(response.data);
  }

  public static async requestEpisodes(showId: string): Promise<EpisodeModel | HttpErrorResponseModel> {
    const endpoint: string = environment.api.episodes.replace('{showId}', showId);
    const response: AxiosResponse | HttpErrorResponseModel = await ShowEffect._http.get(endpoint);

    if (response instanceof HttpErrorResponseModel) {
      return response;
    }

    return response.data.map((json: Partial<EpisodeModel>) => new EpisodeModel(json));
  }

  public static async requestCast(showId: string): Promise<CastModel | HttpErrorResponseModel> {
    const endpoint: string = environment.api.cast.replace('{showId}', showId);
    const response: AxiosResponse | HttpErrorResponseModel = await ShowEffect._http.get(endpoint);

    if (response instanceof HttpErrorResponseModel) {
      return response;
    }

    return response.data.map((json: Partial<CastModel>) => new CastModel(json));
  }
}