import Footer from "../Footer/Footer";
import Mode from "../Mode";
import SearchBox from "../Search/SearchBox";

export default function Main() {
    return (
        <div className="main-container d-flex flex-column min-vh-100">
            {/* Optional: sticky/light header */}
            <header className="text-center py-3">
                <Mode />
            </header>

            {/* Centered search box */}
            <main className="flex-grow-1 d-flex justify-content-center align-items-center">
                <SearchBox />
            </main>

            {/* Footer always at bottom */}
            <hr/>
            <br/>
            <br/>
            <Footer />
        </div>
    );
}
