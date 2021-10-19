import { ByteVectorType, Number64UintType } from "@chainsafe/ssz";
export declare enum SubNetwork {
    state = 20490,
    history = 20491,
    txGossip = 20492,
    headerGossip = 20493,
    canonIndices = 20494
}
export declare enum MessageType {
    PING = 1,
    PONG = 2,
    FINDNODES = 3,
    NODES = 4,
    FINDCONTENT = 5,
    CONTENT = 6,
    OFFER = 7,
    ACCEPT = 8
}
export declare type PingMessageType = {
    enr_seq: Number64UintType;
    custom_payload: ByteVectorType;
};
export interface PongMessage {
    selector: MessageType.PONG;
    pong: any;
}
//# sourceMappingURL=types.d.ts.map