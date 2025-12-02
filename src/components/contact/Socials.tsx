import { Instagram, Facebook, Twitter, Mail, MapPin, Phone } from "lucide-react";
import { contactContent } from "@/lib/content";

export default function Socials() {
  const { title, phone, email, address, socials } = contactContent;

  return (
    <div className="space-y-12">
      <h3 className="text-xl font-medium text-black">{title}</h3>
      
      {/* Social Icons */}
      <div className="flex gap-6">
        <a href={socials.instagram} className="text-[#431800] hover:opacity-80 transition-opacity">
          <Instagram className="w-8 h-8" />
        </a>
        <a href={socials.facebook} className="text-[#431800] hover:opacity-80 transition-opacity">
          <Facebook className="w-8 h-8" />
        </a>
        <a href={socials.twitter} className="text-[#431800] hover:opacity-80 transition-opacity">
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
            <h4 className="font-bold text-[#2C1810]">{phone.label}</h4>
            <p className="text-sm text-gray-600">{phone.value}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#2C1810] p-3 rounded-md">
            <Mail className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-[#2C1810]">{email.label}</h4>
            <p className="text-sm text-gray-600">{email.value}</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <div className="bg-[#2C1810] p-3 rounded-md">
            <MapPin className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-[#2C1810]">{address.label}</h4>
            <p className="text-sm text-gray-600">{address.value}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
