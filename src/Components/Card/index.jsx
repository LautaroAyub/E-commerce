import { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import AddIcon from '../../Icons/AddIcon';


const Card = (data) => {



    ///Data
    //Pull context
    const { count, setCount, openProductDetail, toggleCheckoutSideMenu, isProductDetailOpen,isCheckoutSideMenuOpen, setProductToShow, setCartProducts, cartProducts } = useContext(ShoppingCartContext)
    // Shortcuts for easier access to the data
    const category = data.data.category;
    const urlImage = data.data.image;
    const productName = data.data.title;
    const price = data.data.price;


    //utils
    const showProduct = (productDetail) => {
        {
           if(isCheckoutSideMenuOpen){
               toggleCheckoutSideMenu()
               openProductDetail()
           }
           else{
            openProductDetail()
            setProductToShow(productDetail)
           }
            

        }
    }


    const addProductsToCart = (e, product) => {
        e.stopPropagation();
        setCount(count + 1)

        const idsInCart = cartProducts.map((element) => (element.id))
        const isIdExisting = idsInCart.includes(product.id)

        const indexProduct = cartProducts.findIndex(element => element.id === product.id)

        console.log(indexProduct, "index")

        if (!isIdExisting) {
            product.quantity = 1;
            setCartProducts([...cartProducts, product])


        }
        else {
            const updatedCartProducts = [...cartProducts];
            updatedCartProducts[indexProduct].quantity += 1;
            setCartProducts(updatedCartProducts);


            // const updatedCartProducts = cartProducts.map((item, index) =>
            //     index === indexProduct ? { ...item, quantity: item.quantity + 1 } : item
            // );
            // setCartProducts(updatedCartProducts);



        }



        // console.log(cartProducts," CART PRODUCTS")

    }


    return (

        <div onClick={() => showProduct(data.data)} className='bg-white cursor-pointer w-56 h-60 rounded-lg'>
            <figure className='relative mb-2 w-full h-4/5'>

                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-1 px-3 py-0.5' >{category}</span>
                <img className='w-full h-full object-contain rounded-lg' src={urlImage} alt='headphones' />
                <div className='absolute top-0 right-0 flex justify-center
                items-center bg-white w-5 h-5 rounded-full text-lg p-0 m-1'
                    onClick={(e) => {

                        addProductsToCart(e, data.data)
                    }}>

                    <AddIcon h="3" w='3' bg='' />


                </div>

            </figure>

            <p className='flex justify-between items-center'>
                <span className='text-sm font-light truncate mr-2'>{productName}</span>
                <span className='text-lg font-medium'>${price}</span>
            </p>
        </div>
    )
}
export default Card