import Link from "next/link";
import { Fragment } from "react";

export default async function PartnerList() {
    let partnerList = null;

    try {
        const result = await fetch(process.env.URL + '/api/partners/get', {
          method: 'POST',
          body: JSON.stringify({
            limit: 9,
            order: 'asc',
          }),
          cache: 'no-store',
        });
        const data = await result.json();
        partnerList = data;
      } catch (error) {
        partnerList = { title: 'Failed to load listing' };
    }

    return (
        <div className="p-5 max-w-4xl mx-auto">
            <h1 className='text-2xl font-semibold text-center my-7'>
                My Partners
            </h1>

            <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-12">
                {partnerList && partnerList.length > 0 && (
                    <Fragment>
                        {partnerList?.map((partner : any) => (
                            <div key={partner._id} className="text-center">
                                <img src={partner.logo} className="w-20 mb-2 inline-block rounded-lg" />
                                <h3 className="text-gray-800 text-xl font-semibold mb-3">{partner.name}</h3>
                                <p className="text-gray-600 text-sm">{partner.description}</p>
                                <div className="flex gap-4 justify-center items-center mt-2">
                                    <Link href={`/admin/update-partner/${partner._id}`} className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">
                                        Edit
                                    </Link>
                                    <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                )}
            </div>
        </div>
    )
}