import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

interface ContactProps {
  text: boolean;
}

const Contact = ({text}: ContactProps) => {
    const servicesItems = [
        "Bookkeeping & Accounting Services",
        "Business Administration",
        "Business Registrations",
        "Preparation of Business Plans",
        "Taxation",
        "Company Secretarial Services",
        "Payroll Services",
        "Management Consulting",
    ]

  return (
    <Dialog>
      <form>
        <DialogTrigger asChild>
            {text ? (<button className="group inline-flex cursor-pointer items-center gap-x-2 py-2 px-3 bg-[#ff0] font-medium text-sm text-nowrap text-neutral-800 rounded-full focus:outline-hidden">
                Contact Us
            </button>) : (
                <button
                    className="inline-flex items-center cursor-pointer text-gray-900 bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:focus:ring-primary-900"
                    >
                    Send us a message
                    <svg
                        className="ml-2 -mr-1 w-5 h-5"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 
                        1.414l-6 6a1 1 0 01-1.414-1.414L14.586 
                        11H3a1 1 0 110-2h11.586l-4.293-4.293a1 
                        1 0 010-1.414z"
                        clipRule="evenodd"
                        ></path>
                    </svg>
                </button>
            )}  
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Send us a message</DialogTitle>
            <DialogDescription>
              We’d love to hear from your business! Please fill out the form bellow.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name-1">Business Name</Label>
              <Input id="name-1" name="Business Name" placeholder="Pedro Duarte" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Business Email</Label>
              <Input id="username-1" name="Business Email" placeholder="msibic@bavukile.co.za" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Business Phone Number</Label>
              <Input id="username-1" name="Business Number" placeholder="+27 86 655 8298" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">How can we help</Label>
              <ul className="grid gap-y-2 gap-x-6 flex-wrap grid-cols-2 mt-3">
                {
                    servicesItems.map((item, idx) => (
                        <li key={idx} className="flex gap-x-3 text-sm">
                            <div>
                                <input id={`service-${idx}`} type="checkbox" className="checkbox-item peer hidden" />
                                    <label
                                        htmlFor={`service-${idx}`}
                                        className="relative flex w-5 h-5 bg-white peer-checked:bg-indigo-600 rounded-md border ring-offset-2 ring-indigo-600 duration-150 peer-active:ring cursor-pointer after:absolute after:inset-x-0 after:top-[3px] after:m-auto after:w-1.5 after:h-2.5 after:border-r-2 after:border-b-2 after:border-white after:rotate-45"
                                    >
                                    </label>
                            </div>
                            <label htmlFor={`service-${idx}`} className="cursor-pointer">{item}</label>
                        </li>
                    ))
                }
              </ul>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="username-1">Additional Information</Label>
              <Textarea placeholder="Type your message here." />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Send</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  )
}

export default Contact
