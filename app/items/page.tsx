import Link from "next/link"

export default function Page() {
    const itemList = [
        {
            name: "milk",
            description: "white liquid",
            units: "L"
        },
        {
            name: "orange juice",
            description: "orange liquid",
            units: "L"
        },
        {
            name: "tortillas",
            description: "flat corn bread",
            units: "Pq"
        }
    ]
    return (
        <main>
            <Link href="/">Back</Link>
            <h1>Item List</h1>
            <ul>
                {itemList.map((item) => { return (<li key={item.name} >{item.name}</li>) })}
            </ul>
            <Link href="/newItem">New Item</Link>
        </main>
    )
}