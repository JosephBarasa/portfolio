import { useParams } from 'react-router-dom';
import useFetchGeneric from '../hooks/useFetchGeneric'; 

const ViewArt = () => {
    const { id } = useParams();

    const url = `http://localhost:8000/visualArts/${id}`;

    const { data: art, isPending, error } = useFetchGeneric(url);

    return (
        <div className="min-h-screen bg-white flex flex-col items-center justify-center text-gray-700 p-4 mt-5">
            {isPending && <div className="text-xl text-gray-600">Loading art details...</div>}
            {error && <div className="text-xl text-red-600">Error: {error}</div>}

            {art && (
                <div className="text-center">
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">{art.title}</h2>
                    {art.description && <p className="text-lg max-w-2xl">{art.description}</p>}
                </div>
            )}

            {!isPending && !error && !art && (
                <div className="text-xl text-gray-500">No art piece found with this ID.</div>
            )}
        </div>
    );
}

export default ViewArt;