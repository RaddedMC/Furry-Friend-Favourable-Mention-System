import Image from 'next/image'

type landingPetProps = {
    imageUrl: string,
    name: string
}

export default function LandingPagePet(props: landingPetProps) {
    return <div className='flex flex-col bg-black bg-opacity-70 rounded-3xl mx-2 min-w-fit'>
        <Image className='rounded-3xl' width={200} height={200} src={props.imageUrl}/>
        <p className='text-lg text-center m-2'><b>{props.name}</b></p>
    </div>
}