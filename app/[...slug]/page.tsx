

export default function Page() {
    return (
        <div>
            <h1>Page</h1>
        </div>
    )
}

export async function generateStaticParams() {
    return [
        { slug: ['electronics', '1'] }, // -> /products/electronics/1,
        { slug: ['clothing', '2'] },  // -> /products/clothing/2,
        { slug: ['books', '3'] }  // -> /products/books/3
        // ...
    ];
}