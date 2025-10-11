const Vision = () => {

    const features = [
        {
            title: "The Best In Our Field",
            desc: "To become a leading provider of fee-based Accounting and Business Administration Services to the changing needs of the democratic & growing companies & individuals of South Africa."
        },
        {
            title: "Innovative Solutions",
            desc: "We provide these services with skilled capabilities and integrated science designed solutions to meet our clients needs."
        },
        {
            title: "A Trusted Partner",
            desc: "We aim to be our customers' most trusted partner; to be passionate about helping them optimise their net assets thus achieve their lifetime financial goals. We believe that business owners should be able to focus on their core business, all the while feeling secure in the knowledge that their finances are being managed effectively by professionals."
        },
    ]

    return (
        <section id="Vision" className="py-14 mt-10">
            <div className="max-w-screen-xl mx-auto px-4 text-gray-600 md:px-8">
                <div className="max-w-xl space-y-3">
                    <h3 className="text-indigo-600 font-semibold">
                        Our Vision
                    </h3>
                    <p className="text-gray-800 text-3xl font-semibold sm:text-4xl">
                        Building lasting success through innovation and trust
                    </p>
                    <p>
                        Driven by purpose and guided by integrity, we aim to build a future where every business thrives through innovation, collaboration, and lasting success.
                    </p>
                </div>
                <div className="mt-12">
                    <ul className="grid gap-y-8 gap-x-12 sm:grid-cols-2 lg:grid-cols-3">
                        {
                            features.map((item, idx) => (
                                <li key={idx} className="space-y-3">
                                    <div className="w-12 h-12 border text-indigo-600 rounded-lg flex items-center justify-center">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                        </svg>
                                    </div>
                                    <h4 className="text-lg text-gray-800 font-semibold">
                                        {item.title}
                                    </h4>
                                    <p>
                                        {item.desc}
                                    </p>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Vision