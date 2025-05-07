import { useState, useRef } from "react";
import BubblesBackground from "./components/BubblesBackground";
import CustomNavbar from "./components/CustomNavbar";
const galleryImagesImports = import.meta.glob('/public/static/gallery/*.{jpg,jpeg,png,gif}', { eager: true });

const teamMembers = [
    { img: `${import.meta.env.BASE_URL}static/deniz-photo.jpeg`, name: "Deniz Can ÖZDEMİR", logbook: "https://docs.google.com/document/d/1mtvb0HKeggUg9kwF1C7yGAtSEeQgB09_i7AYNjxyeB0/edit?usp=sharing" },
    { img: `${import.meta.env.BASE_URL}static/ogulcan-photo.jpeg`, name: "Oğulcan KARAKOLLUKÇU", logbook: "https://docs.google.com/document/d/1XTHuuVRtueVLQsyxXQsrNw-JORJeEdW74ZWDaI_LsM4/edit?usp=sharing" },
    { img: `${import.meta.env.BASE_URL}static/yasemin-photo.jpeg`, name: "Yasemin AKIN", logbook: "https://docs.google.com/document/d/1Ch5PCxWdFyLAbVYfG-ayP9dalDFXPYj_5hxb3t73r38/edit?usp=sharing" },
    { img: `${import.meta.env.BASE_URL}static/alphan-photo.jpeg`, name: "Alphan TULUKCU", logbook: "https://docs.google.com/document/d/1-3-wbsSSmi2D-E5Se9BIEFexhQXpwHVuCL4Cb6jae3A/edit?usp=sharing" },
    { img: `${import.meta.env.BASE_URL}static/ilhami-photo.jpeg`, name: "İlhami ULUĞTÜRKKAN", logbook: "https://docs.google.com/document/d/1HfMKsXYYd-Thf-FRm0so2zp-CUFXN31_VrQwXXP2rn8/edit?usp=sharing" }
];

const galleryImages = Object.keys(galleryImagesImports)
    .map(path => path.replace('/public/', import.meta.env.BASE_URL))
    .sort();

