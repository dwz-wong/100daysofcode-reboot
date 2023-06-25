import Info from './Info';
import About from './About';
import Interests from './Interests';
import Social from './Social';

export default function Main() {
    return (
        <main className="main">
            <div className="digital-business-card">
                <Info />
                <About />
                <Interests />
                <Social />
            </div>
        </main>
    )
}
