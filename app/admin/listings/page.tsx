import ListingItem from "@/components/admin/ListingItem";
import Link from "next/link";

export default async function Listings() {
    let listings = null;

    try {
        const result = await fetch(process.env.URL + '/api/listing/get', {
          method: 'POST',
          body: JSON.stringify({
            type: 'rent',
            limit: 24,
            order: 'asc',
          }),
          cache: 'no-store',
        });
        const data = await result.json();
        listings = data;
      } catch (error) {
        listings = { title: 'Failed to load listing' };
      }

    return (
        <div className="p-5 max-w-4xl mx-auto">
            <div className='max-w-6xl mx-auto p-3 flex flex-col gap-8'>
                {listings && listings.length > 0 && (
                    <div className=''>
                        <div className='my-3'>
                            <h2 className='text-2xl font-semibold text-slate-600 my-4'>
                                My Listings
                            </h2>
                            <Link
                                className='text-sm text-blue-800 hover:underline'
                                href={'/search?type=rent'}
                            >
                                Show more places for rent
                            </Link>
                        </div>
                        <div className='flex flex-wrap gap-4'>
                            {listings.map((listing: any) => (
                                <ListingItem key={listing.id} listing={listing} />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}