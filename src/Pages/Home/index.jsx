import { useContext } from "react"
import { ShoppingCartContext } from "../../Context";
import Layout from "../../Components/Layout"
import Card from "../../Components/Card";
import ProductDetail from "../../Components/ProductDetail";
import { CardsContain } from "./HomeStyled";
import CardLoading from "../../Components/CardLoading";

function Home() {
    const { items, searchByTitle, setSearchByTitle, filteredItems, loading } = useContext(ShoppingCartContext)
    // If you want to insert a category, do it in pathAndCategory with its respective path. Category filtering does not have a state; it filters using the existing items using the values inserted in pathAndCategory.

    const pathAndCategories = {
        "/clothes": "clothing",
        "/electronics": "electronics",
        "/jewelerys": "jewelery"
    }
    const renderSearch = (items) => {
        if (items?.length > 0) {
            return (
                items?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            )
        }
        else {
            return (
                <div className=" ">No products found matching your search. Please try again with different terms.</div>
            )
        }

    }

    const renderView = (categories) => {
        const areInHome = window.location.pathname === "/"
        const existSearch = searchByTitle?.length > 0;

        //In Home
        if (areInHome) {

            if (existSearch) {
                return (
                    renderSearch(filteredItems)
                )

            }
            return (
                items?.map((item) => (
                    <Card key={item.id} data={item} />
                ))
            )

        }

        //In Categories
        if (!areInHome) {
            //Utils 
            let categoryOfThePath = categories[window.location.pathname];
            let itemsFilterByPath = items?.filter(item => item.category.includes(categoryOfThePath));

            if (searchByTitle?.length === 0) {

                return (
                    itemsFilterByPath?.map((item) => (

                        <Card key={item.id} data={item} />
                    ))
                )
            }
            if (existSearch) {
                return (
                    renderSearch(filteredItems?.filter(item => item.category.includes(categoryOfThePath)))
                )
                //Only returns items that meet the corresponding category.
            }
        }
    }


    return (
        <Layout>
            <div className="flex items-center justify-center relative w-80 mb-4">
                <h1 className="font-medium text-xl">Exclusive Products</h1>

            </div>
            <input type="text"
                placeholder="Search Products"
                className="rounded-lg border border-black w-80 p-4 mb-10 focus:outline-none"
                onChange={(e) => setSearchByTitle(e.target.value)} />
            <CardsContain >
                <>
                    {loading &&
                        <div>
                            <CardsContain>
                                <CardLoading quantity="10"/>
              
                            </CardsContain>

                        </div>

                    }
                    {!loading &&
                        renderView(pathAndCategories)
                    }

                </>
            </CardsContain>
            <ProductDetail />
        </Layout>

    )

}

export default Home
