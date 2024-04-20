import { useState, useEffect } from "react"
import Layout from "../../Components/Layout"
import Card from "../../Components/Card/indes"
function Home() {
    const urlAPI = 'https://fakestoreapi.com';
    const [items, setItems] = useState(null)

    useEffect(() => {
        fetch(`${urlAPI}/products`)
            .then(response => response.json())
            .then(data => setItems(data))
            .catch(err=>console.log(err))

    }, [])

    return (
        <Layout>
            Home
            <div className="grid gap-10 grid-cols-4 w-full max-w-screen-lg">
                {
                    items?.map((item) => (
                        <Card key={item.id} data={item} />
                    ))
                }
            </div>

        </Layout>

    )
}

export default Home
