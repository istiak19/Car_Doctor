const SectionTitle = ({ subTitle, title, description }) => {
    return (
        <div className="text-center py-10 space-y-3">
            <h3 className="text-2xl text-red-500 font-bold">{subTitle}</h3>
            <h1 className="text-4xl font-bold">{title}</h1>
            <p className="text-gray-600">{description}</p>
        </div>
    );
};

export default SectionTitle;