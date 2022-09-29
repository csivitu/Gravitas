
const Sponsors = () => {
    return (
        <div id="Sponsors" className="z-40" layers={[{ image: '/assets/starbg.png', speed: 30 }]} >
            <section className="w-full justify-evenly items-center text-center flex flex-col p-4 sm:p-10 " style={{ backgroundColor: "#000000" }} >
                <div className="flex justify-center flex-col items-center">
                    <p className="font-semibold text-3xl pt-10">
                        MEET OUR <span className="text-ds-blue font-semibold">SPONSORS</span>
                    </p>
                    <p className="text-sm sm:text-lg opacity-80 text-center w-3/4 mt-5">
                        Gain insights into applications of the basic technology brought to you by experts who have excelled in various fields of work.
                    </p>
                </div>
                <div className="mt-10">
                    <p className="text-ds-blue font-semibold text-xl  mb-2">
                        TECH SPONSOR
                    </p>
                    <a href="https://nextechbyamson.com" target="_blank" rel="noreferrer" className="relative flex justify-center items-center p-3 sm:p-5 z-50">
                        <img src="/images/light logo.png" className="w-1/2 sm:w-full h-auto" />
                    </a>
                </div>
                <div className="flex flex-col w-screen justify-center items-center mt-10" id="diamond">
                    <p className="text-ds-blue font-semibold text-xl mb-2">
                        MERCHADISE SPONSORS
                    </p>
                    <div className="w-full grid grid-cols-3 content-center  place-items-center gap-2 mt-2 p-3 sm:p-5">
                        <a href="https://comfortlady.co.in/" target="_blank" rel="noreferrer" className="z-50 w-2/4">
                            <img src='/images/ComfortLady.png' className=" h-auto" />
                        </a>
                        <a href="https://comfortlady.co.in/" target="_blank" rel="noreferrer" className="z-50 w-2/4 h-auto" >
                            <img src='/images/Galxy.png' />
                        </a>
                        <a href="https://comfortlady.co.in/" target="_blank" rel="noreferrer" className="z-50 w-2/4 h-auto">
                            <img src="/images/ComfortMan.png" className="z-50" />
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Sponsors