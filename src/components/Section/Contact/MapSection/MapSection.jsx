"use client"
const MapSection = () => {
    return (
        <section className="google-map-two">
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2756.7394314464996!2d16.319033513206772!3d46.29515057097936!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4768aacafdd56cd5%3A0x31ba5b604d79a75c!2sSplitska%20ul.%208%2C%2042000%2C%20Vara%C5%BEdin!5e0!3m2!1sen!2shr!4v1725485373925!5m2!1sen!2shr"
                className="google-map-two__map" allowFullScreen></iframe>
        </section>
    );
};

export default MapSection;