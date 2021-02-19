import React       from "react";
import {useParams} from "react-router";
import {OrderDone} from "./OrderDone";
import {Loading}   from "../../components/ui/Loading";
import {useOrder}  from "../../queries/useOrder";

export const OrderDoneContainer: React.FC = () => {
    const params = useParams<{ orderId: string }>();

    const {status, data, error, isFetching} = useOrder(params.orderId);

    if (!data) {
        return <Loading/>
    }

    const order = data.data.data;
    const opening = order.opening;
    const address = order.address;

    return <OrderDone
        order={order}
        opening={opening}
        address={address}
    />
};
