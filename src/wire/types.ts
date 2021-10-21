import { ContainerType, ByteVector, ByteVectorType, BigIntUintType, UnionType, NumberUintType } from "@chainsafe/ssz";

// Subnetwork IDs
export const StateNetworkId = Uint8Array.from([0x50, 0x0A])
export const HistoryNetworkId = Uint8Array.from([0x50, 0x0B])
export const TxGossipNetworkId = Uint8Array.from([0x50, 0x0C])
export const HeaderGossipNetworkId = Uint8Array.from([0x50, 0x0D])
export const CanonIndicesNetworkId = Uint8Array.from([0x50, 0x0E])

// Wire Protocol Message Codes
export enum MessageCodes {
    PING = 0x01,
    PONG = 0x02,
    FINDNODES = 0x03,
    NODES = 0x04,
    FINDCONTENT = 0x05,
    CONTENT = 0x06,
    OFFER = 0x07,
    ACCEPT = 0x08
}

export interface PingMessage {
    enr_seq: Uint8Array
    custom_payload: ByteVector
}

export const PingPongMessageType = new ContainerType({
    fields: {
        enr_seq: new NumberUintType({ byteLength: 64 }),
        custom_payload: new ByteVectorType({ length: 2048 })
    }
})


export const MessageType = new UnionType({ types: [PingPongMessageType] })

export const StateNetworkCustomDataType = new ContainerType({
    fields: {
        data_radius: new BigIntUintType({ byteLength: 256 })
    }
})

