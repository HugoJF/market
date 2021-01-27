import {HeightTransitioner}                          from "../../../components/ui/HeightTransitioner";
import {Calendar, Trash}                             from "react-feather";
import {Skeleton}                                    from "../../../components/ui/Skeleton";
import {Link}                                        from "react-router-dom";
import React                                         from "react";
import {OpeningType}                                 from "../../../models/openings";
import useRelativePath                               from "../../../hooks/useRelativePath";
import {Badge}                                       from "../../../components/ui/Badge";
import {format, isFuture, isPast, isValid, parseISO} from "date-fns";
import {Box}                                         from "../../../components/ui/Box";
import {RotatingArrowRight}                        from "../../../components/ui/RotatingArrowRight";

export type AdminOpeningListItemProps = {
    opening: OpeningType | null;
    expanded: boolean;
    onClick?: (opening: OpeningType) => void;
    onDelete?: (opening: OpeningType) => void;
}

export const AdminOpeningListItem: React.FC<AdminOpeningListItemProps>
    = ({opening, expanded = false, onClick, onDelete}) => {
    const relative = useRelativePath();

    const opensAt = opening && parseISO(opening.opens_at);
    const closesAt = opening && parseISO(opening.closes_at);

    return <Box
        key={opening?.id}
        hoverable={false}
    >
        <HeightTransitioner>
            {/* Product details */}
            <div
                onClick={() => opening && onClick && onClick(opening)}
                className="flex items-center"
            >
                <div className="flex items-center justify-center w-6 mr-4">
                    <Calendar className="text-primary-500"/>
                </div>

                <div className="flex-grow">
                    {/* Header with ID and status */}
                    <div className="flex justify-between">
                        {opening?.id && <h3 className="flex text-lg font-medium">Abertura {opening?.id}</h3>}
                        {!opensAt || !closesAt ? <Skeleton className="w-1/3"/> : null}
                        {opensAt && closesAt && (
                            isPast(opensAt) && isFuture(closesAt) && <Badge>Aberto</Badge>
                            ||
                            isPast(opensAt) && isPast(closesAt) && <Badge color="danger">Fechado</Badge>
                            ||
                            isFuture(opensAt) && isFuture(closesAt) && <Badge color="default">Pendente</Badge>
                        )}
                    </div>

                    {/* Opens at and closes at */}
                    <div className="my-2 flex items-center">
                        <span className="text-gray-700 tracking-tight">
                            {opensAt && isValid(opensAt) ? format(opensAt, 'dd MMM yy') : <Skeleton className="w-24"/>}
                        </span>
                        <span className="mx-4 border-b-2 border-gray-200 border-dashed flex-grow"/>
                        <span className="text-gray-700 tracking-tight">
                            {closesAt && isValid(closesAt) ? format(closesAt, 'dd MMM yy') : <Skeleton className="w-24"/>}
                        </span>
                    </div>

                    {/* Stats */}
                    <ul className="flex items-center justify-center text-sm text-gray-500 tracking-tight">
                        {/* Order datetime */}
                        <li className="text-center">
                            {opening ?
                                `${opening.delivery_count}/${opening.max_delivery_orders} entregas`
                                :
                                <Skeleton className="w-16"/>
                            }
                        </li>

                        {/* Separator */}
                        <span className="mx-2 font-bold text-gray-300">·</span>

                        {/* Order cost */}
                        <li className="text-center">
                            {opening ?
                                `${opening.pickup_count}/${opening.max_pickup_orders} retiradas`
                                :
                                <Skeleton className="w-16"/>
                            }
                        </li>

                        {/* Separator */}
                        <span className="mx-2 font-bold text-gray-300">·</span>

                        {/* Product quantity */}
                        <li className="text-center">
                            {opening?.products ? `${opening.products.length} produtos` : <Skeleton className="w-16"/>}
                        </li>
                    </ul>
                </div>

                {opening && <RotatingArrowRight rotated={expanded}/>}
            </div>

            {/* Reveal menu */}
            {/* This empty div is needed to avoid full unmount causing HeightTransitioner to be unable to animate */}
            <div>
                {expanded && <div className="mt-4 flex divide-x divide-gray-200">
                    {/* View */}
                    <Link
                        to={relative(`/${opening?.id}`)}
                        className="flex justify-center flex-grow items-center py-2 px-5 text-gray-700 font-medium"
                    >
                        Ver
                    </Link>

                    {/* Delete */}
                    <div
                        onClick={() => opening && onDelete && onDelete(opening)}
                        className="flex justify-center flex-grow items-center py-2 px-4 text-red-600 font-medium"
                    >
                        <Trash size={20} className="mr-1 inline"/>
                        Deletar
                    </div>

                    {/* Edit */}
                    <Link
                        to={relative(`/${opening?.id}/editar`)}
                        className="flex justify-center flex-grow items-center py-2 px-5 text-gray-700 font-medium"
                    >
                        Editar
                    </Link>
                </div>}
            </div>
        </HeightTransitioner>
    </Box>

};