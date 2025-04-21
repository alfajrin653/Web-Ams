import { MapPin, Phone, Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div className="flex flex-col space-y-6 p-6">
      {/* Alamat */}
      <div className="flex items-start space-x-4">
        <div className="p-2 rounded-full border border-teal-500 text-teal-500">
          <MapPin size={20} />
        </div>
        <p className="text-lg text-teal-700">
          JL. Jombang Raya No 34, Pd. Pucung, Kec. Pd. Aren, Kota Tangerang Selatan, Banten
        </p>
      </div>

      {/* Telepon */}
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full border border-teal-500 text-teal-500">
          <Phone size={20} />
        </div>
        <p className="text-lg text-teal-700">+21 7486 5216</p>
      </div>

      {/* Email */}
      <div className="flex items-center space-x-4">
        <div className="p-2 rounded-full border border-teal-500 text-teal-500">
          <Mail size={20} />
        </div>
        <p className="text-lg text-teal-700">admin@adinatamitrasolusi.com</p>
      </div>
    </div>
  );
}
