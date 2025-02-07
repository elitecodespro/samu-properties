"use client"

import { app } from '../../../../firebase';
import { useUser } from "@clerk/nextjs";
import { getDownloadURL, getStorage, ref, uploadBytesResumable } from "firebase/storage";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function UpdateHome() {
    const { isSignedIn, user, isLoaded } : any = useUser();
    const [heroFile, setHeroFile] = useState<any>([]);
    const [aboutFile, setAboutFile] = useState<any>([]);
    const [partnerLogoFile, setPartnerLogoFile] = useState<any>([]);
    const [partnerBgFile, setPartnerBgFile] = useState<any>([]);
    const [teamBgFile, setTeamBgFile] = useState<any>([]);
    const [blogBgFile, setBlogBgFile] = useState<any>([]);
    const [contactBgFile, setContactBgFile] = useState<any>([]);
    const pathname = usePathname();
    const settingId = pathname.split('/').pop();
    const [formData, setFormData] = useState({
        heroTitle: '',
        heroSubTitle: '',
        heroButtonTitle: '',
        heroBackgroundImage: '',
        aboutTitle: '',
        aboutBackgroundImage: '',
        aboutDescription: '',
        missionTitle: '',
        missionDescription: '',
        vissionTitle: '',
        vissionDescription: '',
        mainPartnerSectionLogo: '',
        mainPartnerSectionTitle: '',
        mainPartnerSectionDescription: '',
        mainPartnerSectionBackgroundImage: '',
        recentOffersSectionTitle: '',
        recentOffersSectionButton: '',
        recentRentSectionTitle: '',
        recentRentSectionButton: '',
        recentSaleSectionTitle: '',
        recentSaleSectionButton: '',
        teamSectionTitle: '',
        teamBackgroundImage: '',
        blogsSectionTitle: '',
        blogsSectionSubTitle: '',
        blogsSectionBackgroundImage: '',
        contactSectionTitle: '',
        contactSectionSubTitle: '',
        contactSectionBackgroundImage: '',
    });

    useEffect(() => {
        const fetchListing = async () => {
            const res = await fetch('/api/settings/get', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                settingId,
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

    const handleHeroImageSubmit = (e: any) => {
        if (heroFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(heroFile[0], "hero")
          .then((url: any) => {
            setFormData({
              ...formData,
              heroBackgroundImage: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Hero Background Image upload failed (2 mb max per Hero Background)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Hero Background');
          setUploading(false);
        }
    };

    const handleAboutImageSubmit = (e: any) => {
        if (aboutFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(aboutFile[0], "about")
          .then((url: any) => {
            setFormData({
              ...formData,
              aboutBackgroundImage: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('About Background Image upload failed (2 mb max per About Background)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per About Background');
          setUploading(false);
        }
    };

    const handlePartnerLogoImageSubmit = (e: any) => {
        if (partnerLogoFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(partnerLogoFile[0], "partnerlogo")
          .then((url: any) => {
            setFormData({
              ...formData,
              mainPartnerSectionLogo: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Partner Logo Image upload failed (2 mb max per Partner Logo)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Partner Logo');
          setUploading(false);
        }
    };

    const handlePartnerBgImageSubmit = (e: any) => {
        if (partnerBgFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(partnerBgFile[0], "partnerbg")
          .then((url: any) => {
            setFormData({
              ...formData,
              mainPartnerSectionBackgroundImage: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Partner Background Image upload failed (2 mb max per Partner Background)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Partner Background');
          setUploading(false);
        }
    };

    const handleTeamBgImageSubmit = (e: any) => {
        if (teamBgFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(teamBgFile[0], "teambg")
          .then((url: any) => {
            setFormData({
              ...formData,
              teamBackgroundImage: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Team Background Image upload failed (2 mb max per Team Background)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Team Background');
          setUploading(false);
        }
    };

    const handleBlogBgImageSubmit = (e: any) => {
        if (blogBgFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(blogBgFile[0], "blogbg")
          .then((url: any) => {
            setFormData({
              ...formData,
              blogsSectionBackgroundImage: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Blog Background Image upload failed (2 mb max per Blog Background)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Blog Background');
          setUploading(false);
        }
    };

    const handleContactBgImageSubmit = (e: any) => {
        if (contactBgFile.length > 0) {
          setUploading(true);
          setImageUploadError(false);
          storeImage(contactBgFile[0], "contactBg")
          .then((url: any) => {
            setFormData({
              ...formData,
              blogsSectionBackgroundImage: url,
            });
            setImageUploadError(false);
            setUploading(false);
          })
          .catch((err) => {
            setImageUploadError('Contact Background Image upload failed (2 mb max per Contact Background)');
            setUploading(false);
          });
            
        } else {
          setImageUploadError('You can only upload 1 photo per Contact Background');
          setUploading(false);
        }
    };

    const storeImage = async (file: any, preFix: any) => {
        return new Promise((resolve, reject) => {
            const storage = getStorage(app);
            const fileName = preFix + new Date().getTime() + file.name;
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

    const handleRemoveImage = (fileToRemove: any) => {
        setFormData({
          ...formData,
          [fileToRemove]: '',
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
        console.log("formData", formData);
        
        try {
          if (
                formData.heroBackgroundImage.length < 1 || 
                formData.aboutBackgroundImage.length < 1 ||
                formData.mainPartnerSectionLogo.length < 1 ||
                formData.mainPartnerSectionBackgroundImage.length < 1 ||
                formData.teamBackgroundImage.length < 1 ||
                formData.blogsSectionBackgroundImage.length < 1 ||
                formData.contactSectionBackgroundImage.length < 1
            )
                return setError('All images fields must not be left empty!');
          setLoading(true);
          setError(false);
          const res = await fetch('/api/settings/update', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ...formData,
              settingId,
            }),
          });
          const data = await res.json();
          setLoading(false);
          if (data.success === false) {
            setError(data.message);
          }
          router.push(`/`);
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
    <div className='p-14 w-full mx-auto'>
      <h1 className='text-2xl font-semibold text-center my-7'>
        Update Home Page
      </h1>

      <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4'>
        <div className='flex flex-col gap-4 flex-1'>
          <label>Hero Title</label>
          <input
            type='text'
            placeholder='Hero Title'
            className='border p-3 -mt-3 rounded-lg'
            id='heroTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.heroTitle}
          />

          <label>Hero Sub Title</label>
          <textarea
            placeholder='Hero Sub Title'
            className='border p-3 -mt-3 rounded-lg'
            id='heroSubTitle'
            required
            onChange={handleChange}
            value={formData.heroSubTitle}
          />

          <label>Hero Button Title</label>
          <input
            type='text'
            placeholder='Hero Button Title'
            className='border p-3 -m-3 rounded-lg'
            id='heroButtonTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.heroButtonTitle}
          />

          <label>Hero Background</label>
          <input
            onChange={(e: any) => setHeroFile(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full -mt-3'
            type='file'
            id='heroBackgroundImage'
            accept='image/*'
          />
          <button
            disabled={uploading}
            onClick={handleHeroImageSubmit}
            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>

          {formData.heroBackgroundImage.length > 0 && 
            <div
              className='flex justify-between p-3 border items-center'
            >
              <img
                src={formData.heroBackgroundImage}
                alt='listing image'
                className='w-20 h-20 object-contain rounded-lg'
              />
              <button
                type='button'
                onClick={() => handleRemoveImage("heroBackgroundImage")}
                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
              >
                Delete
              </button>
            </div>
          }

          <label>About Us Title</label>
          <input
            type='text'
            placeholder='About Us Title'
            className='border p-3 -mt-3 rounded-lg'
            id='aboutTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.aboutTitle}
          />

          <label>About Us Background</label>
          <input
            onChange={(e: any) => setAboutFile(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full -mt-3'
            type='file'
            id='aboutBackgroundImage'
            accept='image/*'
          />
          <button
            disabled={uploading}
            onClick={handleAboutImageSubmit}
            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>

          {formData.heroBackgroundImage.length > 0 && 
            <div
              className='flex justify-between p-3 border items-center'
            >
              <img
                src={formData.heroBackgroundImage}
                alt='listing image'
                className='w-20 h-20 object-contain rounded-lg'
              />
              <button
                type='button'
                onClick={() => handleRemoveImage("aboutBackgroundImage")}
                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
              >
                Delete
              </button>
            </div>
          }

          <label>About Us</label>
          <textarea
            placeholder='About Us'
            className='border p-3 -mt-3 rounded-lg'
            id='aboutDescription'
            required
            onChange={handleChange}
            value={formData.aboutDescription}
          />

          <label>Mission Title</label>
          <input
            type='text'
            placeholder='Mission Title'
            className='border p-3 -mt-3 rounded-lg'
            id='missionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.missionTitle}
          />

          <label>Mission Description</label>
          <textarea
            placeholder='Mission Description'
            className='border p-3 -mt-3 rounded-lg'
            id='missionDescription'
            required
            onChange={handleChange}
            value={formData.missionDescription}
          />

          <label>Vission Title</label>
          <input
            type='text'
            placeholder='Vission Title'
            className='border p-3 -mt-3 rounded-lg'
            id='vissionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.vissionTitle}
          />

          <label>Vission Description</label>
          <textarea
            placeholder='Vission Description'
            className='border p-3 -mt-3 rounded-lg'
            id='vissionDescription'
            required
            onChange={handleChange}
            value={formData.vissionDescription}
          />

          <label>Main Partner Section Logo</label>
          <input
            onChange={(e: any) => setPartnerLogoFile(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full -mt-3'
            type='file'
            id='mainPartnerSectionLogo'
            accept='image/*'
          />
          <button
            disabled={uploading}
            onClick={handlePartnerLogoImageSubmit}
            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>

          {formData.mainPartnerSectionLogo.length > 0 && 
            <div
              className='flex justify-between p-3 border items-center'
            >
              <img
                src={formData.mainPartnerSectionLogo}
                alt='listing image'
                className='w-20 h-20 object-contain rounded-lg'
              />
              <button
                type='button'
                onClick={() => handleRemoveImage("mainPartnerSectionLogo")}
                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
              >
                Delete
              </button>
            </div>
          }

          <label>Main Partner Section Title</label>
          <input
            type='text'
            placeholder='Main Partner Section title'
            className='border p-3 -mt-3 rounded-lg'
            id='mainPartnerSectionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.mainPartnerSectionTitle}
          />

          <label>Main Partner Section Description</label>
          <textarea
            placeholder='Main Partner Section Description'
            className='border p-3 -mt-3 rounded-lg'
            id='mainPartnerSectionDescription'
            required
            onChange={handleChange}
            value={formData.mainPartnerSectionDescription}
          />

          <label>Main Partner Section BackgroundImage</label>
          <input
            onChange={(e: any) => setPartnerBgFile(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full -mt-3'
            type='file'
            id='mainPartnerSectionBackgroundImage'
            accept='image/*'
          />
          <button
            disabled={uploading}
            onClick={handlePartnerBgImageSubmit}
            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>

          {formData.mainPartnerSectionBackgroundImage.length > 0 && 
            <div
              className='flex justify-between p-3 border items-center'
            >
              <img
                src={formData.mainPartnerSectionBackgroundImage}
                alt='listing image'
                className='w-20 h-20 object-contain rounded-lg'
              />
              <button
                type='button'
                onClick={() => handleRemoveImage("mainPartnerSectionBackgroundImage")}
                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
              >
                Delete
              </button>
            </div>
          }

          <label>Recent Offers Section Title</label>
          <input
            type='text'
            placeholder='Recent Offers Section Title'
            className='border p-3 -mt-3 rounded-lg'
            id='recentOffersSectionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.recentOffersSectionTitle}
          />

          <label>Recent Offers Section Button</label>
          <input
            type='text'
            placeholder='Recent Offers Section Button'
            className='border p-3 -mt-3 rounded-lg'
            id='recentOffersSectionButton'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.recentOffersSectionButton}
          />

          <label>Recent Rent Section Title</label>
          <input
            type='text'
            placeholder='Recent Rent Section Title'
            className='border p-3 -mt-3 rounded-lg'
            id='recentRentSectionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.recentRentSectionTitle}
          />

          <label>Recent Rent Section Button</label>
          <input
            type='text'
            placeholder='Recent Rent Section Button'
            className='border p-3 -mt-3 rounded-lg'
            id='recentRentSectionButton'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.recentRentSectionButton}
          />

          <label>Recent Sale Section SubTitle</label>
          <input
            type='text'
            placeholder='Recent Sale Section SubTitle'
            className='border p-3 -mt-3 rounded-lg'
            id='recentSaleSectionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.recentSaleSectionTitle}
          />

          <label>Recent Sale Section Button</label>
          <input
            type='text'
            placeholder='Recent Sale Section Button'
            className='border p-3 -mt-3 rounded-lg'
            id='recentSaleSectionButton'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.recentSaleSectionButton}
          />

          <label>Team Section Title</label>
          <input
            type='text'
            placeholder='Team Section Title'
            className='border p-3 -mt-3 rounded-lg'
            id='teamSectionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.teamSectionTitle}
          />

          <label>Team Background Image</label>
          <input
            onChange={(e: any) => setTeamBgFile(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full -mt-3'
            type='file'
            id='teamBackgroundImage'
            accept='image/*'
          />
          <button
            disabled={uploading}
            onClick={handleTeamBgImageSubmit}
            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>

          {formData.teamBackgroundImage.length > 0 && 
            <div
              className='flex justify-between p-3 border items-center'
            >
              <img
                src={formData.teamBackgroundImage}
                alt='listing image'
                className='w-20 h-20 object-contain rounded-lg'
              />
              <button
                type='button'
                onClick={() => handleRemoveImage("teamBackgroundImage")}
                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
              >
                Delete
              </button>
            </div>
          }

          <label>Blog Section Title</label>
          <input
            type='text'
            placeholder='Blog Section Title'
            className='border p-3 -mt-3 rounded-lg'
            id='blogsSectionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.blogsSectionTitle}
          />

          <label>Blog Section Sub Title</label>
          <input
            type='text'
            placeholder='Blog Section Sub Title'
            className='border p-3 -mt-3 rounded-lg'
            id='blogsSectionSubTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.blogsSectionSubTitle}
          />

          <label>Blog Background Image</label>
          <input
            onChange={(e: any) => setBlogBgFile(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full -mt-3'
            type='file'
            id='blogsSectionBackgroundImage'
            accept='image/*'
          />
          <button
            disabled={uploading}
            onClick={handleBlogBgImageSubmit}
            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>

          {formData.blogsSectionBackgroundImage.length > 0 && 
            <div
              className='flex justify-between p-3 border items-center'
            >
              <img
                src={formData.blogsSectionBackgroundImage}
                alt='listing image'
                className='w-20 h-20 object-contain rounded-lg'
              />
              <button
                type='button'
                onClick={() => handleRemoveImage("blogsSectionBackgroundImage")}
                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
              >
                Delete
              </button>
            </div>
          }

          <label>Contact Section Title</label>
          <input
            type='text'
            placeholder='Contact Section Title'
            className='border p-3 -mt-3 rounded-lg'
            id='contactSectionTitle'
            maxLength={62}
            minLength={10}
            required
            onChange={handleChange}
            value={formData.contactSectionTitle}
          />

          <label>Contact section Sub Title</label>
          <textarea
            placeholder='Contact Section Sub Title'
            className='border p-3 -mt-3 rounded-lg'
            id='contactSectionSubTitle'
            required
            onChange={handleChange}
            value={formData.contactSectionSubTitle}
          />

          <label>Contact Background Image</label>
          <input
            onChange={(e: any) => setContactBgFile(e.target.files)}
            className='p-3 border border-gray-300 rounded w-full -mt-3'
            type='file'
            id='contactSectionBackgroundImage'
            accept='image/*'
          />
          <button
            disabled={uploading}
            onClick={handleContactBgImageSubmit}
            className='p-3 text-green-700 border border-green-700 rounded uppercase hover:shadow-lg disabled:opacity-80'
          >
            {uploading ? 'Uploading...' : 'Upload'}
          </button>

          {formData.contactSectionBackgroundImage.length > 0 && 
            <div
              className='flex justify-between p-3 border items-center'
            >
              <img
                src={formData.contactSectionBackgroundImage}
                alt='listing image'
                className='w-20 h-20 object-contain rounded-lg'
              />
              <button
                type='button'
                onClick={() => handleRemoveImage("contactSectionBackgroundImage")}
                className='p-3 text-red-700 rounded-lg uppercase hover:opacity-75'
              >
                Delete
              </button>
            </div>
          }

          <button
            disabled={loading || uploading}
            className='p-3 bg-slate-700 text-white rounded-lg uppercase hover:opacity-95 disabled:opacity-80'
          >
            {loading ? 'Updating Home Page...' : 'Update Home Page'}
          </button>
          <p className='text-red-700 text-sm'>
            {imageUploadError && imageUploadError}
          </p>
          {error && <p className='text-red-700 text-sm'>{error}</p>}
        </div>

      </form>
    </div>
  )
}