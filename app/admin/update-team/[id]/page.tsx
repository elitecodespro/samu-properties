"use client"

import { useUser } from '@clerk/nextjs';
import { app } from '../../../../firebase';
import { useEffect, useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import {
    getDownloadURL,
    getStorage,
    ref,
    uploadBytesResumable,
} from 'firebase/storage';

export default function UpdateTeam() {
    const { isSignedIn, user, isLoaded } : any = useUser();
    const [file, setFile] = useState<any>([]);
    const pathname = usePathname();
    const teamId = pathname.split('/').pop();
    const [formData, setFormData] = useState({
        photo: '',
        name: '',
        title: '',
    });

    useEffect(() => {
        const fetchListing = async () => {
          const res = await fetch('/api/teams/get', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              teamId,
            }),
          });
          const data = await res.json();
          if (data.success === false) {
            console.log(data.message);
            return;
          }
          setFormData(data[0]);
        };
        fetchListing();
    }, []);

    const [imageUploadError, setImageUploadError] = useState<any>(false);
    const [uploading, setUploading] = useState(false);
    const [error, setError] = useState<any>(false);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const handleImageSubmit = (e: any) => {
        if (file.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(file[0])
          .then((url: any) => {
            setFormData({
              ...formData,
              photo: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Image upload failed (2 mb max per image)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per team');
          setUploading(false);
        }
    };

    const storeImage = async (file: any) => {
        return new Promise((resolve, reject) => {
          const storage = getStorage(app);
          const fileName = "teams" + new Date().getTime() + file.name;
          const storageRef = ref(storage, fileName);
          const uploadTask = uploadBytesResumable(storageRef, file);
          uploadTask.on(
            'state_changed',
            (snapshot) => {
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              console.log(`Upload is ${progress}% done`);
            },
            (error) => {
              reject(error);
            },
            () => {
              getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                resolve(downloadURL);
              });
            }
          );
        });
    };

    const handleRemoveImage = () => {
        setFormData({
          ...formData,
          photo: '',
        });
    };

    const handleChange = (e: any) => {
        setFormData({
            ...formData,
            [e.target.id]: e.target.value,
        });
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
          if (formData.photo.length < 1)
            return setError('You must upload at least one image');
          setLoading(true);
          setError(false);
          const res = await fetch('/api/teams/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              teamId,
            }),
          });
          const data = await res.json();
          setLoading(false);
          if (data.success === false) {
            setError(data.message);
          }
          router.push(`/admin/teams`);
        } catch (error: any) {
          setError(error.message);
          setLoading(false);
        }
    };

    if (!isLoaded) {
        return (
          <h1 className='text-center text-xl my-7 font-semibold'>Loading...</h1>
        );
    }

    if (!isSignedIn) {
        return (
          <h1 className='text-center text-xl my-7 font-semibold'>
            You are not authorized to view this page
          </h1>
        );
    }

    return (
        <div className='p-5 max-w-4xl mx-auto'>
            <h1 className='text-2xl font-semibold text-center my-7'>
                Update Team Member
            </h1>

            <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
                <div className='flex flex-col gap-4 flex-1'>
                    <input
                        type='text'
                        placeholder='Name'
                        className='border p-3 rounded-lg'
                        id='name'
                        maxLength={62}
                        minLength={10}
                        required
                        onChange={handleChange}
                        value={formData.name}
                    />
                    <input
                        type='text'
                        placeholder='Title'
                        className='border p-3 rounded-lg'
                        id='title'
                        required
                        onChange={handleChange}
                        value={formData.title}
                    />
                </div>

                <div className='flex flex-col flex-1 gap-4'>
                    <p className='font-semibold'>
                        Profile Photo:
                        <span className='font-normal text-gray-600 ml-2'>
                            Profile photo of the team member
                        </span>
                    </p>

                    <div className='flex gap-4'>
                        <input
                            onChange={(e: any) => setFile(e.target.files)}
                            className='p-3 border border-gray-300 rounded w-full'
                            type='file'
                            id='photo'
                            accept='image/*'
                        />

                        <button
                            disabled={uploading}
                            onClick={handleImageSubmit}
                            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
                        >
                            {uploading ? 'Uploading...' : 'Upload'}
                        </button>
                    </div>
                    <p className='text-red-700 text-sm'>
                        {imageUploadError && imageUploadError}
                    </p>

                    {formData.photo.length > 0 && 
                    <div
                        className='flex justify-between p-3 border items-center'
                    >
                        <img
                            src={formData.photo}
                            alt='listing image'
                            className='w-20 h-20 object-contain rounded-lg'
                        />
                        <button
                            type='button'
                            onClick={() => handleRemoveImage()}
                            className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
                        >
                            Delete
                        </button>
                    </div>}

                    <button
                        disabled={loading || uploading}
                        className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
                    >
                        {loading ? 'Updating Team Member...' : 'Update Team Member'}
                    </button>
                    {error && <p className='text-red-700 text-sm'>{error}</p>}
                </div>
            </form>
        </div>
    )
}