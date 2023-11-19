export class CustomClient {


  static async post(path: string, body: any): Promise<any> {
    return await useFetch(getAPIPath(path), {
      method: 'POST',
      body: body,
      headers: this.getHeaders()
    });
  }

  static async get(path: string, body: any): Promise<any> {
    return await useFetch(getAPIPath(path), {
      method: 'GET',
      body: body,
      headers: this.getHeaders()
    });
  }

  static getHeaders(): HeadersInit {
    return { Authorization: 'Bearer ' + "" }
  }
}

export function handleEndOfList<T, S>(
  response_data: T,
  entries: globalThis.Ref<S[]>,
  firstRequest: globalThis.Ref<boolean>) {
  //TODO: handle end of list
  entries.value.push(...response_data.results)
  firstRequest.value = false;
}


export function getAPIPath(path: string): string {
  return `${useRuntimeConfig().public.apiPath}${path}/`
}

export function getPath(path: string): string {
  return `${useRuntimeConfig().public.regularPath}${path}`
}