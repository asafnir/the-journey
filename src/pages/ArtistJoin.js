import { useState } from 'react'
import { supabase } from 'lib/supabaseClient'
import { IoLogoFacebook, IoLogoInstagram, IoLogoTwitter} from "react-icons/io5";
import { useLocation } from "react-router-dom";
import MainLayout from "layouts/MainLayout"

export default function Auth({ props }) {
    const location = useLocation();
    const [success, setSuccess] = useState(false)
    const [loading, setLoading] = useState(false)
	const [profile, setProfile] = useState({
		email: "",
		social_media: { instagram: "", facebook: "", twitter: "" },
		bio: "",
		name: "",
		website: ""
	})
	const socialHandler = (
		e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
	): void => {
		setProfile({
		...profile.social_media,
			social_media: {
				[e.currentTarget.name]: e.currentTarget.value
			}
		});
	};

	const handler = (
		e: React.FormEvent<HTMLInputElement | HTMLSelectElement>
	): void => {
		setProfile({
		...profile,
		[e.currentTarget.name]: e.currentTarget.value,
		});
	};
	
	const submit = () => {

	}
  	return (
		<MainLayout>
		<div className="w-full">
			<div className="max-w-3xl m-auto">
			{success ?
				<div>
					<p className="text-2xl text-white text-center">We sent you an email to signin</p>
					<svg className="h-40 mt-10 fill-red-300 m-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zm349.5 52.4c18.7-4.4 35.9 12 25.5 28.1C350.4 374.6 306.3 400 255.9 400s-94.5-25.4-119.1-63.5c-10.4-16.1 6.8-32.5 25.5-28.1c28.9 6.8 60.5 10.5 93.6 10.5s64.7-3.7 93.6-10.5zM215.3 137.1c17.8 4.8 28.4 23.1 23.6 40.8l-17.4 65c-2.3 8.5-11.1 13.6-19.6 11.3l-65.1-17.4c-17.8-4.8-28.4-23.1-23.6-40.8s23.1-28.4 40.8-23.6l16.1 4.3 4.3-16.1c4.8-17.8 23.1-28.4 40.8-23.6zm122.3 23.6l4.3 16.1 16.1-4.3c17.8-4.8 36.1 5.8 40.8 23.6s-5.8 36.1-23.6 40.8l-65.1 17.4c-8.5 2.3-17.3-2.8-19.6-11.3l-17.4-65c-4.8-17.8 5.8-36.1 23.6-40.8s36.1 5.8 40.9 23.6z"/></svg>
				</div>
				:
				<>
					<p className="text-3xl text-white text-center">Artist join form</p>
					<p className="text-2xl text-white text-center">Join journeys and bring pepole visions into art</p>
					{loading ? <p className="text-2xl text-white text-center">Sending magic link...</p> : (
						<form className="mt-8 space-y-6 w-full max-w-md m-auto" onSubmit={submit}>
						<div class="-space-y-px rounded-md shadow-sm">
							<label htmlFor="email">Name</label>
							<input
								required
								id="name"
								className="relative block w-full appearance-none rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
								name="name"
								placeholder="Name"
								value={profile.name}
								onChange={handler}
							/>
						</div>
						<div class="-space-y-px rounded-md shadow-sm">
							<label htmlFor="email">Email</label>
							<input
								required
								id="email"
								className="relative block w-full appearance-none rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
								type="email"
								name="email"
								placeholder="Email"
								value={profile.email}
								onChange={handler}
							/>
						</div>
						<div class="-space-y-px rounded-md shadow-sm">
							<label htmlFor="email">Website</label>
							<input
								required
								id="website"
								className="relative block w-full appearance-none rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
								type="website"
								placeholder="www.example.com"
								value={profile.website}
								onChange={handler}
							/>
						</div>
						<div class="-space-y-px rounded-md shadow-sm">
							<label htmlFor="email">Bio - tell us little bit about you</label>
							<textarea
								required
								rows="8"
								id="website"
								className="relative block w-full appearance-none rounded-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
								type="bio"
								placeholder=""
								value={profile.bio}
								onChange={handler}
						/>
						</div>
						<div class="">
							<label htmlFor="social">Social media</label>
							<div className="flex mb-4">
								<IoLogoFacebook size={40} className="mr-2"/>
								<input
									required
									name="facebook"
									className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
									type="website"
									value={profile.social_media.facebook}
									onChange={socialHandler}
								/>
							</div>
							<div className="flex mb-4">
								<IoLogoInstagram size={40} className="mr-2"/>
								<input
									required
									name="instagram"
									className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
									type="website"
									value={profile.social_media.instagram}
									onChange={socialHandler}
								/>
							</div>
							<div className="flex  mb-4">
								<IoLogoTwitter size={40} className="mr-2"/>
								<input
									required
									name="twitter"
									className="relative block w-full appearance-none rounded-none  border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500"
									type="website"
									value={profile.social_media.twitter}
									onChange={socialHandler}
								/>
							</div>
						</div>
						<button className="bg-transparent text-white font-semibold py-2 px-4 border border-white rounded" aria-live="polite">
							Submit
						</button>
						</form>
					)}
				</>
			}		
				</div>
			</div>
    	</MainLayout>
  	)
}