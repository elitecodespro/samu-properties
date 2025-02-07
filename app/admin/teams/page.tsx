import Link from "next/link";
import { Fragment } from "react";

export default async function TeamList() {
    let teamList = null;

    try {
        const result = await fetch(process.env.URL + '/api/teams/get', {
          method: 'POST',
          body: JSON.stringify({
            limit: 9,
            order: 'asc',
          }),
          cache: 'no-store',
        });
        const data = await result.json();
        teamList = data;
      } catch (error) {
        teamList = { title: 'Failed to load listing' };
    }
    
    return (
        <div className="p-5 max-w-4xl mx-auto">
            <h1 className='text-2xl font-semibold text-center my-7'>
                My Team
            </h1>

            <div className="grid sm:grid-cols-3 gap-8 max-sm:justify-center mt-12 max-sm:max-w-xs mx-auto">
                {teamList && teamList.length > 0 && (
                    <Fragment>
                        {teamList?.map((team : any) => (
                            <div key={team._id} className="bg-gray-800 p-4 border rounded-lg">
                                <img src={team.photo} className="w-full object-contain object-top rounded-lg" />

                                <div className="text-center mt-4">
                                    <h4 className="text-base font-semibold text-white">{team.title}</h4>
                                    <p className="text-xs mt-2 text-white">{team.name}</p>
                                    <div className="flex gap-4 justify-center items-center mt-2">
                                        <Link href={`/admin/update-team/${team._id}`} className="p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80">Edit</Link>
                                        <button className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'>
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Fragment>
                )}

            </div>
        </div>
    )
}