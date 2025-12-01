export default function Map() {
  return (
    <div className="w-full h-[500px] bg-gray-100 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3987.513474668686!2d30.0587!3d-1.9441!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwNTYnMzguOCJTIDMwwrAwMyczMS4zIkU!5e0!3m2!1sen!2srw!4v1635789012345!5m2!1sen!2srw"
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
