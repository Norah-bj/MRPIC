export default function Map() {
  return (
    <div className="w-full h-[400px] bg-gray-100 rounded-lg overflow-hidden">
      <iframe
        src="https://maps.google.com/maps?q=VW3J%2B6MF%2C%20Kiyonza&t=&z=13&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
