import React                             from 'react';
import {Button}                          from "../../components/ui/Button";
import {useParams}                       from "react-router";
import {useProducts}                     from "../../selectors";
import {PriceFormatter}                  from "../../components/ui/PriceFormatter";
import useCartQuantity                   from "../../hooks/useCartQuantity";
import * as ProductQuantityConfig        from "../../configs/ProductQuantityConfig";
import {QuantityTypes, QuantityTypeText} from "../../components/ui/QuantityTypeText";
import {ImageHolder}                     from "../../components/ui/ImageHolder";

export const ProductShow: React.FC = () => {
    const params = useParams<{ productId: string }>();
    const products = useProducts();

    const productId = parseInt(params.productId);
    const product = products.products[productId];

    type typeKey = keyof typeof ProductQuantityConfig;
    const config = ProductQuantityConfig[product?.quantity_type as typeKey];

    const [text, quantity, add, subtract] = useCartQuantity(productId, config);

    if (!product) return null;

    return <>
        <div className="mx-auto container flex flex-col justify-around min-h-full">
            <div className="lg:px-48 xl:px-64 w-full">
                <ImageHolder
                    src={Object.values(product?.media)?.[0]}
                />
            </div>

            <div className="mt-8">
                <h2 className="mb-4 text-2xl tracking-wide">Descrição</h2>

                <p className="px-2 text-sm text-gray-500 leading-4">{product.description}</p>
            </div>

            <div className="my-8 flex items-center justify-between">
                <div className="flex items-baseline">
                    <span className="text-3xl text-secondary-500 font-medium">
                        <PriceFormatter cents price={product.quantity_cost}/>
                    </span>
                    <span className="ml-px text-gray-500">
                        /
                        <QuantityTypeText
                            type={product.quantity_type as QuantityTypes}
                        />
                    </span>
                </div>
                {quantity && <div className="flex items-center">
                    <div className="mx-4 text-2xl font-medium">{quantity} {text}</div>
                </div>}
            </div>

            {quantity && <p className="pb-2 text-sm text-center text-gray-500 tracking-tight">
                Quantidade de items é atualizada automaticamente.
            </p>}

            {!quantity ?
                <Button onClick={add}>
                    Adicionar ao carrinho
                </Button>
                :
                <div className="grid grid-cols-2 gap-8">
                    <div
                        className="transition-colors duration-150
                            flex justify-center items-center
                            bg-primary-500 hover:bg-primary-600 text-gray-100 text-4xl font-bold
                            shadow rounded-lg cursor-pointer select-none"
                        onClick={subtract}
                    >
                        <span className="pb-1">-</span>
                    </div>
                    <div
                        className="transition-colors duration-150
                            flex justify-center items-center
                            bg-primary-500 hover:bg-primary-600 text-gray-100 text-4xl font-bold
                            shadow rounded-lg cursor-pointer select-none"
                        onClick={add}
                    >
                        <span className="pb-1">+</span>
                    </div>
                </div>
            }
        </div>
    </>
};