function App() {
    const [activeTab, setActiveTab] = useState("home");
    const [cs491Doc, setCs491Doc] = useState(null);
    const [cs492Doc, setCs492Doc] = useState(null);
    const [userManualDoc, setUserManualDoc] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const teamContainerRef = useRef(null);

    const toggleCS491Doc = (docPath) => {
        setCs491Doc((prev) => (prev === docPath ? null : docPath));
    };

    const toggleCS492Doc = (docPath) => {
        setCs492Doc((prev) => (prev === docPath ? null : docPath));
    };

    const toggleUserManualDoc = (docPath) => {
        setUserManualDoc((prev) => (prev === docPath ? null : docPath));
    };

    const renderTabContent = () => {
        switch (activeTab) {
            case "home":
                return (
                    <section className="max-w-7xl mx-auto p-4 md:p-6 pt-10 md:pt-20">
                        <div className="text-center">
                            <h1 className="text-4xl md:text-8xl font-extrabold text-[#DB4437] drop-shadow-lg mb-4 pt-10 md:pt-20">
                                Welcome to YOD-AI!
                            </h1>
                            <p className="text-lg md:text-xl mb-2 text-black font-bold pt-5 md:pt-15">
                                Stay updated with the latest information and news about our project and activities.
                            </p>
                            <p className="text-lg md:text-xl text-black pt-5 md:pt-10">
                                We are Senior Computer Science students at Bilkent University, Türkiye, developing our innovative senior project idea named{" "}
                                <span className="font-semibold text-black">"Köpük"</span>!
                            </p>
                        </div>

                        <div className="mt-8">
                            <div className="flex justify-center mb-4">
                                <a
                                    href="#"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        window.scrollBy({ top: 700, behavior: "smooth" });
                                    }}
                                    className="text-[#DB4437] text-base md:text-lg hover:font-bold cursor-pointer pt-5 md:pt-15"
                                >
                                    Who Are We?
                                </a>
                            </div>
                            <h2 className="text-2xl md:text-4xl font-bold text-[#DB4437] text-center mb-4 pt-15 md:pt-30 pb-3 md:pb-5">
                                Who Are We?
                            </h2>
                            <div
                                ref={teamContainerRef}
                                className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 overflow-x-auto"
                            >
                                {teamMembers.map((member, index) => (
                                    <div key={index} className="bg-white p-2 md:p-3 text-center rounded-sm hover:scale-105">
                                        <img
                                            src={member.img}
                                            alt={member.name}
                                            className="w-24 h-24 md:w-32 md:h-32 object-cover mx-auto mb-2 rounded-full"
                                        />
                                        <p className="font-bold text-base md:text-lg text-black">{member.name}</p>
                                        <p className="text-sm text-gray-700">
                                            Senior Computer Science Student @ Bilkent University
                                        </p>
                                        <a
                                            href={member.logbook}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="mt-2 inline-block text-[#DB4437] text-sm hover:font-bold"
                                        >
                                            Logbook
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="mt-8">
                            <h2 className="text-2xl md:text-4xl font-bold text-[#DB4437] text-center mb-4 pt-15 md:pt-10 pb-3 md:pb-5">
                                Gallery
                            </h2>
                            <div className="relative max-w-2xl mx-auto">
                                <div className="bg-white rounded-sm shadow-lg p-2 aspect-[4/3] flex items-center justify-center">
                                    <img
                                        src={galleryImages[currentImageIndex]}
                                        alt={`Gallery Image ${currentImageIndex + 1}`}
                                        className="max-h-[500px] max-w-full object-contain rounded-sm"
                                    />
                                </div>

                                <div className="flex justify-between items-center mt-4">
                                    <button
                                        onClick={() => setCurrentImageIndex(prev => (prev === 0 ? galleryImages.length - 1 : prev - 1))}
                                        className="bg-[#DB4437] text-white px-4 py-2 rounded-sm hover:bg-[#C53929] transition-colors"
                                    >
                                        Back
                                    </button>

                                    <p className="text-center">
                                        {currentImageIndex + 1} / {galleryImages.length}
                                    </p>

                                    <button
                                        onClick={() => setCurrentImageIndex(prev => (prev === galleryImages.length - 1 ? 0 : prev + 1))}
                                        className="bg-[#DB4437] text-white px-4 py-2 rounded-sm hover:bg-[#C53929] transition-colors"
                                    >
                                        Forward
                                    </button>
                                </div>
                            </div>
                        </div>
                    </section>
                );
            case "about":
                return (
                    <section className="max-w-5xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg my-5 md:my-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-5">
                            About Köpük: Our First Software Solution
                        </h2>
                        <a
                            href="https://www.canva.com/design/DAGh_m5tTpI/oO5j0Z5py2vxXvksYXCypw/edit?utm_content=DAGh_m5tTpI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center space-x-2 transition-colors duration-200 mb-5"
                        >
                            <img
                                src={`${import.meta.env.BASE_URL}static/canva.svg`}
                                alt="Canva"
                                className="w-5 h-5 md:w-6 md:h-6"
                            />
                            <span className="text-sm md:text-base text-[#DB4437] hover:font-bold">Click to Open Demo Presentation of Köpük!</span>
                        </a>
                        <p className="mb-2 md:mb-4 text-black text-sm md:text-base text-justify">
                            After the recent legislation in Türkiye that mandates the removal of stray animals from public places and their placement in shelters,
                            it is urgent to enhance the adoption process to avoid overcrowding and euthanasia risks for these animals. In July 2024,
                            this law was passed to address public safety concerns, but it has proved to be a source of tremendous difficulty for animal welfare organizations.
                            Our goal is to build a new platform to simplify adoption. Our goal is to strengthen the bond between potential adopters and the animals in need by providing
                            comprehensive animal profiles, including health records and behavioral traits, personalized care recommendations, and most importantly,
                            a sophisticated personalized stray animal recommendation system. The platform will also provide adoption guidance and post-adoption support.
                            Beyond providing a solution to the urgent problems created by the new law, this initiative also serves to support the long-term health of stray animals in
                            Türkiye through the promotion of sustainable adoptions and strained shelter resources.
                        </p>
                        <div className="w-full h-40 md:h-64 rounded-md flex items-center justify-center">
                            <img
                                src={`${import.meta.env.BASE_URL}static/dog-cat.png`}
                                alt="About visual 1"
                                className="max-h-full max-w-full object-cover rounded-md"
                            />
                        </div>
                        <p className="mt-4 text-black text-sm md:text-base text-justify">
                            The core purpose of Köpük is to simplify and optimize the process of matching potential adopters with animals in need of a loving home.
                            The platform achieves this by creating in-depth, comprehensive animal profiles that include health records, vaccination histories, behavioral assessments,
                            and personalized care recommendations. These detailed profiles provide adopters with a clear understanding of each animal’s needs, enabling them to make
                            well-informed decisions and be better prepared for pet ownership. A sophisticated matching algorithm further refines the process by aligning adopter lifestyles,
                            preferences, and capabilities with the specific requirements of each animal, thereby fostering more compatible and successful adoptions.
                            Beyond the initial match, the platform offers robust support features through an artificial intelligence-driven chatbot that assists users at every stage—from
                            pre-adoption inquiries and the application process to post-adoption support for training and veterinary care. In doing so, Köpük not only reduces the risk of
                            returned adoptions and alleviates the burden on overcrowded shelters but also advances the broader mission of animal welfare by ensuring that animals find permanent,
                            loving homes while equipping adopters with the necessary tools and knowledge for responsible pet care.
                        </p>
                        <div className="w-full h-40 md:h-64 rounded-md flex items-center justify-center mt-4">
                            <img
                                src={`${import.meta.env.BASE_URL}static/dog-standing.png`}
                                alt="About visual 2"
                                className="max-h-full max-w-full object-cover rounded-md"
                            />
                        </div>
                    </section>
                );
            case "news":
                return (
                    <section className="max-w-5xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg my-5 md:my-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-4">Latest News & Updates</h2>
                        <p className="mb-2 md:mb-4 text-gray-700 text-sm md:text-base">
                            Stay tuned for the latest news, updates, and insights about our project and activities...
                        </p>
                        <p className="text-gray-700 mb-4 text-sm md:text-base">(This section will be updated regularly...)</p>
                        <div className="w-full h-40 md:h-64 rounded-md flex items-center justify-center">
                            <img
                                src={`${import.meta.env.BASE_URL}static/cat-standing.png`}
                                alt="News visual"
                                className="max-h-full max-w-full object-cover rounded-md"
                            />
                        </div>
                    </section>
                );
            case "contact":
                return (
                    <section className="max-w-5xl mx-auto p-4 md:p-6 bg-white rounded-lg shadow-lg my-5 md:my-10">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-4">Contact Us</h2>
                        <p className="text-gray-700 text-sm md:text-base">
                            <strong>Address:</strong> Üniversiteler Mahallesi Bilkent 2 Park Sitesi, L3/11, Çankaya, Ankara, 06800
                        </p>
                        <p className="text-gray-700 text-sm md:text-base">
                            <strong>Email:</strong>{" "}
                            <a href="mailto:yod.ai2024@gmail.com" className="text-[#DB4437] underline">
                                yod.ai2024@gmail.com
                            </a>
                        </p>
                        <p className="text-gray-700 text-sm md:text-base">
                            <strong>Phone:</strong> +90 (538) 939 21 11 / +90 (537) 880 62 88
                        </p>
                        <p className="text-gray-700 text-sm md:text-base">
                            <strong>Website:</strong>{" "}
                            <a
                                href="https://yod-ai.github.io/yod-ai/"
                                target="_blank"
                                rel="noreferrer"
                                className="text-[#DB4437] underline"
                            >
                                https://yod-ai.github.io/yod-ai/
                            </a>
                        </p>
                    </section>
                );
            case "documents":
                return (
                    <section className="max-w-7xl mx-auto p-4 md:p-6 pt-10 md:pt-20">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-[#DB4437]">
                                CS491/2 Documents
                            </h1>
                        </div>
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-4">
                                CS491 Documents
                            </h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCS491Doc(`${import.meta.env.BASE_URL}documents/CS491_Project_Information_Form.pdf`);
                                        }}
                                    >
                                        Project Information Form
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCS491Doc(`${import.meta.env.BASE_URL}documents/CS491_Project_Specification_Report.pdf`);
                                        }}
                                    >
                                        Project Specification Report
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCS491Doc(`${import.meta.env.BASE_URL}documents/t2443_analysis_and_requirement_report.pdf`);
                                        }}
                                    >
                                        Analysis and Requirement Report
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCS491Doc(`${import.meta.env.BASE_URL}documents/t2443_demo.pdf`);
                                        }}
                                    >
                                        Early Demo Presentation (Suggested to use Canva Link Below)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.canva.com/design/DAGZ6TC6kmc/fQfRVQ2NTCECcJiKF1C4oA/edit?utm_content=DAGZ6TC6kmc&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Early Demo Presentation (Canva Link)
                                    </a>
                                </li>
                            </ul>
                            {cs491Doc && (
                                <div className="mt-6">
                                    <iframe
                                        src={cs491Doc}
                                        width="100%"
                                        height="500px"
                                        className="border rounded-md"
                                        title="CS491 Document Viewer"
                                    >
                                        This browser does not support PDFs. Please download the PDF to view it:{" "}
                                        <a href={cs491Doc}>Download PDF</a>.
                                    </iframe>
                                </div>
                            )}
                        </div>
                        <div className="mb-12">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-4">
                                CS492 Documents
                            </h2>
                            <ul className="list-disc ml-5 space-y-2">
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCS492Doc(`${import.meta.env.BASE_URL}documents/t2443_detailed_design_report.pdf`);
                                        }}
                                    >
                                        Detailed Design Report
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCS492Doc(`${import.meta.env.BASE_URL}documents/T2443_Final_report.pdf`);
                                        }}
                                    >
                                        Final Design Report
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleCS492Doc(`${import.meta.env.BASE_URL}documents/final_demo.pdf`);
                                        }}
                                    >
                                        Final Demo Presentation (Suggested to use Canva Link Below)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.canva.com/design/DAGme3Bs2oQ/NXSpXhYsUoLEXW5_Hng4mg/edit?utm_content=DAGme3Bs2oQ&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline"
                                    >
                                        Final Demo Presentation (Canva Link)
                                    </a>
                                </li>
                            </ul>
                            {cs492Doc && (
                                <div className="mt-6">
                                    <iframe
                                        src={cs492Doc}
                                        width="100%"
                                        height="500px"
                                        className="border rounded-md"
                                        title="CS492 Document Viewer"
                                    >
                                        This browser does not support PDFs. Please download the PDF to view it:{" "}
                                        <a href={cs492Doc}>Download PDF</a>.
                                    </iframe>
                                </div>
                            )}
                        </div>
                    </section>
                );
            case "demoMaterial":
                return (
                    <section className="max-w-7xl mx-auto p-4 md:p-6 pt-10 md:pt-20">
                        <div className="text-center mb-8">
                            <h1 className="text-4xl md:text-6xl font-extrabold text-[#DB4437]">
                                Final Demo Material
                            </h1>
                        </div>
                        <div className="mb-12 bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-2xl md:text-3xl font-bold text-[#DB4437] mb-4">
                                Links to Learn More About Köpük:
                            </h2>
                            <ul className="ml-5 space-y-4">
                                <li>
                                    <a
                                        href="https://github.com/yod-ai"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline flex items-center"
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}static/github-icon.svg`}
                                            alt="GitHub"
                                            className="w-6 h-6 mr-2"
                                        />
                                        Our GitHub Organization Page
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.kopuk.org"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline flex items-center"
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}static/internet.svg`}
                                            alt="Web"
                                            className="w-6 h-6 mr-2"
                                        />
                                        Web Site Link
                                    </a>
                                </li>
                                {/*}
                                <li>
                                    <a
                                        href="https://testflight.apple.com/join/kopuklink"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline flex items-center"
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}static/testflight.svg`}
                                            alt="TestFlight"
                                            className="w-6 h-6 mr-2"
                                        />
                                        IOS TestFlight Download Link
                                    </a>
                                </li>
                                */}
                                <li>
                                    <a
                                        href="https://www.canva.com/design/DAGjmeiXMbI/AgYDOhtWt6HC2ZYPIQTzpA/edit?utm_content=DAGjmeiXMbI&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline flex items-center"
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}static/canva.svg`}
                                            alt="Canva"
                                            className="w-6 h-6 mr-2"
                                        />
                                        User Manual (Canva Link)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:underline flex items-center"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            toggleUserManualDoc(`${import.meta.env.BASE_URL}documents/manual.pdf`);
                                        }}
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}static/report.svg`}
                                            alt="Canva"
                                            className="w-6 h-6 mr-2"
                                        />
                                        User Manual (PDF)
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://docs.google.com/spreadsheets/d/1V56GfH7iYX-GA5TFg_cvCIwOSY3PMefDZZR3nnogJgc/edit?usp=sharing"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-blue-500 hover:underline flex items-center"
                                    >
                                        <img
                                            src={`${import.meta.env.BASE_URL}static/survey.svg`}
                                            alt="Survey Results"
                                            className="w-6 h-6 mr-2"
                                        />
                                        Pet Adoption Habits & Preferences Survey Results
                                    </a>
                                </li>
                            </ul>
                            {userManualDoc && (
                                <div className="mt-6">
                                    <iframe
                                        src={userManualDoc}
                                        width="100%"
                                        height="500px"
                                        className="border rounded-md"
                                        title="Kullanıcı Kılavuzu"
                                    >
                                        Bu tarayıcı PDF'leri desteklemiyor. PDF'i görüntülemek için indiriniz:{" "}
                                        <a href={userManualDoc}>PDF İndir</a>.
                                    </iframe>
                                </div>
                            )}
                        </div>
                    </section>
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen relative bg-white pt-24 pb-16">
            <BubblesBackground />
            <div className="relative z-10">
                <CustomNavbar activeTab={activeTab} setActiveTab={setActiveTab} />
                <main>{renderTabContent()}</main>
                <footer className="fixed bottom-0 left-0 w-full bg-white p-4 shadow-t flex justify-between items-center">
                    <div className="text-xs md:text-sm text-black">2024 YOD-AI. All rights reserved.</div>
                    <a
                        href="https://www.instagram.com/kopukorg/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 transition-colors duration-200"
                    >
                        <img
                            src={`${import.meta.env.BASE_URL}static/instagram-logo-thin.svg`}
                            alt="Instagram"
                            className="w-5 h-5 md:w-6 md:h-6"
                        />
                        <span className="text-xs md:text-base hover:font-bold">Follow us on Instagram</span>
                    </a>
                </footer>
            </div>
        </div>
    );
}

export default App;
