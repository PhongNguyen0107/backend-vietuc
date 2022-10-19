import {callApi} from "services/callApi";
import {CHANNEL_ENDPOINT} from "services/app/endpoint.constant";
import {ChannelDataModel} from "../../src/models/ChannelsDTO";

export const getListOfChannel = (filter?: any) => {
  return callApi(CHANNEL_ENDPOINT.GET_LIST, "GET", null)
}


export const updateChannelById = (payloadUpdate: ChannelDataModel) => {
  return callApi(CHANNEL_ENDPOINT.UPDATE + payloadUpdate.id, "PUT", payloadUpdate)
}

export const deleteChannelById = (channelId: string) => {
  return callApi(CHANNEL_ENDPOINT.DELETE + channelId, "DELETE", null)
}