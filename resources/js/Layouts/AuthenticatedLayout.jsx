import Footer from '@/Components/Organismos/Footer';
import Header from '@/Components/Organismos/Header';

export default function Authenticated({ user, header, children }) {

    return (
        <div className="min-h-screen bg-gray-100">
            <Header user={user | null}/>

            <div className='min-w-full'>
                <main>{children}</main>
            </div>


            <Footer />
        </div>
    );
}
