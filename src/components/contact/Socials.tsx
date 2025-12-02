import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";

export default function Socials() {
  return (
    <div className="space-y-12">
      <h3 className="text-xl font-medium text-black">Contact us on</h3>
      
      {/* Social Icons */}
      <div className="flex gap-6">
        <a href="#" className="text-[#431800] hover:opacity-80 transition-opacity">
          <Instagram className="w-8 h-8" />
        </a>
        <a href="#" className="text-[#431800] hover:opacity-80 transition-opacity">
          <Facebook className="w-8 h-8" />
        </a>
        <a href="#" className="text-[#431800] hover:opacity-80 transition-opacity">
          <Twitter className="w-8 h-8" />
        </a>
      </div>

      {/* Contact Info */}
      <div className="space-y-6">
        <div className="flex items-start gap-4">
          <div className="bg-[#2C1810] p-3 rounded-md">
            <Phone className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-[#2C1810]">Phone number</h4>
            <p className="text-sm text-gray-600">(+250) 792050511</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#2C1810] p-3 rounded-md">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-[#2C1810]">Email</h4>
            <p className="text-sm text-gray-600">bonnieumurerwa@gmail.com</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#2C1810] p-3 rounded-md">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-[#2C1810]">Address</h4>
            <p className="text-sm text-gray-600">Kigali/Rwanda</p>
          </div>
        </div>
      </div>
    </div>
  );
}
