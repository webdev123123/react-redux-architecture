import __model__ResponseModel from './models/__model__(kebabCase)/__model__ResponseModel';
import __store__Effect from './__store__Effect';

export type __store__ActionUnion = void | HttpErrorResponseModel | __model__ResponseModel;

export default class __store__Action {
  public static readonly REQUEST___model__(constantCase): string = '__store__Action.REQUEST___model__(constantCase)';
  public static readonly REQUEST___model__(constantCase)_FINISHED: string = '__store__Action.REQUEST___model__(constantCase)_FINISHED';

  public static request__model__(): any {
    return ActionUtility.createThunkEffect<__model__ResponseModel>(__store__Action.REQUEST___model__(constantCase), __store__Effects.request__model__);
  }

  public static request__model__Alt(): any {
    return async (dispatch: ReduxDispatch<__store__ActionUnion>, getState: () => IStore) => {
      dispatch({type: __store__Action.REQUEST___model__(constantCase)});

      const model: __model__ResponseModel | HttpErrorResponseModel = await __store__Effects.request__model__();

      dispatch({
        type: __store__Action.REQUEST___model__(constantCase)_FINISHED,
        payload: model,
        error: model instanceof HttpErrorResponseModel,
      });
    };
  }

}
