import { RxCross2 } from "react-icons/rx";


const DashboardLayout = () => {
    return (
        <>

            {/*Dashboard container*/}
            <section className="min-h-screen flex">
                {/*left sidebar*/}
                <div className="w-64 fixed inset-y-0 left-0 z-50 bg-gradient-to-b from-indigo-100 via-sky-100 to-indigo-100">

                    <div className="flex items-center justify-between p-4.5 shadow-md  ">
                        <h1 className="text-3xl text-indigo-600 font-bold">Dashboard</h1>
                        <button className="text-2xl text-indigo-600 hover:text-indigo-700"><RxCross2 />
                        </button>

                    </div>


                </div>







                {/*main content*/}
                <div className="flex-1 md:ml-64 lg:ml-64 bg-sky-50">
                    {/*Header*/}
                    <header className="sticky top-0 z-30 bg-sky-100 border-b shadow-md border-slate-200/50 py-6 px-4 ">

                        this is main

                    </header>

                    {/*outlet*/}
                    <main>

                    </main>

                </div>
            </section>






        </>
    );
};

export default DashboardLayout;