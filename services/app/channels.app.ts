import {callApi} from "services/callApi";
import {CHANNEL_ENDPOINT} from "services/app/endpoint.constant";

export const getListOfChannel = (filter?: any) => {
  return callApi(CHANNEL_ENDPOINT.GET_LIST, "GET", null)
}