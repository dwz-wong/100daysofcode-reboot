import JoinCommunity from "./JoinCommunity"
import MonthlySubscription from "./MonthlySubscription"
import WhyUs from "./WhyUs"

export default function Main() {
    return (
        <main className="main">
            <div className="single-price-grid__container">
                <JoinCommunity />
                <MonthlySubscription />
                <WhyUs />
            </div>
        </main>
    )
}