import React, {useState} from 'react';
import {Button} from "../../components/ui/Button";
import {PriceFormatter} from "../../components/ui/PriceFormatter";
import {ImageHolder} from "../../components/ui/ImageHolder";
import {Link} from "react-router-dom";
import {PagePadding} from "../../containers/PagePadding";
import {ProductType} from "../../types/products";
import {ProductQuantityActionMenu} from "../../action-menus/ProductQuantityActionMenu";
import {Trash} from "react-feather";
import useConfirmMenu from "../../hooks/useConfirmMenu";
import useNavigation from "../../hooks/useNavigation";
import {ProductCost} from "../../components/products/helpers/ProductCost";

export type ProductShowProps = {
    product: ProductType;
    quantity: number;
    onQuantityChange: (quantity: number) => void;
    onRemove: () => void;
}

export const ProductShow: React.FC<ProductShowProps> = ({product, quantity, onRemove, onQuantityChange}) => {
    const [adding, setAdding] = useState(false);
    const [menu, confirm] = useConfirmMenu();
    const {go} = useNavigation();

    const total = quantity * (product.quantity_type === 'weight' ? product.weight_increment : 1);
    // TODO: find better pattern
    const text = total === 1 ? (product.unit_name_singular ?? 'unidade') : (product.unit_name_plural ?? 'unidades');

    async function handleOnRemove() {
        if (await confirm({
            title: "Remover do carrinho",
            description: `Deseja remover ${product.name} do carrinho?`,
            action: "Remover",
        })) {
            onRemove();
        }
    }

    function handleOnQuantityChange(quantity: number) {
        onQuantityChange(quantity);
        go('/carrinho');
    }

    function handleOnAdd() {
        setAdding(true);
    }

    function handleOnClose() {
        setAdding(false);
    }

    return <PagePadding className="flex flex-col justify-around min-h-full">
        <ProductQuantityActionMenu
            product={product}
            currentQuantity={quantity}
            onQuantityChange={handleOnQuantityChange}
            open={adding}
            onClose={handleOnClose}
        />

        {menu}

        {/* Images */}
        <div className="lg:px-48 xl:px-64 w-full">
            <ImageHolder
                src={Object.values(product.media_links ?? [])?.[0]}
            />
        </div>

        {/* Description */}
        <div className="mt-8">
            <h2 className="mb-4 text-xl tracking-wide">Descrição</h2>

            {product.description && <p className="px-2 text-sm text-gray-500 leading-4">{product.description}</p>}
            {!product.description && <p className="px-2 text-sm text-gray-500 leading-4">Produto sem descrição.</p>}
        </div>

        {/* Price and quantities */}
        <div className="my-8 flex items-center justify-between">
            <div className="flex items-baseline">
                {/* If cart has any quantity of this product, show the total cost */}
                {!!quantity && <span className="text-xl text-secondary-500 font-medium">
                    <PriceFormatter cents price={product.quantity_cost * quantity}/>
                </span>}

                {/* If cart doesn't contain the product, just show the display format of it */}
                {!quantity && <ProductCost product={product}>
                    {({cost, text}) => <>
                        <span className="text-xl text-secondary-500 font-medium">
                            <PriceFormatter cents price={cost}/>
                        </span>
                        <span className="ml-px text-gray-500">/{text}</span>
                    </>}
                </ProductCost>}
            </div>
            {!!quantity && <div className="flex items-center">
                <div className="mx-4 text-xl font-medium">{total} {text}</div>
            </div>}
        </div>

        {/* Cart controls */}
        <div className="flex justify-between">
            {!!quantity && <Button className="mr-4" color="danger" onClick={handleOnRemove}>
                <Trash/>
            </Button>}

            <Button className="flex-grow" onClick={handleOnAdd}>
                {quantity > 0 ? 'Modificar quantidade' : 'Adicionar ao carrinho'}
            </Button>
        </div>

        {/* Cart warning */}
        {!!quantity && <div className="grid grid-cols-2 items-center my-4 divide-x">
            <Link to="/carrinho" className="py-2 px-2 text-center text-gray-500 text-sm tracking-tight">
                Ver no carrinho
            </Link>

            <Link to="/home" className="py-2 px-2 text-center text-gray-500 text-sm tracking-tight">
                Continuar comprando
            </Link>
        </div>}
    </PagePadding>
};
