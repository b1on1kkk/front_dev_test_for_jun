export class GetResponseHandler {
  constructor() {}

  public Error() {
    return {
      message: 'Error occured',
      statusCode: 500,
      data: [],
    };
  }

  public Success(data: any) {
    return {
      message: 'Got data successfully!',
      statusCode: 200,
      data: data,
    };
  }
}
