class StringHelper {
  static getRoutes(payload) {
    return payload.split('/')[4];
  }

  static getRoutesId(payload) {
    return payload.split('/')[5];
  }

  static getFullRoutes(payload) {
    return `${payload.split('/')[4]}/${payload.split('/')[5]}`;
  }
}

export default StringHelper;
