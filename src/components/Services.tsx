
const Services = () => {
  const navigation = [
        {
            name: "Bookkeeping & Accounting Services"
        },
        {
            name: "Business Administration"
        },
        {
            name: "Business Registrations"
        },
        {
            name: "Preparation of Business Plans"
        },
        {
            name: "Taxation"
        },
        {
            name: "Company Secretarial Services"
        },
        {
            name: "Payroll Services"
        },
        {
            name: "Management Consulting"
        }
    ]

  return (
    <div className="w-screen px-2 pt-4 mb-1 md:px-4">
            <div className="max-w-lg">
                <h3 className="text-gray-800 text-2xl font-bold">
                    Services
                </h3>
                <p className="text-gray-600 mt-2">
                    We provide innovative solutions with skilled capabilities and integrated science designed not limited to:
                </p>
            </div>
            <div className="mt-6">
                <ul className="w-full border-b flex items-center gap-x-3 overflow-x-auto">
                    {
                        navigation.map((item, idx) => (
                            // Replace [idx == 0] with [window.location.pathname == item.path] or create your own logic
                            <li key={idx} className={`py-2 ml-3 border-b-2 ${idx == 0 ? "border-indigo-600 text-indigo-600" : "border-white text-gray-500"}`}>
                                <button
                                    className="py-2.5 rounded-lg duration-150 text-sm hover:text-indigo-600 hover:bg-gray-50 active:bg-gray-100 font-medium"
                                >
                                    {item.name}
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
  )
}

export default Services
