import prisma from "/lib/prisma";
import "./CardPage.css";

export default async function Page({ params }) {
    const { id } = await params; // Получение параметра id из URL
    const cardList = await prisma.card.findMany(); // Получение списка карточек из базы данных

    return (
        <>
            {cardList.map((post) => {
                if (id == post.id) {
                    return (
                        <div className="card-container" key={post.id}>
                            <h2 className="card-title">{post.name}</h2>
                            <p className="card-description">{post.description}</p>
                            <div className="card-image">
                                <img src={post.imageUrl} alt={post.name} />
                            </div>
                        </div>
                    );
                }
                return null; 
            })}
        </>
    );
}
